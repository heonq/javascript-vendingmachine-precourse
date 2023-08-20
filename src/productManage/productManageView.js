import { productManageComponent, addProductTable } from './productManageComponent';

export const printProductManageComponent = (products) => {
  $(`#${IDS.container}`).innerHTML = productManageComponent;
  addProductTable(products);
};
