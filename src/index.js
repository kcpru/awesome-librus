import router from './js/router'
import addFonts from './js/fonts'
import ToggleTheme from './js/toggle-theme'

import './styles/main.scss'

const toggle = new ToggleTheme({
  theme: [
    { name: 'Light', value: 'light' },
    { name: 'Light blue', value: 'light-blue' },
    { name: 'Light green', value: 'light-green' },
    { name: 'Light pink', value: 'light-pink' },
    { name: 'Dark', value: 'dark' },
    { name: 'Dark blue', value: 'dark-blue' },
    { name: 'Dark violet', value: 'dark-violet' },
    { name: 'Amoled', value: 'amoled' },
    { name: 'Mono', value: 'mono' },
  ],
})

addFonts()
router()
