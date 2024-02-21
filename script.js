function changeText() {
  document.querySelector("#errorMsg").innerText = "Redirecting..."
}

function shorten(query, redirect) {
  if (window.location.href === "https://grandswager.github.io/url/?"+query) {
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
  shorten("easy.gg", "https://easy.gg");
  shorten("he", "https://hamburgeremporium.grandswager.repl.co/?ref-code=g-url");
  shorten("perseus-slides", "https://docs.google.com/presentation/d/1DNDTSE3GU_1P4YaHb4bK_wAirOkN1Y8Izo9n_gjMCnE/edit#slide=id.p");
}
