// ==UserScript==
// @name atwiki swap title
// @version 1.1
// @author ebith
// @include /^https?://www\d+.atwiki.jp//
// @noframes
// ==/UserScript==

document.title = document.title.replace(/(.*) - (.*)/, '$2 - $1');
