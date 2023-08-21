import { tabButtonsComponent } from './tabButtonsComponent.js';
import { $ } from '../../utils/index.js';

export const tabButtonsView = {
  printTabButtons() {
    $(`#app`).innerHTML = tabButtonsComponent;
    console.log(tabButtonsComponent);
  },
};
