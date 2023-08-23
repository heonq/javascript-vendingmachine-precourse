import { Store } from '../../utils/Store.js';
import { CONSTANTS, IDS } from '../../utils/Constants.js';
import { Validator } from '../../utils/Validator.js';
import { $ } from '../../utils/index.js';

export default class ProductPurchase {
  #insertedAmount;
  #products;

  constructor() {
    this.#insertedAmount = 0;
    this.#products = [];
  }

  insertMoney() {
    this.getInsertedAmountFromStore();
    const amount = $(`#${IDS.chargeInput}`).value;
    if (!Validator.validateChargeAmount(amount)) return;
    this.#insertedAmount += Number(amount);
    this.setInsertedAmountOnStore();
  }

  getInsertedAmountFromStore() {
    if (Store.getItem(CONSTANTS.chargedAmountKey))
      this.#insertedAmount = Store.getItem(CONSTANTS.insertedAmountKey);
  }
  setInsertedAmountOnStore() {
    Store.setItem(CONSTANTS.insertedAmountKey, this.#insertedAmount);
  }
  getInsertedAmount() {
    return this.#insertedAmount;
  }
  getProductFromStore() {
    if (Store.getItem(CONSTANTS.productsKey)) this.#products = Store.getItem(CONSTANTS.productsKey);
  }
  setProductAtStore() {
    Store.setItem(CONSTANTS.productsKey, this.#products);
  }

  getProducts() {
    return this.#products;
  }
}
