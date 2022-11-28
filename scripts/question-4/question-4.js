"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var items_1 = require("./items");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        // Add the correct array type to cart
        this.cart = [];
    }
    // Add the correct return type
    ShoppingCart.prototype.getCostTotal = function () {
        var costTotal = this.cart.reduce(function (total, currentItem) {
            total += currentItem.price;
            return total;
        }, 0);
        return costTotal;
    };
    // Add the correct return type
    ShoppingCart.prototype.getNumberOfItems = function () {
        return this.cart.length;
    };
    // Add the correct return type
    ShoppingCart.prototype.getCart = function () {
        return __spreadArray([], this.cart, true);
    };
    // Set the parameter to be of the Item type and set the return
    //    type to be of the correct type
    ShoppingCart.prototype.addToCart = function (item) {
        var itemExists = this.cart.find(function (currentItem) {
            if (currentItem.id === item.id) {
                return true;
            }
        });
        if (!itemExists) {
            this.cart.push(item);
        }
    };
    // Set the parameter to be of the Item type and set the return
    //    type to be of the correct type
    ShoppingCart.prototype.removeFromCart = function (item) {
        var newCart = this.cart.filter(function (currentItem) {
            if (currentItem.id !== item.id) {
                return true;
            }
        });
        this.cart = __spreadArray([], newCart, true);
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
// Examples, feel free to delete
var myCart = new ShoppingCart();
myCart.addToCart(items_1.bread);
myCart.removeFromCart(items_1.bread);
