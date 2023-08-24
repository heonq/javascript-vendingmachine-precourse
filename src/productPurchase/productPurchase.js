import { Store } from '../../utils/Store.js';
import { CLASSES, CONSTANTS, IDS } from '../../utils/Constants.js';
import { Validator } from '../../utils/Validator.js';
import { $ } from '../../utils/index.js';

export default class ProductPurchase {
  #insertedAmount;
  #products;
  #coinQuantity;
  #chargedAmount;
  #returnCoin;

  constructor() {
    this.#insertedAmount = 0;
    this.#products = [];
    this.#coinQuantity = {
      [CONSTANTS.number500]: 0,
      [CONSTANTS.number100]: 0,
      [CONSTANTS.number50]: 0,
      [CONSTANTS.number10]: 0,
    };
    this.#chargedAmount = 0;
    this.#returnCoin = {
      [CONSTANTS.number500]: 0,
      [CONSTANTS.number100]: 0,
      [CONSTANTS.number50]: 0,
      [CONSTANTS.number10]: 0,
    };
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
  handlePurchase(e) {
    const index = e.target.closest('tr').dataset.productIndex;
    if (this.#products[index].quantity === 0 || this.#insertedAmount < this.#products[index].price)
      return;
    this.#products[index].quantity -= 1;
    this.#insertedAmount -= this.#products[index].price;
    this.setProductAtStore();
    this.setInsertedAmountOnStore();
  }
  getCoinQuantityFromStore() {
    if (Store.getItem(CONSTANTS.coinQuantityKey))
      this.#coinQuantity = Store.getItem(CONSTANTS.coinQuantityKey);
  }
  setCoinQuantityOnStore() {
    Store.setItem(CONSTANTS.coinQuantityKey, this.#coinQuantity);
  }

  getChargedAmountFromStore() {
    if (Store.getItem(CONSTANTS.chargedAmountKey))
      this.#chargedAmount = Store.getItem(CONSTANTS.chargedAmountKey);
  }
  setChargedAmountOnStore() {
    Store.setItem(CONSTANTS.chargedAmountKey, this.#chargedAmount);
  }

  handleReturnButton() {
    this.handleCoinReturn();
    this.handleAmount();
  }

  handleCoinReturn() {
    let leftOver = this.#insertedAmount;
    CONSTANTS.coinArray.forEach((coin) => {
      if (coin * this.#coinQuantity[coin] > leftOver) {
        this.#returnCoin[coin] = Math.floor(leftOver / coin);
      }
      if (coin * this.#coinQuantity[coin] <= leftOver)
        this.#returnCoin[coin] = this.#coinQuantity[coin];
      leftOver = leftOver - this.#returnCoin[coin] * coin;
      this.#coinQuantity[coin] -= this.#returnCoin[coin];
    });
    this.setCoinQuantityOnStore();
  }

  handleAmount() {
    this.#chargedAmount > this.#insertedAmount
      ? (this.#chargedAmount -= this.#insertedAmount)
      : (this.#chargedAmount = 0);
    this.#insertedAmount = 0;
    this.setInsertedAmountOnStore();
    this.setChargedAmountOnStore();
    this.setCoinQuantityOnStore();
  }

  getReturnCoin() {
    return Object.entries(this.#returnCoin)
      .sort((a, b) => b[0] - a[0])
      .map(([_, quantity]) => quantity);
  }
}
