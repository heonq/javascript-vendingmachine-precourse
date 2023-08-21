import { CONSTANTS, IDS } from '../../utils/Constants.js';
import { Store } from '../../utils/Store.js';
import { $ } from '../../utils/index.js';

export default class VendingMachineCharge {
  #holdingAmount;
  #coinCount;

  constructor() {
    this.#holdingAmount = 0;
    this.#coinCount = {
      [CONSTANTS.coin500]: 0,
      [CONSTANTS.coin100]: 0,
      [CONSTANTS.coin50]: 0,
      [CONSTANTS.coin10]: 0,
    };
  }

  charge() {
    if (Store.getItem(CONSTANTS.holdingAmountKey))
      this.#holdingAmount = Store.getItem(CONSTANTS.holdingAmountKey);
    this.#holdingAmount += Number($(`#${IDS.vendingMachineChargeInput}`).value);
    Store.setItem(CONSTANTS.holdingAmountKey, this.#holdingAmount);
  }
}
