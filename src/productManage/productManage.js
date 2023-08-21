import { $ } from '../../utils';
import { IDS, CONSTANTS } from '../../utils/Constants';
import { Store } from '../../utils/Store';

export default class ProductManage {
  #products;
  constructor() {
    this.#products = [];
  }

  storeProduct() {
    if (Store.getItem(CONSTANTS.productsKey)) this.#products = Store.getItem(CONSTANTS.productsKey);
    const [name, price, quantity] = [
      $(`#${IDS.productNameInput}`).value,
      $(`#${IDS.productPriceInput}`).value,
      $(`#${IDS.productQuantityInput}`).value,
    ];
    this.#products.push({ name, price, quantity });
    Store.setItem(CONSTANTS.productsKey, this.#products);
  }
}
