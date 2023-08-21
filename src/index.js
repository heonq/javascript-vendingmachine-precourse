import VendingMachineController from './VendingMachineController.js';

export default class App {
  constructor() {
    this.vendingMachineController = new VendingMachineController();
  }

  init() {
    this.vendingMachineController.init();
  }
}

const app = new App();
app.init();
