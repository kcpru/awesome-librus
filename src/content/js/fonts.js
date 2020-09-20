const addFonts = () => {
  const element = document.createElement('link')
  element.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
  element.rel = 'stylesheet'

  document.querySelector('head').appendChild(element)
}

export default addFonts
