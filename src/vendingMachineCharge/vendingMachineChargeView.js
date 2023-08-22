import { vendingMachineChargeComponent } from './vendingMachineChargeComponent.js';
import { $ } from '../../utils/index.js';
import { IDS, CONSTANTS } from '../../utils/Constants.js';

export const vendingMachineChargeView = {
  printVendingMachineChargeComponent() {
    $(`#${IDS.container}`).innerHTML = vendingMachineChargeComponent;
  },
  handleSubmit(vendingMachineCharge) {
    $(`#${IDS.vendingMachineChargeButton}`).addEventListener('click', () => {
      vendingMachineCharge.handleVendingMachineCharge();
      this.printCoinQuantity(vendingMachineCharge);
      this.printchargedAmount(vendingMachineCharge);
    });
  },
  printCoinQuantity(vendingMachineCharge) {
    vendingMachineCharge.getCoinQuantityFromStore();
    const coinIds = [
      IDS.coin500Quantity,
      IDS.coin100Quantity,
      IDS.coin50Quantity,
      IDS.coin10Quantity,
    ];
    const coinQuantity = vendingMachineCharge.getCoinQuantity();
    coinIds.forEach((id, index) => ($(`#${id}`).innerText = coinQuantity[index]));
  },
  printChargedAmount(vendingMachineCharge) {
    vendingMachineCharge.getAmountFromStore();
    $(`#${IDS.vendingMachineChargeAmount}`).innerText =
      CONSTANTS.chargedAmount + vendingMachineCharge.getChargedAmount();
  },
};
