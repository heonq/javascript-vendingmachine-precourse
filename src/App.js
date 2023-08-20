import Controller from './controller';

export default class App {
  init() {
    new Controller().init();
  }
}

const app = new App();
app.init();
