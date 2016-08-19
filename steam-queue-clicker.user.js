// ==UserScript==
// @name steam queue clicker
// @version 1.0
// @author ebith
// @include http://store.steampowered.com/app/*
// @include http://store.steampowered.com/explore/
// @noframes
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
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
});
