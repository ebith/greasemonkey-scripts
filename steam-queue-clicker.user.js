// ==UserScript==
// @name steam queue clicker
// @version 1.1
// @author ebith
// @include http://store.steampowered.com/app/*
// @include http://store.steampowered.com/explore/
// @noframes
// @grant none
// ==/UserScript==

let nextButton = document.querySelector('.btn_next_in_queue');
if (nextButton) {
  nextButton.click();
} else {
  let refreshQueue = document.querySelector('#refresh_queue_btn');
  if (refreshQueue) {
    if (/\d/.test(document.querySelector('.subtext').textContent)) {
      refreshQueue.click();
    }
  }
}
