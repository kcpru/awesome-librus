import $ from 'jquery'

import './options.scss'

const API = chrome || browser
const storage = API.storage.local

const save_options = () => {
  const borderRadius = $('#border-radius').val(),
    theme = $('#theme').val(),
    status = $('#status')

  storage.set(
    {
      borderRadius,
      theme,
    },
    () => {
      status.text('Zapisano pomyślnie.')
      setTimeout(() => {
        status.textContent = ''
      }, 1000)
    }
  )
}

const restore_options = () => {
  storage.get(
    ['theme', 'borderRadius'],

    (items) => {
      $('#border-radius').val(items.borderRadius)
      $('#theme').val(items.theme)
    }
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
