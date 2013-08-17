$(document).ready(function() {
  $(".alg-list li").click(function(ev) {
    var $alg = $(ev.target).closest("li");
    var activeAlgPosition;

    $(".alg-list li").not($alg).find(".overview").css({opacity: 0.66})
    $alg.find(".overview").css({opacity: 1.0})
    $alg = $alg.clone();

    $alg.find(".details h3").prepend($alg.find(".alg-name").text() + ": ")
    $alg.find(".alg-name").remove()

    if ($("#active-alg").is(":visible")) {
      $("#active-alg").fadeOut('fast', function() {

       $("#active-alg").html($alg.html()).fadeIn();
      });
    } else {
      $("#active-alg").html($alg.html()).slideDown('fast');
    }

    activeAlgPosition = $('#active-alg').position().top;


    if ($('body').scrollTop() > activeAlgPosition) {
      $('body').animate({scrollTop: activeAlgPosition}, 500);
    }
  });
});