// ==UserScript==
// @name atwiki swap title
// @version 1.0
// @author ebith
// @include /^https?://www\d+.atwiki.jp//
// @noframes
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
  document.title = document.title.replace(/(.*) - (.*)/, '$2 - $1');
});
