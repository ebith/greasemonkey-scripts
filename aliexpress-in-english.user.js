// ==UserScript==
// @name        AliExpress in English
// @match       https://*.aliexpress.com/*
// @grant       none
// @version     1.0
// @author      ebith
// @require     https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js
// ==/UserScript==
(() => {
  if (document.location.hostname.includes('ja.aliexpress.com')) {
    document.location.assign(document.location.href.replace('ja.aliexpress.com', 'www.aliexpress.com'));
  }

  const aep_usuc_f = Cookies.get('aep_usuc_f')
    .split('&')
    .map((v) => {
      return v.split('=');
    })
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
  aep_usuc_f.site = 'glo';
  aep_usuc_f.c_tp = 'USD';
  aep_usuc_f.region = 'JP';
  aep_usuc_f.b_locale = 'en_US';
  Cookies.set(
    'aep_usuc_f',
    Object.keys(aep_usuc_f)
      .map((key) => {
        return `${key}=${aep_usuc_f[key]}`;
      })
      .join('&'),
    { domain: '.aliexpress.com' }
  );
})();
