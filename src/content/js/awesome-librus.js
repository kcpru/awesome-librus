import $ from 'jquery'

class AwesomeLibrus {
  constructor() {
    this.body = $('body')

    this.API = chrome || browser

    this.init()
  }

  init() {
    this.API.storage.local.get(['theme', 'borderRadius'], (items) => {
      this.setOptions(items.theme, items.borderRadius)
      console.log(items)
    })
  }

  setOptions(className, borderRadius) {
    this.body
      .removeClass()
      .addClass([className, `border-radius-${borderRadius}`])
  }
}

export default AwesomeLibrus
