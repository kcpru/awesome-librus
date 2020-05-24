class AwesomeLibrus {
  constructor() {
    this.body = $("body");

    this.appendSelect();

    this.toggle = $("#toggle-mode");
    this.mode = localStorage.getItem("mode");

    this.toggleMode();
  }

  toggleMode() {
    if (!localStorage.getItem("mode"))
      this.toggleClass("light");
    if (localStorage.getItem("mode"))
      this.toggleClass(localStorage.getItem("mode"));

    this.toggle.change(() => {
      switch (this.mode) {
        case "light":
          this.toggleClass("dark");
          break;
        case "dark":
          this.toggleClass("light");
          break;
        default:
          console.log("Nic nie ma");
      }
    });
  }

  toggleClass(className) {
    this.body.removeClass(this.mode).addClass(className);
    this.mode = className;
    localStorage.setItem("mode", this.mode);
  }

  // changeStyle() {
  //   this.toggle.change(() => {
  //     this.toggleMode();
  //   });
  // }

  appendSelect() {
    $("#user-section").append(
      `<div id="toggle-mode">
        <label for="mode">Motyw</label>

        <select name="mode" id="mode">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>`
    );
  }
}

const al = new AwesomeLibrus();
