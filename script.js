function changeText() {
  document.querySelector("#errorMsg").innerText = "Redirecting..."
}

function shorten(query, redirect) {
  if (window.location.href === "https://url.grandswager.repl.co/?"+query) {
    changeText();
    window.location.replace(redirect);
  }
}

function onload() {
  shorten("grandswager", "https://youtube.com/c/grandswager");
}