import { vendingMachineChargeComponent } from './vendingMachineChargeComponent.js';
import { $ } from '../../utils/index.js';
import { IDS } from '../../utils/Constants.js';

export const vendingMachineChargeView = {
  printVendingMachineChargeComponent() {
    $(`#${IDS.container}`).innerHTML = vendingMachineChargeComponent;
  },
  handleSubmit(vendingMachineCharge) {
    $(`#${IDS.vendingMachineChargeButton}`).addEventListener(
      'click',
      vendingMachineCharge.handleVendingMachineCharge.bind(vendingMachineCharge),
    );
  },
};
