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
  Array.prototype.forEach.call(document.querySelectorAll('.slide'), function(slide, i) {
    slide.setAttribute('id', (i + 1).toString());
  });

  history.pushState({}, "", this.href);

  window.currentSlide = parseInt(window.location.hash.substr(1)) - 1 || 0;
  nextSlide();

  document.getElementById(window.currentSlide).setAttribute('style', 'display: block;')
};

window.onkeydown = function(e) {
  if ([33,34,37,39].indexOf(e.which) > -1) {
    Array.prototype.forEach.call(document.querySelectorAll('.slide'), function(slide) {
      slide.setAttribute('style', '');
    });
  }

  if (e.which === 39 || e.which === 34) {
    e.preventDefault();
    nextSlide();
  } else if (e.which === 37 || e.which === 33) {
    e.preventDefault();
    prevSlide();
  }
};