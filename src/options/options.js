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
      $('#theme').val(theme)
      $('#border-radius').val(borderRadius)
      $('#redirect-page').val(redirectPage)
      $('#redirect').prop('checked', redirect)
      $(`input[value=${color}]`).prop('checked', redirect)
    }
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
