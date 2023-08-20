import { tabButtonsComponent } from './tabButtonsComponent';
import { $ } from '../../utils';

export const tabButtonsView = {
  printTabButtons() {
    $(`#app`).innerHTML = tabButtonsComponent;
  },
};
