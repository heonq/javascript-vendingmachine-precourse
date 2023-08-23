import { Store } from '../../utils/Store.js';
import { CONSTANTS, IDS } from '../../utils/Constants.js';
import { Validator } from '../../utils/Validator.js';
import { $ } from '../../utils/index.js';

export default class ProductPurchase {
  #insertedAmount;

  constructor() {
    this.#insertedAmount = 0;
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
}
