$(function () {
  var inWrap = $(".inner-wrapper"),
    $slide = $(".slide"),
    apiUrl = "https://api.thedogapi.com/v1/images/search",
    sliderInterval;

  function fetchDogImage($img) {
    $.getJSON(apiUrl, function (data) {
      $img.attr("src", data[0].url);
    });
  }

  function slideNext() {
    inWrap.animate({ left: "-200%" }, 200, function () {
      inWrap.css("left", "-100%");
      var $firstSlide = $(".slide").first();
      var $img = $firstSlide.find("img");
      fetchDogImage($img);
      $(".slide").last().after($firstSlide);
    });
  }

  function startSlider() {
    sliderInterval = setInterval(slideNext, 7000);
  }

  function stopSlider() {
    clearInterval(sliderInterval);
  }

  $slide.each(function () {
    var $img = $(this).find("img");
    fetchDogImage($img);
  });

  startSlider();

  $(".prev").on("click", function () {
    stopSlider();
    inWrap.animate({ left: "0%" }, 200, function () {
      inWrap.css("left", "-100%");
      var $lastSlide = $(".slide").last();
      var $img = $lastSlide.find("img");
      fetchDogImage($img);
      $(".slide").first().before($lastSlide);
      startSlider();
    });
  });

  $(".next").on("click", function () {
    stopSlider();
    slideNext();
    startSlider();
  });
});
