/**
 * Mocking client-server processing
 */
import _products from './products.json'

// const returnProducts = () => {
//  return fetch('http://tech.work.co/shopping-cart/products.json')
//  .then((response) => response.json())
//  .then((responseJson) => {
//    console.log(responseJson.products);
//  })
//  .catch((error) => {
//    console.error(error);
//  });
// }

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
