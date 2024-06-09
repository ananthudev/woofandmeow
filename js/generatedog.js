$(document).ready(function () {
  // Fetch dog breeds and populate the select box
  $.ajax({
    url: "https://api.thedogapi.com/v1/breeds",
    method: "GET",
    success: function (data) {
      let dogBreeds = $("#dogBreeds");
      data.forEach((breed) => {
        dogBreeds.append(`<option value="${breed.id}">${breed.name}</option>`);
      });
    },
  });

  // Initialize dog autocomplete
  $("#homepage-search-input").autocomplete({
    source: function (request, response) {
      $.ajax({
        url: "https://api.thedogapi.com/v1/breeds",
        method: "GET",
        success: function (data) {
          var results = $.ui.autocomplete.filter(
            data.map((breed) => breed.name),
            request.term
          );
          response(results);
        },
      });
    },
    minLength: 1, // Minimum characters to trigger autocomplete
    select: function (event, ui) {
      var selectedBreedName = ui.item.value;
      displayDogBreedDetails(selectedBreedName);
    },
  });

  // Function to display dog breed details
  function displayDogBreedDetails(breedName) {
    var query = breedName.toLowerCase();
    $.ajax({
      url: "https://api.thedogapi.com/v1/breeds",
      method: "GET",
      success: function (data) {
        var breed = data.find((b) => b.name.toLowerCase() === query);
        if (breed) {
          $("#dogBreedDetails").html(`
            <div class="card">
              <img src="https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg" class="card-img-top" alt="${breed.name}" style="width: 100%; height: auto;">
              <div class="card-body">
                <h5 class="card-title">${breed.name}</h5>
                <p class="card-text"><strong>Weight:</strong> ${breed.weight.imperial} lbs (${breed.weight.metric} kg)</p>
                <p class="card-text"><strong>Height:</strong> ${breed.height.imperial} in (${breed.height.metric} cm)</p>
                <p class="card-text"><strong>Bred For:</strong> ${breed.bred_for}</p>
                <p class="card-text"><strong>Breed Group:</strong> ${breed.breed_group}</p>
                <p class="card-text"><strong>Life Span:</strong> ${breed.life_span}</p>
                <p class="card-text"><strong>Temperament:</strong> ${breed.temperament}</p>
                <p class="card-text"><strong>Origin:</strong> ${breed.origin}</p>
              </div>
            </div>
          `);
        } else {
          $("#dogBreedDetails").html(
            '<p class="text-danger">No breed found. Please try another search.</p>'
          );
        }
      },
      error: function () {
        $("#dogBreedDetails").html(
          '<p class="text-danger">Error fetching breed details. Please try again.</p>'
        );
      },
    });
  }

  // Search button click event for select box
  $("#homepage-search-button").click(function () {
    var selectedBreedId = $("#dogBreeds").val();
    if (selectedBreedId !== "Select a Breed") {
      var selectedBreedName = $("#dogBreeds option:selected").text();
      displayDogBreedDetails(selectedBreedName);
    } else {
      $("#dogBreedDetails").html(
        '<p class="text-danger">Please select a breed.</p>'
      );
    }
  });
});
