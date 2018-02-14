// ==UserScript==
// @name      twitter kill search noises
// @version   0.1.0
// @author    ebith
// @include   https://twitter.com/search*
// @noframes
// @grant     none
// @run-at    document-end
// ==/UserScript==
// const iframe = document.body.appendChild(document.createElement('iframe'));
// window.console = iframe.contentWindow.console;

const searchParams = new URLSearchParams(location.search);
const searchTexts = searchParams
  .get('q')
  .trim()
  .split(' ')
  .filter(text => {
    return !/lang:..|OR/i.test(text);
  });
const re = new RegExp(searchTexts.join('|'), 'i');

const killNoises = nodes => {
  for (const node of nodes) {
    const tweet = node.querySelector('.tweet');
    const usernames = `${tweet.dataset.screenName} ${tweet.dataset.name} ${tweet.dataset.mentions ? tweet.dataset.mentions : ''}`;
    if (re.test(usernames)) {
      node.style = 'display: none;';
    }
  }
};

const timeline = document.querySelector('#stream-items-id');
killNoises(timeline.children);

const observer = new MutationObserver(mutations => {
  killNoises(mutations[0].addedNodes);
});
observer.observe(timeline, { childList: true });
