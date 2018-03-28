/**
 * Mocking client-server processing
 */
// import _products from './products.json'

// Had difficulties getting fetch/async/await ways of getting data to work
// the exported property.
//
// Fetch with stringify
// let returnProducts = () => {
//  return fetch('http://tech.work.co/shopping-cart/products.json')
//  .then((response) => response.json())
//  .then((data) => {
//    const json = JSON.stringify(data);
//    return json;
//  })
//  .catch((error) => {
//    console.error(error);
//  });
// }
//
// Fetch with promises
// const returnProducts = () => {
//  return fetch('http://tech.work.co/shopping-cart/products.json')
//  .then((response) => response.json())
//  .then((json) => {
//    return json
//  })
//  .catch((error) => {
//    console.error(error);
//  });
// }
//
// let returnProducts = () => {
//  return fetch('http://tech.work.co/shopping-cart/products.json')
//   .then((response) => {
//     response.json().then(body => console.log(body))
//   })
// }
//
const url = "http://tech.work.co/shopping-cart/products.json";

// Trying with await/async
// const returnProducts = async () => {
//   const response = await fetch(`http://tech.work.co/shopping-cart/products.json`)
//   const json = await response.json();
// }

const returnProducts = (url) => {
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  return request.responseText;
}

const returnedObj = JSON.parse(returnProducts(url));


console.log("__________");
console.log(returnProducts());
console.log("__________");

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(returnedObj), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
