$(document).ready(function() {

  // Focussing on one particular algorithm.
  $(".alg-list li").click(function(ev) {
    var $alg = $(ev.target).closest("li");
    var activeAlgPosition;

    $(".alg-list li").not($alg).find(".overview").addClass('inactive');
    $alg.find(".overview").removeClass('inactive');
    $alg = $alg.clone();

    if ($alg.find(".alg-name").length > 0) {
      $alg.find(".details h3").prepend($alg.find(".alg-name").text() + ": ")
      $alg.find(".alg-name").remove()
    }

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

  // Switching sub-views of algorithms.
  $(".tabs li").click(function(ev) {
    var $li = $(ev.target).closest("li");
    var $activeTab = $(".tabs li.active")
    var $activeList;

    if ($li !== $activeTab) {
      $("#active-alg").slideUp('fast', function() {
        $("#active-alg").empty();
        $(".inactive").removeClass('inactive');
      });

      if ($activeTab.length > 0) {
        $activeList = $(".alg-list#" + $activeTab.attr('id'));
      }

      if ($activeList !== undefined) {
        $activeList.fadeOut('fast', function() {
          $(".alg-list#" + $li.attr('id')).fadeIn('fast');
        });
      } else {
        $(".alg-list#" + $li.attr('id')).fadeIn('fast');
      }

      $(".tabs li").removeClass('active');
      $li.addClass('active');

      window.location.hash = $li.attr('id');
    }
  });

  if ($('.collapsible').length > 0 && document.location.hash !== "") {
    $(".tabs li" + document.location.hash).click();
  }
});