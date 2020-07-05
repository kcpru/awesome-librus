const addFonts = () => {
  const element = document.createElement('link')
  element.href =
    'https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;700&display=swap'
  element.rel = 'stylesheet'

  document.querySelector('head').appendChild(element)
}

export default addFonts
