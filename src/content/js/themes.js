import $ from 'jquery'
import Cookies from 'js-cookie'

class Theme {
  constructor({ theme }) {
    this.body = $('body')

    this.themeName
    this.init()
  }

  init() {
    chrome.storage.sync.get(['theme'], (items) => {
      this.themeName = items.theme
      console.log(items.theme, this.themeName)

      this.setTheme(this.themeName)
    })
  }
  setTheme(className) {
    this.body.removeClass().addClass(className)
    this.themeName = className
    Cookies.set('theme', this.themeName)
  }
}

export default Theme
