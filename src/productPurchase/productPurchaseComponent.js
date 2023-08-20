import { CONSTANTS, IDS } from '../../utils/Constants';

export const productPurchaseComponent = `
<p>${CONSTANTS.insertCoin}</p>
<input id="${IDS.chargeInput}" value="number" />
<button id="${IDS.chargeButton}">${CONSTANTS.insert}</button>
<p id="${IDS.chargeAmount}">${CONSTANTS.amountInserted}</p>
<p>${CONSTANTS.availableProductStatus}</p>
<table id="${IDS.availableProductTable}">
<th>${CONSTANTS.productName}</th>
<th>${CONSTANTS.price}</th>
<th>${CONSTANTS.quantity}</th>
<th>${CONSTANTS.purchase}</th>
</table>
<p>${CONSTANTS.change}</p>
<button id="${IDS.returnButton}">${CONSTANTS.return}</button>
<table id="${IDS.coinReturnTable}">
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
<td id="${IDS.coin100Quantity}"></td>
</tr>
</table>
`;
