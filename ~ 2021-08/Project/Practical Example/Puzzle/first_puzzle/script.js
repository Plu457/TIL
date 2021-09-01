const banner = document.getElementsByClassName("banner")[0];
const bannerText = document.getElementsByClassName("banner__text");

for (let i = 1; i < 400; i++) {
  banner.innerHTML += "<div class='banner__text'></div>";
  const duration = Math.random() * 5;
  bannerText[i].style.animationDuration = 2 + duration + "s";
  bannerText[i].style.animationDelay = duration + "s";
}
