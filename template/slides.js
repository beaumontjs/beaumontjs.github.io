"use strict";

var nextSlide = function() {
  if (window.currentSlide + 1 <= document.querySelectorAll('.slide').length) {
    window.currentSlide += 1;
    window.location.hash = window.currentSlide.toString();
    document.title = document.getElementById(window.currentSlide).querySelector('h1').innerHTML;
    return true;
  }
  return false;
};

var prevSlide = function() {
  if (window.currentSlide - 1 >= 1) {
    window.currentSlide -= 1;
    window.location.hash = window.currentSlide.toString();
    document.title = document.getElementById(window.currentSlide).querySelector('h1').innerHTML;
    return true;
  }

  return false;
};

var nextIncrement = function() {
  var currentSlideEl = document.getElementById(window.currentSlide),
      increments = currentSlideEl.querySelectorAll('.increment:not(.shown)');

  if (increments.length > 0) {
    increments[0].classList.add('shown');
    return true;
  }

  return false;
}


var prevIncrement = function() {
  var currentSlideEl = document.getElementById(window.currentSlide),
      increments = currentSlideEl.querySelectorAll('.increment.shown');

  if (increments.length > 0) {
    increments[increments.length - 1].classList.remove('shown');
    return true;
  }

  return false;
}

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
    if (!nextIncrement()) nextSlide();
  } else if (e.which === 37 || e.which === 33) {
    e.preventDefault();
    if (!prevIncrement()) prevSlide();
  }
};