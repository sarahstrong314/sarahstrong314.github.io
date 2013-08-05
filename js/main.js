$(document).ready(function() {
  $(".alg-list li").click(function(ev) {
    $alg = $(ev.target).closest("li");
    $("#active-alg").fadeOut('fast', function() {
       $("#active-alg").html($alg.html()).fadeIn();
    });
  });
});