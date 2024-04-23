let spinner = document.getElementById('spinner')
spinner.addEventListener("click", spin);

function spin() {
  spinner.style.animationName = "example";
  setTimeout(function() {
    spinner.style.animationName = "";
  }, 4000);
};