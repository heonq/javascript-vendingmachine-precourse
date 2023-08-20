import { productManageComponent } from './productManageComponent';
import { CLASSES } from '../../utils/Constants';

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
    addProductTable(products);
  },
};
