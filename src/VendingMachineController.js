import { tabButtonsView } from './tabButtons/tabButtonsView.js';
import { productManageView } from './productManage/productManageView.js';
import ProductManage from './productManage/productManage.js';
import { vendingMachineChargeView } from './vendingMachineCharge/vendingMachineChargeView.js';
import { $ } from '../utils/index.js';
import { IDS } from '../utils/Constants.js';
import VendingMachineCharge from './vendingMachineCharge/VendingMachineCharge.js';
import { ProductPurchaseView } from './productPurchase/productPurchaseView.js';
import ProductPurchase from './productPurchase/productPurchase.js';

export default class VendingMachineController {
  #productManage;
  #vendingMachineCharge;
  #productPurchase;

  constructor() {
    this.#productManage = new ProductManage();
    this.#vendingMachineCharge = new VendingMachineCharge();
    this.#productPurchase = new ProductPurchase();
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
    vendingMachineChargeView.printChargedAmount(this.#vendingMachineCharge);
  }

  renderProductPurchase() {
    this.#productPurchase.getProductFromStore();
    ProductPurchaseView.printProductPurchaseComponent(this.#productPurchase.getProducts());
    ProductPurchaseView.handleInsertSubmit(this.#productPurchase);
  }

  handleButtons() {
    tabButtonsView.handleProductManageButton(this.renderProductManage.bind(this));
    tabButtonsView.handleVendingMachineChargeButton(this.renderVendingMachineCharge.bind(this));
    tabButtonsView.handleProductPurchaseButton(this.renderProductPurchase.bind(this));
  }
}
