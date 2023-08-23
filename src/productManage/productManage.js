import { $ } from '../../utils/index.js';
import { IDS, CONSTANTS } from '../../utils/Constants.js';
import { Store } from '../../utils/Store.js';
import { Validator } from '../../utils/Validator.js';

export default class ProductManage {
  #products;

  constructor() {
    this.#products = [];
  }
  getFromStore() {
    if (Store.getItem(CONSTANTS.productsKey)) this.#products = Store.getItem(CONSTANTS.productsKey);
  }

  storeProduct() {
    const [name, price, quantity, index] = [
      $(`#${IDS.productNameInput}`).value,
      $(`#${IDS.productPriceInput}`).value,
      $(`#${IDS.productQuantityInput}`).value,
      this.#products.length,
    ];
    if (!Validator.validateProductPrice(price)) return;
    if (name === '' || price === '' || quantity === '') return;
    this.#products.push({ name, price, quantity, index });
    Store.setItem(CONSTANTS.productsKey, this.#products);
  }

  getProducts() {
    return this.#products;
  }
}
