import $ from 'jquery';

import './fonts';
import initLayout from './layout';
import initPages from './pages';

$(() => {
  initLayout();
  initPages();
});
