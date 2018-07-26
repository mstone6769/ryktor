import '../sections/product';


import $ from 'jquery';

import './carousel.js';

import sections from '@shopify/theme-sections';

$(document).ready(() => {
  sections.load([
    'product',
  ]);
});
