$(function () {
  var catInWrap = $(".cat-inner-wrapper"),
    $catSlide = $(".cat-slide"),
    catApiUrl = "https://api.thecatapi.com/v1/images/search",
    catSliderInterval;

  function fetchCatImage($img) {
    $.getJSON(catApiUrl, function (data) {
      $img.attr("src", data[0].url);
    });
  }

  function catSlideNext() {
    catInWrap.animate({ left: "-200%" }, 200, function () {
      catInWrap.css("left", "-100%");
      var $firstCatSlide = $(".cat-slide").first();
      var $img = $firstCatSlide.find("img");
      fetchCatImage($img);
      $(".cat-slide").last().after($firstCatSlide);
    });
  }

  function startCatSlider() {
    catSliderInterval = setInterval(catSlideNext, 7000);
  }

  function stopCatSlider() {
    clearInterval(catSliderInterval);
  }

  $catSlide.each(function () {
    var $img = $(this).find("img");
    fetchCatImage($img);
  });

  startCatSlider();

  $(".cat-prev").on("click", function () {
    stopCatSlider();
    catInWrap.animate({ left: "0%" }, 200, function () {
      catInWrap.css("left", "-100%");
      var $lastCatSlide = $(".cat-slide").last();
      var $img = $lastCatSlide.find("img");
      fetchCatImage($img);
      $(".cat-slide").first().before($lastCatSlide);
      startCatSlider();
    });
  });

  $(".cat-next").on("click", function () {
    stopCatSlider();
    catSlideNext();
    startCatSlider();
  });
});
