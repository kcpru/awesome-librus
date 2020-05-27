// Test import of a JavaScript function, an SVG, and Sass
// import { ToggleMode } from "./js/toggle-mode";
import "./styles/index.scss";

import $ from "jquery";

class AwesomeLibrus {
  constructor({ theme }) {
    this.theme = theme;
    this.body = $("body");

    this.themeName = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";

    this.appendSelect();

    this.toggle = $("#toggle-theme");
    this.toggleTheme();
  }

  toggleTheme() {
    this.themeName = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";

    this.setClass(this.themeName);

    this.toggle.change(() => {
      this.setClass(this.toggle.find(":selected").val());
    });
  }

  setClass(className) {
    this.body.removeClass().addClass(className);
    this.themeName = className;
    localStorage.setItem("theme", this.themeName);
  }

  appendSelect() {
    const options = this.theme.map(
      ({ name, value }) =>
        `<option value="${value}" ${
          value === this.themeName && `selected`
        }>${name}</option>`
    );

    $("#user-section").append(
      `<div id="toggle-theme">
        <label for="theme">Motyw</label>
        <select name="theme" id="theme">
          ${options}
        </select>
      </div>`
    );
  }
}

const al = new AwesomeLibrus({
  theme: [
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
    { name: "Dark blue", value: "dark-blue" },
    { name: "Amoled", value: "amoled" },
  ],
});

// Routes
const routes = [
  { element: $("#icon-oceny"), path: /\/przegladaj_oceny.*/ },
  { element: $("#icon-nb"), path: /\/przegladaj_nb.*/ },
  { element: $("#icon-wiadomosci"), path: /\/wiadomosci/ },
  { element: $("#icon-ogloszenia"), path: /\/ogloszenia/ },
  { element: $("#icon-terminarz"), path: /\/terminarz/ },
  { element: $("#icon-zadania"), path: /\/moje_zadania/ },
];

routes.forEach(({ element, path }) => {
  if (location.pathname.match(path)?.input) element.addClass("active-link");
});
