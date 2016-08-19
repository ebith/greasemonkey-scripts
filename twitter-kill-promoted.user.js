// ==UserScript==
// @name      kill promoted tweet
// @version   1
// @author    ebith
// @include   https://twitter.com/*
// @grant     none
// @noframes
// ==/UserScript==
(()=>{
  for (var promoted of document.getElementsByClassName('promoted-tweet')) {
    promoted.parentElement.removeChild(promoted);
  }
})();
