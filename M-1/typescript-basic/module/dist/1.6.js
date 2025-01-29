"use strict";
// Learning Function
// Normal Function
// Arrow Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// Object ---> function --> method
const poorUser = {
    name: 'rafsan',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((element) => element * element);
