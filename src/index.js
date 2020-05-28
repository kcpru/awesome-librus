import router from './js/router'
import addFonts from './js/fonts'
import ToggleTheme from './js/toggle-theme'

import './styles/main.scss'

const toggle = new ToggleTheme({
  theme: [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'Dark blue', value: 'dark-blue' },
    { name: 'Amoled', value: 'amoled' },
  ],
})

addFonts()
router()
