var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')
var openMenu = document.querySelector('main-menu')
var closeMenu = document.querySelector('main-menu')

function openMenu() {
    hamburgerMenu.classList.add('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', true)
}

function closeMenu() {
    document.activeElement.blur()
    hamburgerMenu.classList.remove('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', false)
  }

launchBtn.onclick = openMenu

closeBtn.onclick = closeMenu

document.onkeyup = function(e) {
    if (e.key === 'Escape')
        closeMenu()
    if (
        e.key === 'Tab' &&
        !modal.contains(document.activeElement)
    ) {
        closeBtn.focus()
    }
}

menu.onclick = function (e) {
    if (!hamburgerMenu.contains(e.target)) {
        closeMenu()
    }
}