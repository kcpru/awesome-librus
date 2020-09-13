const settings = () => {
  const body = document.querySelector('html')
  const API = chrome || browser
  const storage = API.storage.local

  const getStorage = () =>
    storage.get(['theme', 'borderRadius'], ({ theme, borderRadius }) => {
      body.classList = ''
      body.classList.add(theme, `border-radius-${borderRadius}`)
    })
  getStorage()

  storage.onChanged.addListener(() => getStorage())
}

export default settings
