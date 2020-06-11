import $ from 'jquery'

import './options.scss'

const save_options = () => {
  const borderRadius = $('#border-radius').val(),
    theme = $('#theme').val()

  chrome.storage.sync.set(
    {
      borderRadius,
      theme,
    },
    () => {
      const status = $('#status')
      status.text('Options saved.')
      setTimeout(function () {
        status.textContent = ''
      }, 750)
    }
  )
}

const restore_options = () => {
  chrome.storage.sync.get(
    ['theme', 'borderRadius'],

    (items) => {
      $('#border-radius').val(items.borderRadius)
      $('#theme').val(items.theme)
    }
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
