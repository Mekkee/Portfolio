function closeNav() {
  let navListItems = document.getElementsByClassName('navigation__item')

  for (let i = 0; i < navListItems.length; i++) {
    navListItems[i].addEventListener('click', () => {
      document.getElementById('navi-toggle').checked = false
    })
  }
}

const nav = closeNav()

function checkboxUnchecked() {
  window.addEventListener(
    'resize',
    () => {
      if (window.matchMedia('(max-width: 56.25em)').matches) {
        document.getElementById('navi-toggle').checked = false
      }
    },
    true
  )
}

const unchecked = checkboxUnchecked()
