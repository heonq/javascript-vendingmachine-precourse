import { productPurchaseComponent, tableComponent } from './productPurchaseComponent.js';
import { $ } from '../../utils/index.js';
import { CONSTANTS, CLASSES, IDS, DATASETS } from '../../utils/Constants.js';

export const ProductPurchaseView = {
  addAvailableProductTable(products) {
    const tableContents =
      tableComponent +
      products.map((product) => {
        return `<tr>
            <td class="${CLASSES.productName}"${DATASETS.productName}="${product.name}">${product.name}</td>
            </tr>
            <tr>
            <td class="${CLASSES.productPrice}"${DATASETS.price}="${product.price}">${product.price}</td>
            </tr>
            <tr>
            <td class="${CLASSES.productQuantity}"${DATASETS.quantity}="${product.quantity}">${product.quantity}</td>
            </tr>
            <tr>
            <button class="${CLASSES.purchaseButton}">${CONSTANTS.purchase}</button>
            </tr>
            `;
      });
    $(`#${IDS.availableProductTable}`).innerHTML = tableContents;
  },

  printProductPurchaseComponent(products) {
    $(`#${IDS.container}`).innerHTML = productPurchaseComponent;
    this.addAvailableProductTable(products);
  },
};
