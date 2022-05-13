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
  shorten("perutzism", "https://www.youtube.com/channel/UCWYsc6p0iE2lXsp_bP2P1Ng");
  shorten("files", "https://filesharing.grandswager.repl.co");
  shorten("bedwars", "https://bedwars.com");
  shorten("islands", "https://web.roblox.com/games/4872321990/");
  shorten("easygg", "https://easy.gg");
}