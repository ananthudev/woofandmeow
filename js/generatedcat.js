$(document).ready(function () {
  var catBreedsData = [];

  // Fetch cat breeds and populate the select box
  $.get("https://api.thecatapi.com/v1/breeds", function (data) {
    catBreedsData = data;
    data.forEach(function (breed) {
      $("#catBreeds").append(new Option(breed.name, breed.id));
    });
  });

  // Initialize autocomplete
  $("#homepage-search-input-cat").autocomplete({
    source: function (request, response) {
      var results = $.ui.autocomplete.filter(
        catBreedsData.map((breed) => breed.name),
        request.term
      );
      response(results);
    },
    select: function (event, ui) {
      var selectedBreed = catBreedsData.find(
        (breed) => breed.name.toLowerCase() === ui.item.value.toLowerCase()
      );
      if (selectedBreed) {
        displayCatBreedDetails(selectedBreed);
      }
    },
  });

  // Function to display cat breed details
  function displayCatBreedDetails(breed) {
    var imageUrl =
      "https://cdn2.thecatapi.com/images/" + breed.reference_image_id + ".jpg";
    var detailsHtml = `
      <div class="card">
        <img src="${imageUrl}" class="card-img-top" alt="${breed.name}">
        <div class="card-body">
          <h5 class="card-title">${breed.name}</h5>
          <p class="card-text">${breed.description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Temperament:</strong> ${breed.temperament}</li>
            <li class="list-group-item"><strong>Origin:</strong> ${breed.origin}</li>
            <li class="list-group-item"><strong>Life Span:</strong> ${breed.life_span} years</li>
            <li class="list-group-item"><strong>Weight:</strong> ${breed.weight.metric} kg</li>
          </ul>
          <a href="${breed.wikipedia_url}" class="card-link" target="_blank">Learn more on Wikipedia</a>
        </div>
      </div>`;
    $("#catBreedDetails").html(detailsHtml);
  }

  // Search button click event
  $("#homepage-search-button-cat").click(function () {
    var selectedBreedId = $("#catBreeds").val();
    var query = $("#homepage-search-input-cat").val().toLowerCase();

    var breed;
    if (selectedBreedId !== "Select a Breed") {
      breed = catBreedsData.find((b) => b.id == selectedBreedId);
    } else if (query) {
      breed = catBreedsData.find((b) => b.name.toLowerCase().includes(query));
    }

    if (breed) {
      displayCatBreedDetails(breed);
    } else {
      $("#catBreedDetails").html(
        '<p class="text-danger">No breed found. Please try another search.</p>'
      );
    }
  });
});
