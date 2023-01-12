// ==UserScript==
// @name        NG User - nicovideo.jp
// @match       https://www.nicovideo.jp/ranking/*
// @grant       GM.getValue
// @grant       GM.setValue
// @version     1.0
// @author      ebith
// ==/UserScript==
;(async () => {
  const ngUsers = await GM.getValue('ngUsers', [])

  document.querySelectorAll('.NC-VideoMediaObjectWrapper').forEach(async (video) => {
    const button = document.createElement('button')
    button.textContent = 'NG Userに追加する'
    button.className = 'VideoMenu-Item'
    button.dataset.userId = video.dataset.ownerId
    button.addEventListener('click', async (event) => {
      ngUsers.push(button.dataset.userId)
      await GM.setValue('ngUsers', ngUsers)

      const menu = event.target.closest('.NC-VideoMediaObject .NC-ThreePointMenu-menu')
      menu.hidden = true
      const video = event.target.closest('.NC-VideoMediaObjectWrapper')
      video.dataset.muted = ''
      video.hidden = true
    })
    const menu = video.querySelector('.NC-VideoMediaObject .NC-ThreePointMenu-menu')
    menu.querySelector('.VideoMenu-item_mute').remove()
    menu.appendChild(button)

    if (ngUsers.includes(video.dataset.ownerId)) {
      video.dataset.muted = ''
      video.hidden = true
    }
  })
})()
