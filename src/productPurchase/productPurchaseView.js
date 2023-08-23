import { productPurchaseComponent, tableComponent } from './productPurchaseComponent.js';
import { $ } from '../../utils/index.js';
import { CONSTANTS, CLASSES, IDS, DATASETS } from '../../utils/Constants.js';

export const ProductPurchaseView = {
  addAvailableProductTable(products) {
    const tableContents =
      tableComponent +
      products
        .map((product) => {
          return `<tr>
            <td class="${CLASSES.productName}"${DATASETS.productName}="${product.name}">${product.name}</td>
            <td class="${CLASSES.productPrice}"${DATASETS.price}="${product.price}">${product.price}</td>
            <td class="${CLASSES.productQuantity}"${DATASETS.quantity}="${product.quantity}">${product.quantity}</td>
            <td><button class="${CLASSES.purchaseButton}">${CONSTANTS.purchaseButtonText}</button></td>
            </tr>`;
        })
        .join('');
    $(`#${IDS.availableProductTable}`).innerHTML = tableContents;
  },

  printProductPurchaseComponent(products) {
    $(`#${IDS.container}`).innerHTML = productPurchaseComponent;
    this.addAvailableProductTable(products);
  },

  printInsertedAmount(productPurchase) {
    productPurchase.getInsertedAmountFromStore();
    $(`#${IDS.chargeAmount}`).innerText =
      CONSTANTS.amountInserted + productPurchase.getInsertedAmount();
  },

  handleInsertSubmit(productPurchase) {
    $(`#${IDS.chargeButton}`).addEventListener('click', () => {
      productPurchase.insertMoney();
      this.printInsertedAmount(productPurchase);
    });
  },
};
