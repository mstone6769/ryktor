import '../sections/product';


import $ from 'jquery';

import 'bootstrap';
import './carousel.js';
import './header.js';

import sections from '@shopify/theme-sections';

$(document).ready(() => {
  sections.load([
    'product',
  ]);
});
