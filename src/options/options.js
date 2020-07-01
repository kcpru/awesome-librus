import $ from 'jquery'

import './options.scss'

const API = chrome || browser

const save_options = () => {
  const borderRadius = $('#border-radius').val(),
    theme = $('#theme').val(),
    status = $('#status')

  API.storage.local.set(
    {
      borderRadius,
      theme,
    },
    () => {
      status.text('Options saved.')
      setTimeout(() => {
        status.textContent = ''
      }, 1000)
    }
  )
}

const restore_options = () => {
  API.storage.local.get(
    ['theme', 'borderRadius'],

    (items) => {
      $('#border-radius').val(items.borderRadius)
      $('#theme').val(items.theme)
    }
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
