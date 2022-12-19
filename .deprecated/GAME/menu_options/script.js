document.addEventListener('DOMContentLoaded', pageLoaded);
function pageLoaded() {
  setTimeout(() => {
    var body = document.body;
    body.style.transition = "opacity 1s";
    body.style.opacity = 100;
  }, 300)
}

function load_screen_1() {
  document.body.style.transition = "background-color 0.5s, opacity 0.5s";
  document.body.style.backgroundColor = 'rgb(218,218,218)';
  document.body.style.opacity = 0;

  setTimeout(() => {
    window.versions.load_screen_1()
  }, 500);
}