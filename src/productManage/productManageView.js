import { productManageComponent } from './productManageComponent.js';
import { CLASSES, IDS } from '../../utils/Constants.js';
import { $ } from '../../utils/index.js';

export const productManageView = {
  addProductTable(products) {
    const tableContent = products
      .map((product) => {
        return `<tr class="${CLASSES.productList}">
          <td class="${CLASSES.productName}">${product.name}</td>
          <td class="${CLASSES.productPrice}">${product.price}</td>
          <td class="${CLASSES.productQuantity}">${product.quantity}</td>
          </tr>`;
      })
      .join('');
    $(`#${IDS.productManageTable}`).insertAdjacentHTML('beforeend', tableContent);
  },

  printProductManageComponent(products) {
    $(`#${IDS.container}`).innerHTML = productManageComponent;
    this.addProductTable(products);
  },
  handleSubmit(productManage) {
    $(`#${IDS.addProductButton}`).addEventListener(
      'click',
      productManage.storeProduct.bind(productManage),
    );
  },
};
