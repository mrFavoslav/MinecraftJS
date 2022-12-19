setTimeout(() => {
  /*var body = document.body;
  body.style.transition = "background-color 1.2s";
  body.style.backgroundColor = 'rgb(85,85,85)';*/

  var white = document.getElementById("white");
  white.style.opacity = 0;
  white.style.transition = "opacity 2.4s";

  setTimeout(() => {
    var ic = document.getElementById("ic");
    ic.style.opacity = 100;
    ic.style.transition = "opacity 2.2s";
  }, 780);
}, 200);

function main_game() {
  window.versions.main_game()
}
function load_screen_1() {
  window.versions.load_screen_1()
}
function menu_opt() {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.5s";

  setTimeout(() => {
    window.versions.menu_opt()
  }, 500);
}