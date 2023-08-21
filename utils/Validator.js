import { ERROR_MESSAGE, CONSTANTS } from './Constants';

export const Validator = {
  validateProductPrice(price) {
    if (price < CONSTANTS.minPrice) {
      alert(ERROR_MESSAGE.lessThanMin);
      return false;
    }
    if (price % CONSTANTS.priceUnit !== 0) {
      alert(ERROR_MESSAGE.notDividedByUnit);
      return false;
    }
    return true;
  },
};
