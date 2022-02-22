import accordeon from "./modules/accordeon";
import burger from "./modules/burger";
import calc from "./modules/calc";
import dragDrop from "./modules/dragDrop";
import filterTab from "./modules/filterTab";
import forms from "./modules/forms";
import modals from "./modules/modals";
import pictureSize from "./modules/pictureSize";
import showMore from "./modules/showMore";
import sliders from "./modules/sliders";


window.addEventListener('DOMContentLoaded',() => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
  showMore('.button-styles', '.styles-2');
  // showMore('.button-styles', '#styles .row'); // вариант 2
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filterTab();
  pictureSize();
  accordeon('.accordion-heading');
  burger('.burger-menu','.burger');
  dragDrop();
});