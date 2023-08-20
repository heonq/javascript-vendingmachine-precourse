import { vendingMachineChargeComponent } from './vendingMachineChargeComponent';
import { $ } from '../../utils';
import { IDS } from '../../utils/Constants';

export const vendingMachineChargeView = {
  printVendingMachineChargeComponent() {
    $(`#${IDS.container}`).innerHTML = vendingMachineChargeComponent;
  },
};
