"use strict";

var nextSlide = function() {
  if (window.currentSlide + 1 <= document.querySelectorAll('.slide').length) {
    window.currentSlide += 1;
    window.location.hash = window.currentSlide.toString();
    return true;
  }
  return false;
};

var prevSlide = function() {
  if (window.currentSlide - 1 >= 1) {
    window.currentSlide -= 1;
    window.location.hash = window.currentSlide.toString();
    return true;
  }
  return false;
};

window.onload = function() {
  window.currentSlide = parseInt(window.location.hash.substr(1)) - 1 || 0;
  nextSlide();
};

window.onkeydown = function(e) {
  if (e.which === 39 || e.which === 34) {
    e.preventDefault();
    nextSlide();
  } else if (e.which === 37 || e.which === 33) {
    e.preventDefault();
    prevSlide();
  }
};