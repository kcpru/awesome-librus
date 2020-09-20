import * as $ from 'jquery'

import './options.scss'

const API = chrome || browser
const storage = API.storage.local

const save_options = () => {
  const borderRadius = $('#border-radius').val(),
    theme = $('#theme').val(),
    redirectPage = $('#redirect-page').val(),
    redirect = $('#redirect').prop('checked'),
    status = $('#status')

  const color = $('.color:checked').val()

  storage.set(
    {
      borderRadius,
      theme,
      redirect,
      redirectPage,
      color,
    },
    () => {
      status.text('Zapisano pomyślnie.')
      setTimeout(() => {
        status.text('')
      }, 2000)
    }
  )
}

const restore_options = () => {
  storage.get(
    ['theme', 'borderRadius', 'redirect', 'redirectPage', 'color'],

    ({ theme, borderRadius, redirect, redirectPage, color }) => {
      $('#theme').val(theme || 'light')
      $('#border-radius').val(borderRadius || 4)
      $('#redirect-page').val(redirectPage)
      $('#redirect').prop('checked', redirect)
      $(`input[value=${color || 'red'}]`).prop('checked', true)
    }
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)

const settings = () => {
  const body = document.querySelector('body')

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

settings()
