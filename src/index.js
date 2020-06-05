import router from './js/router'
import addFonts from './js/fonts'
import Themes from './js/themes'

import './styles/main.scss'

new Themes({
  theme: [
    { name: 'Light', value: 'light' },
    { name: 'Light blue', value: 'light-blue' },
    { name: 'Light green', value: 'light-green' },
    { name: 'Light pink', value: 'light-pink' },
    { name: 'Light violet', value: 'light-violet' },
    { name: 'Dark', value: 'dark' },
    { name: 'Dark red', value: 'dark-red' },
    { name: 'Dark blue', value: 'dark-blue' },
    { name: 'Dark green', value: 'dark-green' },
    { name: 'Dark violet', value: 'dark-violet' },
    { name: 'Amoled', value: 'amoled' },
    { name: 'Mono', value: 'mono' },
  ],
})

addFonts()
router()
