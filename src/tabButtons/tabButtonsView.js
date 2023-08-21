import { tabButtonsComponent } from './tabButtonsComponent.js';
import { $ } from '../../utils/index.js';
import { IDS } from '../../utils/Constants.js';

export const tabButtonsView = {
  printTabButtons() {
    $(`#app`).innerHTML = tabButtonsComponent;
  },
  handleProductManageButton(callback) {
    $(`#${IDS.manageProductTabButton}`).addEventListener('click', callback);
  },
  handleVendingMachineChargeButton(callback) {
    $(`#${IDS.chargingTabButton}`).addEventListener('click', callback);
  },
};
