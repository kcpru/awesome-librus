import './options.scss'
// Saves options to chrome.storage
function save_options() {
  var borderRadius = document.getElementById('border-radius').value
  var theme = document.getElementById('theme').checked
  chrome.storage.locale.set(
    {
      borderRadius: borderRadius,
      theme: theme,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById('status')
      status.textContent = 'Options saved.'
      setTimeout(function () {
        status.textContent = ''
      }, 750)
    }
  )
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.locale.get(
    {
      borderRadius: 'red',
      theme: theme,
    },
    function (items) {
      document.getElementById('border-radius').value = items.favoriteColor
      document.getElementById('theme').checked = items.likesColor
    }
  )
}
document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
