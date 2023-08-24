import { CONSTANTS, IDS } from '../../utils/Constants.js';
import { Store } from '../../utils/Store.js';
import { $ } from '../../utils/index.js';
import { Validator } from '../../utils/Validator.js';

export default class VendingMachineCharge {
  #chargedAmount;
  #coinQuantity;

  constructor() {
    this.#chargedAmount = 0;
    this.#coinQuantity = {
      [CONSTANTS.number500]: 0,
      [CONSTANTS.number100]: 0,
      [CONSTANTS.number50]: 0,
      [CONSTANTS.number10]: 0,
    };
  }

  getAmountFromStore() {
    if (Store.getItem(CONSTANTS.chargedAmountKey))
      this.#chargedAmount = Store.getItem(CONSTANTS.chargedAmountKey);
  }

  setAMountOnStore() {
    Store.setItem(CONSTANTS.chargedAmountKey, this.#chargedAmount);
  }

  chargeAmount(amount) {
    this.getAmountFromStore();
    this.#chargedAmount += amount;
    this.setAMountOnStore();
  }

  getCoinQuantityFromStore() {
    if (Store.getItem(CONSTANTS.coinQuantityKey))
      this.#coinQuantity = Store.getItem(CONSTANTS.coinQuantityKey);
  }

  setCoinQuantityonStore() {
    Store.setItem(CONSTANTS.coinQuantityKey, this.#coinQuantity);
  }

  getRandomCoin(amount) {
    if (!Validator.validateChargeAmount(amount)) return;
    let leftOver = amount;
    while (leftOver > 0) {
      const randomNumber = MissionUtils.Random.pickNumberInList(CONSTANTS.coinArray);
      if (randomNumber > leftOver) continue;
      this.#coinQuantity[randomNumber] += 1;
      leftOver -= randomNumber;
    }
  }

  handleRandomCoin(amount) {
    this.getCoinQuantityFromStore();
    this.getRandomCoin(amount);
    this.setCoinQuantityonStore();
  }

  handleVendingMachineCharge() {
    const amount = Number($(`#${IDS.vendingMachineChargeInput}`).value);
    this.chargeAmount(amount);
    this.handleRandomCoin(amount);
  }

  getCoinQuantity() {
    return Object.entries(this.#coinQuantity)
      .sort((a, b) => b[0] - a[0])
      .map(([_, quantity]) => quantity);
  }
  getChargedAmount() {
    return this.#chargedAmount;
  }
}
