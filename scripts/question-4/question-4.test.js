import { ShoppingCart } from "./question-4.js";

describe("shopping cart", function () {
  let cart;
  beforeEach(function () {
    cart = new ShoppingCart();
  });
  test("add single item to cart", function () {
    expect(cart.addToCart({ id: 1, name: "item1", price: 200 })).toBe(void 0);
    expect(cart.getCostTotal()).toBe(200);
    expect(cart.getNumberOfItems()).toBe(1);
    expect(cart.getCart().length).toBe(1);
  });

  test("add two items to cart", function () {
    expect(cart.addToCart({ id: 1, name: "item1", price: 200 })).toBe(void 0);
    cart.addToCart({ id: 12, name: "item1", price: 400 });
    expect(cart.getCostTotal()).toBe(600);
    expect(cart.getNumberOfItems()).toBe(2);
    expect(cart.getCart().length).toBe(2);
  });

  test("add only one item with same id", function () {
    expect(cart.addToCart({ id: 1, name: "item1", price: 200 })).toBe(void 0);
    cart.addToCart({ id: 1, name: "item1", price: 200 });
    cart.addToCart({ id: 1, name: "item1", price: 200 });
    expect(cart.getCostTotal()).toBe(200);
    expect(cart.getNumberOfItems()).toBe(1);
    expect(cart.getCart().length).toBe(1);
  });

  test("add/ remove", function () {
    cart.addToCart({ id: 1, name: "item1", price: 200 });
    cart.addToCart({ id: 10, name: "item1", price: 2000 });
    cart.removeFromCart({ id: 1, name: "item1", price: 200 });
    expect(cart.getCostTotal()).toBe(2000);
    expect(cart.getNumberOfItems()).toBe(1);
    expect(cart.getCart().length).toBe(1);
  });
});
