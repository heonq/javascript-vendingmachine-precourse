import { CONSTANTS, IDS } from '../../utils/Constants';

export const vendingMachineChargeComponent = `<form>
<p>${CONSTANTS.chargeVendingMachine}</p>
<input id="${IDS.vendingMachineChargeInput}" type="number"/>
<button id="${IDS.vendingMachineChargeButton}">${CONSTANTS.charge}</button>
</form>
<p id=${IDS.vendingMachineChargeAmount}>${CONSTANTS.holdingAmount}</p>
<p>${CONSTANTS.holdingCoinStatus}</p>
<table>
    <th>${CONSTANTS.coin}</th>
    <th>${CONSTANTS.coinQuantityHeader}</th>
    <tr>
    <td>${CONSTANTS.coin500}</td>
    <td id="${IDS.coin500Quantity}"></td>
    </tr>
    <tr>
    <td>${CONSTANTS.coin100}</td>
    <td id="${IDS.coin100Quantity}"></td>
    </tr>
    <tr>
    <td>${CONSTANTS.coin50}</td>
    <td id="${IDS.coin50Quantity}"></td>
    </tr>
    <tr>
    <td>${CONSTANTS.coin10}</td>
    <td id="${IDS.coin10Quantity}"></td>
    </tr>
</table>
`;
