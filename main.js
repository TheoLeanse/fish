"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}(function(){function a(a){var b=document.querySelectorAll("*:not("+a+")");[].concat(_toConsumableArray(b)).forEach(function(a){a.style.overflow="hidden"===a.style.overflow?"visible":"hidden"})}var b=document.querySelectorAll(".js-nav-toggle"),c=document.querySelector(".js-nav-overlay"),d=document.querySelector(".hamburger");[].concat(_toConsumableArray(b)).forEach(function(b){return b.addEventListener("click",function(){a(".js-nav-overlay"),d.classList.toggle("hidden"),c.classList.toggle("hidden")})});var e=document.querySelectorAll(".js-product-details-toggle"),f=document.querySelectorAll(".js-product-details-overlay");[].concat(_toConsumableArray(e)).forEach(function(b){return b.addEventListener("click",function(b){a(".js-product-details-overlay");var c=[].concat(_toConsumableArray(f)).find(function(a){return a.dataset.overlayName===b.target.dataset.overlayName});c.classList.toggle("hidden")})}),[document.querySelector(".home-open-button"),document.querySelector(".home-close-button")].forEach(function(a){return a.addEventListener("click",function(){document.querySelector(".home-extra-content").classList.toggle("hidden"),document.querySelector(".home-open-button").classList.toggle("hidden")})})})();
