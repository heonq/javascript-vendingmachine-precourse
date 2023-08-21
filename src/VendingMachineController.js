import { tabButtonsView } from './tabButtons/tabButtonsView.js';
import { productManageView } from './productManage/productManageView.js';
import ProductManage from './productManage/productManage.js';
import { $ } from '../utils/index.js';
import { IDS } from '../utils/Constants.js';

export default class VendingMachineController {
  #productManage;

  constructor() {
    this.#productManage = new ProductManage();
  }

  init() {
    this.renderMainComponents();
    this.renderProductManage();
  }

  renderMainComponents() {
    tabButtonsView.printTabButtons();
  }

  renderProductManage() {
    this.#productManage.getFromStore();
    productManageView.printProductManageComponent(this.#productManage.getProducts());
    productManageView.handleSubmit(this.#productManage);
  }
}
