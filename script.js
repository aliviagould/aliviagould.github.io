$(".icon-menu").on("click", function(){
    $(".nav-expanded").toggle();
});

$(".icon-arrow-down").click( function(){
    $("html, body").animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$('a[href*="#"]').click( function() {

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    }, 1000 );
});

$(".right-arrow").click( function(){
    if ($(".beer-1").hasClass("show")) {
        $(".beer-1").removeClass("show");
        $(".beer-1").addClass("hide");
        $(".beer-2").removeClass("hide");
        $(".beer-2").addClass("show");
    } else if  ($(".beer-2").hasClass("show")) {
        $(".beer-2").removeClass("show");
        $(".beer-2").addClass("hide");
        $(".beer-3").removeClass("hide");
        $(".beer-3").addClass("show");
    } else if  ($(".beer-3").hasClass("show")) {
        $(".beer-3").removeClass("show");
        $(".beer-3").addClass("hide");
        $(".beer-4").removeClass("hide");
        $(".beer-4").addClass("show");
    } else if  ($(".beer-4").hasClass("show")) {
        $(".beer-4").removeClass("show");
        $(".beer-4").addClass("hide");
        $(".beer-1").removeClass("hide");
        $(".beer-1").addClass("show");
    }
    check_if_in_view();
});

$(".left-arrow").click( function(){
    if ($(".beer-1").hasClass("show")) {
        $(".beer-1").removeClass("show");
        $(".beer-1").addClass("hide");
        $(".beer-4").removeClass("hide");
        $(".beer-4").addClass("show");
    } else if  ($(".beer-4").hasClass("show")) {
        $(".beer-4").removeClass("show");
        $(".beer-4").addClass("hide");
        $(".beer-3").removeClass("hide");
        $(".beer-3").addClass("show");
    } else if  ($(".beer-3").hasClass("show")) {
        $(".beer-3").removeClass("show");
        $(".beer-3").addClass("hide");
        $(".beer-2").removeClass("hide");
        $(".beer-2").addClass("show");
    } else if  ($(".beer-2").hasClass("show")) {
        $(".beer-2").removeClass("show");
        $(".beer-2").addClass("hide");
        $(".beer-1").removeClass("hide");
        $(".beer-1").addClass("show");
    }
    check_if_in_view();
});






//Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);



$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

