let catImages = [];
const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";
const IMAGES_PER_LOAD_CAT = 20; // Explicitly define for cats
let offset = 0;

function loadMoreCatImages() {
  const API_KEY =
    "live_KLX6TJBCCKhKZDPuTw5RWAfLcAAZsROvtuBUfV9LmMfhvaGY66vITfBQtqMLtgda";

  // Include API key as a header
  fetch(`${CAT_API_URL}?limit=${IMAGES_PER_LOAD_CAT}&offset=${offset}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Received data from API:", data); // Log the data
      console.log("Number of images received:", data.length);

      catImages = catImages.concat(data);
      displayCatImages();
      offset += IMAGES_PER_LOAD_CAT; // Increment with the correct value
    })
    .catch((error) => console.error("Error loading cat images:", error));
}

// Function to display cat images (no changes needed)
function displayCatImages() {
  const catImagesContainer = document.getElementById("cat-images-container");
  catImagesContainer.innerHTML = "";

  catImages.forEach((cat) => {
    const img = document.createElement("img");
    img.src = cat.url;
    img.classList.add("img-fluid", "mb-3");
    catImagesContainer.appendChild(img);
  });
}

// Initial load of cat images
loadMoreCatImages();

// Assuming you have a "load more" button with the ID "load-more-cats"
document.addEventListener("DOMContentLoaded", (event) => {
  // Code to get element and add event listener
  document
    .getElementById("load-more-cats")
    .addEventListener("click", loadMoreCatImages);
});
