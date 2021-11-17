import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  addItemToCart = (newItem) => {
    const foundItem = this.items.find(
      (item) => item.product._id === newItem.product._id
    );
    if (!foundItem) this.items.push(newItem);
    else foundItem.quantity = newItem.quantity;
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();
export default cartStore;
