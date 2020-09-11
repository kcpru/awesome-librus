const redirect = () => {
  const alternateView =
    'https://synergia.librus.pl/gateway/ms/studentdatapanel/ui/powiadomienia'

  const API = chrome || browser
  const storage = API.storage.local

  storage.get('redirect', (items) => {
    console.log('ITEM', items)
    if (items.redirect)
      if (location.href === 'https://synergia.librus.pl/uczen/index')
        window.location.replace(alternateView)
  })
}

export default redirect
