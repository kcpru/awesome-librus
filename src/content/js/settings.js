const settings = () => {
  const body = document.querySelector('html')
  const API = chrome || browser
  const storage = API.storage.local

  const getStorage = () =>
    storage.get(
      ['theme', 'borderRadius', 'color'],
      ({ theme, borderRadius, color }) => {
        theme = theme || 'light'
        borderRadius = borderRadius || '4'
        color = color || 'red'

        body.classList = ''
        body.classList.add(`${theme}-${color}`, `border-radius-${borderRadius}`)
        console.log(`${theme}-${color}`)
      }
    )
  getStorage()

  storage.onChanged.addListener(() => getStorage())
}

export default settings
