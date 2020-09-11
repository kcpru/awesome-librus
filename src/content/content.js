import router from './js/router'
import addFonts from './js/fonts'
import AwesomeLibrus from './js/awesome-librus'
import './js/redirect'

import './styles/content.scss'
import redirect from './js/redirect'

new AwesomeLibrus()

addFonts()
router()
redirect()
