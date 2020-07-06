class AwesomeLibrus {
  constructor() {
    this.body = document.querySelector('body')
    this.API = chrome || browser
    this.storage = this.API.storage.local

    this.init()
    this.onChangeStorage()
  }

  init() {
    this.storage.get(['theme', 'borderRadius'], (items) => {
      this.setOptions(items.theme, items.borderRadius)
    })
  }

  onChangeStorage() {
    this.storage.onChanged.addListener(() => this.init())
  }

  setOptions(className, borderRadius) {
    this.body.classList = ''
    this.body.classList.add(className, `border-radius-${borderRadius}`)
  }
}

export default AwesomeLibrus
