import $ from 'jquery';
import objectFitImages from 'object-fit-images';

import './fonts';
import initLayout from './layout';
import initPages from './pages';

objectFitImages();

$(() => {
  initLayout();
  initPages();
});
