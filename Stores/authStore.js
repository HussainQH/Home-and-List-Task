import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "./instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (user) => {
    try {
      const response = await instance.post("/signup", user);
      this.setUser(response.data.token);
      console.log("authStore -> signup -> response.data", response.data);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (user, navigation) => {
    try {
      const response = await instance.post("/signin", user);
      this.setUser(response.data.token);
      navigation.navigate("Home");
      console.log("authStore -> signin -> response.data", response.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  logout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    this.user = null;
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now(); // give us the current time
        let tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
