$(document).ready(function() {
  $("#content").addClass($("#content > div").attr('id'));

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

    document.location.hash = "#alg-" + $alg.attr('id');
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

  $("#nav li h3").click(function(ev) {
    var $li = $(ev.target).closest("li");

    if ($li.find("ul").is(":visible")) {
      $li.find("ul").slideUp();
    } else {
      $("#nav li").not($li).find("ul").slideUp();
      $li.find("ul").slideDown();
    }
  });

  // Automatically open tab/alg specified in hash.
  if (document.location.hash !== "") {
    var tab, $algLi;

    // Activate this particular algorithm.
    if (document.location.hash.indexOf('alg-') === 1) {
      $algLi = $(".alg-list li#" + document.location.hash.substr(5));

      tab = $algLi.closest('ul').attr('id');
    } else {
      tab = document.location.hash.substr(1);
    }

    // Activate this tab, if this page supports tabs.
    if ($(".collapsible").length > 0) {
      $(".tabs li#" + tab).click();
    }

    if ($algLi !== undefined) {
      $algLi.click();
    }
  }
});