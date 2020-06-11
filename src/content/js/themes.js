import $ from 'jquery'
import Cookies from 'js-cookie'

class Theme {
  constructor({ theme }) {
    this.theme = theme
    this.body = $('body')

    this.themeName
    this.init()

    this.appendSelect()

    this.toggle = $('#toggle-theme')
    // this.toggleTheme()
  }

  init() {
    chrome.storage.sync.get(['theme'], (items) => {
      this.themeName = items.theme
      console.log(items.theme, this.themeName)

      this.setTheme(this.themeName)
    })
  }

  // toggleTheme() {
  //   this.setTheme(this.themeName)

  //   this.toggle.change(() => {
  //     this.setTheme(this.toggle.find(':selected').val())
  //   })
  // }

  setTheme(className) {
    this.body.removeClass().addClass(className)
    this.themeName = className
    Cookies.set('theme', this.themeName)
  }

  appendSelect() {
    const options = this.theme.map(
      ({ name, value }) => `<option value="${value}">${name}</option>`
    )

    chrome.storage.sync.get(['theme'], (items) => {
      $('#user-section').append(
        `<div id="toggle-theme">
              <label for="theme">Motyw</label>
              <select name="theme" id="theme">
                ${options}
              </select>
          </div>`
      )
      $('#theme').val(items.theme)
    })
  }
}

export default Theme
