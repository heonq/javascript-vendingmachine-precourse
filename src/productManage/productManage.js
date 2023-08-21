import { $ } from '../../utils/index.js';
import { IDS, CONSTANTS } from '../../utils/Constants.js';
import { Store } from '../../utils/Store.js';
import { Validator } from '../../utils/Validator.js';

export default class ProductManage {
  #products;
  constructor() {
    this.#products = [];
  }

  storeProduct() {
    if (Store.getItem(CONSTANTS.productsKey)) this.#products = this.getFromStore();
    const [name, price, quantity] = [
      $(`#${IDS.productNameInput}`).value,
      $(`#${IDS.productPriceInput}`).value,
      $(`#${IDS.productQuantityInput}`).value,
    ];
    if (!Validator.validateProductPrice(price)) return;
    this.#products.push({ name, price, quantity });
    Store.setItem(CONSTANTS.productsKey, this.#products);
  }
}
