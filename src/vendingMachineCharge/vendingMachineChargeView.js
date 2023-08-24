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
      this.printChargedAmount(vendingMachineCharge);
    });
  },
  printCoinQuantity(vendingMachineCharge) {
    vendingMachineCharge.getCoinQuantityFromStore();
    const coinIds = [
      IDS.vendingMachineCoin500Quantity,
      IDS.vendingMachineCoin100Quantity,
      IDS.vendingMachineCoin50Quantity,
      IDS.vendingMachineCoin10Quantity,
    ];
    const coinQuantity = vendingMachineCharge.getCoinQuantity();
    coinIds.forEach(
      (id, index) => ($(`#${id}`).innerText = coinQuantity[index] + CONSTANTS.coinQuantityRow),
    );
  },
  printChargedAmount(vendingMachineCharge) {
    vendingMachineCharge.getAmountFromStore();
    $(`#${IDS.vendingMachineChargeAmount}`).innerText =
      CONSTANTS.chargedAmount + vendingMachineCharge.getChargedAmount() + CONSTANTS.unit;
  },
};
