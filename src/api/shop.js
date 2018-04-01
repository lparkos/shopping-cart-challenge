/**
 * Mocking client-server processing
 */
// import _products from './products.json'

let returnProducts = () => {
 return fetch('http://tech.work.co/shopping-cart/products.json')
 .then((response) => response.json())
 .then((data) => {
   return data;
 })
 .catch((error) => {
   console.error(error);
 });
}

const TIMEOUT = 100

export default {
  returnProducts,
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
