const redirect = () => {
  const API = chrome || browser
  const storage = API.storage.local

  storage.get(['redirect', 'redirectPage'], (items) => {
    const { redirect, redirectPage } = items

    if (redirect && location.href === 'https://synergia.librus.pl/uczen/index')
      window.location.replace(
        `https://synergia.librus.pl/gateway/ms/studentdatapanel/ui/${redirectPage}`
      )
  })
}

export default redirect
