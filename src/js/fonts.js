import $ from "jquery";

const addFonts = () => {
  const font = `<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">`;

  $("head").append(font);
};

export default addFonts;
