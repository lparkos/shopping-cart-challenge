/**
 * Mocking client-server processing
 */
// import _products from './products.json'

// Had difficulties getting promise to return anything but pending
// const returnProducts = () => {
//  return fetch('http://tech.work.co/shopping-cart/products.json')
//  .then((response) => response.json())
//  .then((responseJson) => {
//    console.log("I'm here!");
//    console.log(responseJson.id);
//  })
//  .catch((error) => {
//    console.error(error);
//  });
// }

const url = "http://tech.work.co/shopping-cart/products.json";

const returnProducts = (url) => {
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  return request.responseText;
}

const obj = JSON.parse(returnProducts(url));

// Set to local storage for testing
// const set = localStorage.setItem('obj', JSON.stringify(obj));
// const get = localStorage.getItem('obj');

// Test
// console.log("__________");
// console.log(obj);
// console.log("__________");

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(obj), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
