import { CONSTANTS, IDS } from '../../utils/Constants';

export const productManageComponent = `<div id="product-manage"><p>${CONSTANTS.addProduct}</p>
    <form id="${IDS.productManageForm}">
    <input id="${IDS.addProductButton}" type="text" placeholder="${CONSTANTS.productName}" />
    <input id="${IDS.productPriceInput}" type="number" placeholder="${CONSTANTS.quantity}" />
    <input id="${IDS.productQuantityInput}" type="number" placeholder="${CONSTANTS.quantity}"/>
    <button id="${IDS.addProductButton}">${CONSTANTS.add}</button>
    </form>
    <p>${CONSTANTS.productStatus}</p>
    <table id="${IDS.productManageTable}">
    <th>${CONSTANTS.productName}</th>
    <th>${CONSTANTS.price}</th>
    <th>${CONSTANTS.quantity}</th>
    </table>
    </div>`;
