import $ from 'jquery'

const router = () => {
  const routes = [
    { element: $('#icon-oceny'), path: /\/przegladaj_oceny.*/ },
    { element: $('#icon-nb'), path: /\/przegladaj_nb.*/ },
    { element: $('#icon-wiadomosci'), path: /\/wiadomosci/ },
    { element: $('#icon-ogloszenia'), path: /\/ogloszenia/ },
    { element: $('#icon-terminarz'), path: /\/terminarz/ },
    { element: $('#icon-zadania'), path: /\/moje_zadania/ },
  ]

  routes.forEach(({ element, path }) => {
    if (location.pathname.match(path)?.input) element.addClass('active-link')
  })
}

export default router
