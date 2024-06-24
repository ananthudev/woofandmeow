const catImage = document.getElementById("cat-image");
const likedCatsSection = document.getElementById("liked-cats-section");
const likedCatsGrid = document.getElementById("liked-cats-grid");

let likedCats = JSON.parse(localStorage.getItem("likedCats")) || [];

function showNewCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => (catImage.src = data[0].url));
}

function likeCat() {
  likedCats.push(catImage.src);
  localStorage.setItem("likedCats", JSON.stringify(likedCats));
  showNewCat();
}

function showLikedCats() {
  likedCatsSection.classList.toggle("d-none");

  likedCatsGrid.innerHTML = "";
  likedCats.forEach((catUrl) => {
    const img = document.createElement("img");
    img.src = catUrl;
    img.classList.add("img-fluid");
    likedCatsGrid.appendChild(img);
  });
}

showNewCat();
