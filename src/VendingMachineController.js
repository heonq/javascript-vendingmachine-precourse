import { tabButtonsView } from './tabButtons/tabButtonsView.js';
import { productManageView } from './productManage/productManageView.js';
import ProductManage from './productManage/productManage.js';
import { vendingMachineChargeView } from './vendingMachineCharge/vendingMachineChargeView.js';
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
    this.handleButtons();
  }

  renderMainComponents() {
    tabButtonsView.printTabButtons();
  }

  renderProductManage() {
    this.#productManage.getFromStore();
    productManageView.printProductManageComponent(this.#productManage.getProducts());
    productManageView.handleSubmit(this.#productManage);
  }
  renderVendingMachineCharge() {
    vendingMachineChargeView.printVendingMachineChargeComponent();
  }

  handleButtons() {
    tabButtonsView.handleProductManageButton(this.renderProductManage.bind(this));
    tabButtonsView.handleVendingMachineChargeButton(this.renderVendingMachineCharge.bind(this));
  }
}
