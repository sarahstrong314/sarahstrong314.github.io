$(document).ready(function() {
  $(".alg-list li").click(function(ev) {
    var $alg = $(ev.target).closest("li").clone();
    $alg.find(".details h3").prepend($alg.find(".alg-name").text() + ": ")
    $alg.find(".alg-name").remove()

    if ($("#active-alg").is(":visible")) {
      $("#active-alg").fadeOut('fast', function() {

       $("#active-alg").html($alg.html()).fadeIn();
      });
    } else {
      $("#active-alg").html($alg.html()).slideDown('fast');
    }
  });
});