import { ERROR_MESSAGE, CONSTANTS } from './Constants.js';

export const Validator = {
  validateProductPrice(price) {
    if (price < CONSTANTS.minPrice) {
      alert(ERROR_MESSAGE.lessThanMinPrice);
      return false;
    }
    if (price % CONSTANTS.priceUnit !== 0) {
      alert(ERROR_MESSAGE.notDividedByUnit);
      return false;
    }
    return true;
  },
  validateChargeAmount(amount) {
    if (amount < 10) {
      alert(ERROR_MESSAGE.lessThanMinChargeAmount);
      return false;
    }
    return true;
  },
};
