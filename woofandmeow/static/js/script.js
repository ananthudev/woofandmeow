const dogImage = document.getElementById("dog-image");
const likedDogsSection = document.getElementById("liked-dogs-section");
const likedDogsGrid = document.getElementById("liked-dogs-grid");

let likedDogs = JSON.parse(localStorage.getItem("likedDogs")) || []; // Load from local storage

function showNewDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (dogImage.src = data.message));
}

function likeDog() {
  likedDogs.push(dogImage.src);
  localStorage.setItem("likedDogs", JSON.stringify(likedDogs));
  showNewDog(); // Show a new dog after liking
}

function showLikedDogs() {
  likedDogsSection.classList.toggle("d-none"); // Toggle visibility

  likedDogsGrid.innerHTML = ""; // Clear previous images
  likedDogs.forEach((dogUrl) => {
    const img = document.createElement("img");
    img.src = dogUrl;
    img.classList.add("img-fluid"); // Make images responsive
    likedDogsGrid.appendChild(img);
  });
}

showNewDog(); // Show the initial dog on page load
