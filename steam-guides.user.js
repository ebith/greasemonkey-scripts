// Generated by CoffeeScript 1.7.1
/*
// ==UserScript==
// @name       Steamのガイドのリンクをマシにする
// @version    1.0
// @author     ebith
// @include    http://steamcommunity.com/app/*guides/*
// @grant none
// @noframes
// ==/UserScript==
 */

(function() {
  var a, container, item, _i, _len, _ref;

  _ref = document.getElementsByClassName('workshopItemCollectionContainer');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    container = _ref[_i];
    item = container.getElementsByClassName('workshopItemCollection')[0];
    item.removeAttribute('onclick');
    a = document.createElement('a');
    a.href = "http://steamcommunity.com/sharedfiles/filedetails/?id=" + (container.id.split('_')[1]);
    a.appendChild(item);
    container.appendChild(a);
  }

}).call(this);
