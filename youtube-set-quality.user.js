// Generated by CoffeeScript 1.7.1
/*
// ==UserScript==
// @name youtube set quality
// @version 1.0
// @author ebith
// @include https://www.youtube.com/watch*
// @noframes
// ==/UserScript==
 */

(function() {
  var script, source;

  source = function() {
    var target;
    target = 'hd720';
    return window.onYouTubePlayerReady = function(player) {
      var qualityLevels;
      qualityLevels = player.getAvailableQualityLevels();
      if (qualityLevels.indexOf(target !== -1)) {
        return player.setPlaybackQuality(target);
      } else {
        return player.setPlaybackQuality(qualityLevels[0]);
      }
    };
  };

  script = document.createElement('script');

  script.appendChild(document.createTextNode("(" + source + ")()"));

  document.body.appendChild(script);

}).call(this);