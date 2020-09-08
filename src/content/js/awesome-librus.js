class AwesomeLibrus {
  constructor() {
    this.body = document.querySelector('html')
    this.API = chrome
    // this.API = chrome || browser
    this.storage = this.API.storage.local

    this.init()
    this.onChangeStorage()
  }

  init() {
    this.storage.get(['theme', 'borderRadius'], (items) =>
      this.setOptions(items)
    )
  }

  setOptions({ theme, borderRadius }) {
    this.body.classList = ''
    this.body.classList.add(theme, `border-radius-${borderRadius}`)
  }

  onChangeStorage() {
    this.storage.onChanged.addListener(() => this.init())
  }
}

export default AwesomeLibrus
