import React from "react";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  shops = [];
  isLoading = true;
  fetchShops = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
