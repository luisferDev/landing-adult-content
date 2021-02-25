//-------------------------------------------------
// Comportamiento del Scrolling
//-------------------------------------------------
$('.menu a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      }, 800);
  }
});

//-------------------------------------------------
// SLIDER FLEXSLIDER | HERO
//-------------------------------------------------

// Can also be used with $(document).ready()
$(document).ready(function () {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshow: true,
    slideshowSpeed: 4000,
    animationSpeed: 300,
    pauseOnAction: false,
    rtl: true
  });
});

//-------------------------------------------------
// ANIMATION BG SLIDES
//-------------------------------------------------
$(".slide-image").each(function () {
  var bg = $(this).data("bg");
  var pos = $(this).data("kenburn-start");

  $(this).css({
    "background-image": "url(" + bg + ")",
    "transform-origin": pos
  });
});

$(".kenburn-slider").flexslider({
  animation: "fade",
  pauseOnAction: false
});

// -----------------------------------------------
// LIKE BTN
// -----------------------------------------------
$(document).ready(function () {

  $('.like-button').click(function () {
    $(this).toggleClass('is-active');
  })

})

// -----------------------------------------------
// Video ONHOVER
// -----------------------------------------------
var figure = $("figure");
var vid = $("#video");
var cover = $(".thumb");
$(figure).hover(function () {
  $(cover).addClass("img-hide");
}, function () {
  $(cover).removeClass("img-hide");
}
);

[].forEach.call(vid, function (item) {
  item.addEventListener('mouseover', hoverVideo, false);
  item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e) {
  this.play();
}

function hideVideo(e) {
  this.pause();
}


