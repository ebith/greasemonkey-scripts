﻿// ==UserScript==
// @name      ragnarok unitrix with sold
// @version   1.2
// @author    ebith
// @include   http://unitrix.net/*
// @grant     GM_xmlhttpRequest
// @noframes
// ==/UserScript==

const worlds = ['Placeholder', 'Sigrun', 'Alvitr', 'Vali', 'Trudr', 'Radgrid', 'Olrun', 'Gimle', 'Hervor', 'Idavoll', 'Frigg', 'Mimir', 'Lif', 'Breidablik'];
const searchParams = new URLSearchParams(document.location.search);
const item = searchParams.get('i');
const itemCode = unsafeWindow.itemNameToCode(item);
const world = searchParams.get('w');
const worldNumber = worlds.indexOf(world);

const a = document.createElement('a');
a.href = `http://rotool.gungho.jp/torihiki/index.php?item=${itemCode}&world=${worldNumber}`;
a.textContent = '取引情報';

const h2 = document.querySelector('#resultPain1 h2');
h2.insertBefore(a, h2.querySelector('img').previousSibling);


GM_xmlhttpRequest({
  method: 'POST',
  url: 'http://rotool.gungho.jp/torihiki/log_list.php',
  data: `page=1&world=${worldNumber}&item=${itemCode}&make_flag=0`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
  onload: (response) => {
    const data = JSON.parse(response.responseText);
    data.shift();

    const container = document.querySelector('tbody tr td');
    const h3 = document.createElement('h3');
    h3.appendChild(a.cloneNode(true));
    container.appendChild(h3);
    const div = document.createElement('div');
    container.appendChild(div);
    for (v of data) {
      let span = `<span>${v.log_date}: ${v.price_per}`;
      if (v.item_count - 0 > 1) { span += ` * ${v.item_count}`; }
      if ((v.enchant_flag + v.card_flag + v.refining_level + v.attribute__stone) - 0 > 0 ) {
        span += ` <a href='http://rotool.gungho.jp/torihiki/log_detail.php?log=${v.row_id}'>詳細</a>`;
      }
      span += '</span></br>';
      div.insertAdjacentHTML('beforeend', span);
    }
  }
});