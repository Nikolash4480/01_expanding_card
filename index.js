
let photoURLs = [
  {url: "./assets/01_tokyo.jpg", title: "Tokyo"},
  {url: "./assets/02_osaka.jpg", title: "Osaka"},
  {url: "./assets/03_kioto.jpg", title: "Kioto"},
  {url: "./assets/04_nagoya.jpg", title: "Nagoya"},
  {url: "./assets/05_nara.jpg", title: "Nara"}
];

let container = document.querySelector(".container");

photoURLs.forEach(function(photos, index) {

  let div = document.createElement("div");
  div.classList.add("photos");

  div.style.backgroundImage = "url('" + photos.url + "')";

  let titleElement = document.createElement("h3");
  titleElement.textContent = photos.title;

  div.appendChild(titleElement);

  container.appendChild(div);

  div.addEventListener("click", function() {

    document.querySelectorAll(".photos").forEach(function(item) {
        item.classList.remove("active");
    });

    div.classList.add("active");
  });

  container.appendChild(div);

  if (index === 0) {
      div.classList.add("active");
  }
});
