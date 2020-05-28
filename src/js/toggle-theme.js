import $ from 'jquery'
import Cookies from 'js-cookie'

class ToggleTheme {
  constructor({ theme }) {
    this.theme = theme
    this.body = $('body')

    this.themeName = Cookies.get('theme') ? Cookies.get('theme') : 'light'

    this.appendSelect()

    this.toggle = $('#toggle-theme')
    this.toggleTheme()
  }

  toggleTheme() {
    this.setTheme(this.themeName)

    this.toggle.change(() => {
      this.setTheme(this.toggle.find(':selected').val())
    })
  }

  setTheme(className) {
    this.body.removeClass().addClass(className)
    this.themeName = className
    Cookies.set('theme', this.themeName)
  }

  appendSelect() {
    const options = this.theme.map(
      ({ name, value }) =>
        `<option value="${value}" ${
          value === this.themeName && `selected`
        }>${name}</option>`
    )

    $('#user-section').append(
      `<div id="toggle-theme">
          <label for="theme">Motyw</label>
          <select name="theme" id="theme">
            ${options}
          </select>
        </div>`
    )
  }
}

export default ToggleTheme
