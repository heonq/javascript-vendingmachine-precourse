import { tabButtonsView } from './tabButtons/tabButtonsView.js';
import { productManageView } from './productManage/productManageView.js';
import ProductManage from './productManage/productManage.js';
import { vendingMachineChargeView } from './vendingMachineCharge/vendingMachineChargeView.js';
import { $ } from '../utils/index.js';
import { IDS } from '../utils/Constants.js';
import VendingMachineCharge from './vendingMachineCharge/VendingMachineCharge.js';

export default class VendingMachineController {
  #productManage;
  #vendingMachineCharge;

  constructor() {
    this.#productManage = new ProductManage();
    this.#vendingMachineCharge = new VendingMachineCharge();
  }

  init() {
    this.renderMainComponents();
    this.renderProductManage();
    this.handleButtons();
  }
  initForm() {
    document
      .querySelectorAll('form')
      .forEach((eachForm) => eachForm.addEventListener('submit', (e) => e.preventDefault()));
  }

  renderMainComponents() {
    tabButtonsView.printTabButtons();
  }

  renderProductManage() {
    this.#productManage.getFromStore();
    productManageView.printProductManageComponent(this.#productManage.getProducts());
    productManageView.handleSubmit(this.#productManage);
    this.initForm();
  }
  renderVendingMachineCharge() {
    vendingMachineChargeView.printVendingMachineChargeComponent();
    vendingMachineChargeView.handleSubmit(this.#vendingMachineCharge);
    this.initForm();
    vendingMachineChargeView.printCoinQuantity(this.#vendingMachineCharge);
    vendingMachineChargeView.printHoldingAmount(this.#vendingMachineCharge);
  }

  handleButtons() {
    tabButtonsView.handleProductManageButton(this.renderProductManage.bind(this));
    tabButtonsView.handleVendingMachineChargeButton(this.renderVendingMachineCharge.bind(this));
  }
}
