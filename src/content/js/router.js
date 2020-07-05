const router = () => {
  const routes = [
    { element: document.getElementById('icon-oceny'), path: /\/przegladaj_oceny.*/ },
    { element: document.getElementById('icon-nb'), path: /\/przegladaj_nb.*/ },
    { element: document.getElementById('icon-wiadomosci'), path: /\/wiadomosci/ },
    { element: document.getElementById('icon-ogloszenia'), path: /\/ogloszenia/ },
    { element: document.getElementById('icon-terminarz'), path: /\/terminarz/ },
    { element: document.getElementById('icon-zadania'), path: /\/moje_zadania/ },
  ]

  routes.forEach(({ element, path }) => {
    if (location.pathname.match(path)?.input)
      element.classList.add('active-link')
  })
}

export default router
