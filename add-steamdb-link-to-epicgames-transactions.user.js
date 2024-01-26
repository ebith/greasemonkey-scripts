// ==UserScript==
// @name        Add a link to SteamDB on the Epic Games Store transaction page
// @match       https://www.epicgames.com/account/transactions*
// @grant       none
// @version     1.0
// @author      ebith
// @downloadURL https://github.com/ebith/greasemonkey-scripts/raw/master/add-steamdb-link-to-epicgames-transactions.user.js
// ==/UserScript==

const addLink = () => {
  for (const tbody of document.querySelectorAll('table tbody')) {
    const td = tbody.querySelector('td:nth-child(2)')
    console.log(td.textContent)
    td.insertAdjacentHTML(
      'beforeend',
      ` <a target="_blank" href="https://steamdb.info/instantsearch/?query=${encodeURIComponent(
        td.textContent.trim()
      )}" >SteamDB</a>`
    )
  }
}

const observer1 = new MutationObserver(() => {
  if (document.querySelector('table')) {
    observer1.disconnect()
    addLink()
  }
  const observer2 = new MutationObserver((mutationList) => {
    if ([...mutationList].pop().addedNodes[0].tagName === 'TBODY') {
      addLink()
    }
  })
  observer2.observe(document.querySelector('table'), { childList: true })
})
observer1.observe(document, { childList: true, subtree: true })
