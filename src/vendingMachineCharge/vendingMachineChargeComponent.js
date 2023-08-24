import { CONSTANTS, IDS } from '../../utils/Constants.js';

export const vendingMachineChargeComponent = `<div id=${IDS.vendingMachineContainer}><form>
<p>${CONSTANTS.chargeVendingMachine}</p>
<input id="${IDS.vendingMachineChargeInput}" type="number"/>
<button id="${IDS.vendingMachineChargeButton}">${CONSTANTS.charge}</button>
</form>
<p id=${IDS.vendingMachineChargeAmount}>${CONSTANTS.chargedAmount}</p>
<p>${CONSTANTS.chargedCoinStatus}</p>
<table>
    <th>${CONSTANTS.coin}</th>
    <th>${CONSTANTS.coinQuantityHeader}</th>
    <tr>
    <td>${CONSTANTS.coin500}</td>
    <td id="${IDS.vendingMachineCoin500Quantity}"></td>
    </tr>
    <tr>
    <td>${CONSTANTS.coin100}</td>
    <td id="${IDS.vendingMachineCoin100Quantity}"></td>
    </tr>
    <tr>
    <td>${CONSTANTS.coin50}</td>
    <td id="${IDS.vendingMachineCoin50Quantity}"></td>
    </tr>
    <tr>
    <td>${CONSTANTS.coin10}</td>
    <td id="${IDS.vendingMachineCoin10Quantity}"></td>
    </tr>
</table></div>
`;
