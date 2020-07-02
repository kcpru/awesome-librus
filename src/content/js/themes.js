import $ from 'jquery'

class Theme {
  constructor({ theme }) {
    this.body = $('body')

    this.API = chrome || browser

    this.themeName
    this.init()
  }

  init() {
    this.API.storage.local.get(['theme'], (items) => {
      this.themeName = items.theme

      this.setTheme(this.themeName)
    })
  }

  setTheme(className) {
    this.body.removeClass().addClass(className)
    this.themeName = className
  }
}

export default Theme
