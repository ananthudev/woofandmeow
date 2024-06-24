let dogImages = []; // Array to store loaded dog images
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random"; // Dog API URL
const IMAGES_PER_LOAD = 20; // Number of images to load per click

// Function to load more dog images
function loadMoreDogImages() {
  // Fetch images from the Dog API
  fetch(`${DOG_API_URL}/${IMAGES_PER_LOAD}`)
    .then((response) => response.json())
    .then((data) => {
      dogImages = dogImages.concat(data.message); // Concatenate new images to existing array
      displayDogImages(); // Display the updated images
    })
    .catch((error) => console.error("Error loading dog images:", error));
}

// Function to display dog images
function displayDogImages() {
  const dogImagesContainer = document.getElementById("dog-images-container");
  dogImagesContainer.innerHTML = ""; // Clear existing images

  dogImages.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3"); // Bootstrap class for responsive images
    dogImagesContainer.appendChild(img);
  });
}

// Initial load of dog images
loadMoreDogImages();
