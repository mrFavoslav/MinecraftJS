document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded() {

  setTimeout(() => {
    var body = document.body;
    body.style.transition = "opacity 1s";
    body.style.opacity = 100;
  }, 500)

  setTimeout(() => {
    // Get the progress bar element and the current width
    var progressBar = document.getElementById("myBar");
    var width = 0;
    function add() {
      // Generate a random number between 1 and 14
      var randomNumber = Math.floor(Math.random() * 15);
      // Add the random number to the current width
      width += randomNumber;
      // Update the progress bar with the new width
      progressBar.style.width = width + "%";

      if (width <= 70) {
        setTimeout(() => {
          add();
        }, Math.random() * 350)
      } else if (width < 100) {
        setTimeout(() => {
          add();
        }, Math.random() * 450 + 300)
      } if (width >= 95) {
        width += 5;
        progressBar.style.width = width + "%";

        //setTimeout(() => {
          var myProgress = document.getElementById("myProgress");;
          myProgress.style.transition = "opacity 1.2s";
          myProgress.style.opacity = 0;

          setTimeout(() => {
            var body = document.body;
            body.style.transition = "opacity 0.6s";
            body.style.opacity = 0;
            setTimeout(() => {
              window.versions.intro_menu()
            }, 300)
          }, 1400);
        //}, 200);
      }
    }
    add();
  }, 1750)
}