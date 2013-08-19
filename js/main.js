$(document).ready(function() {
  var justNavigatedWhileOnPage = false;

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

    document.location.hash = "#alg/" + $alg.attr('id');
  });

  // Switching sub-views of algorithms.
  $(".tabs li").click(function(ev) {
    var $li = $(ev.target).closest("li");
    var $activeTab = $(".tabs li.active")
    var $prependTitle = $(".prepend-title");
    var $activeSection, $newSection, $newTitle;

    // Don't switch between tabs if the user clicked the current tab.
    if ($li !== $activeTab) {
      $("#active-alg").slideUp('fast', function() {
        $("#active-alg").empty();
        $(".inactive").removeClass('inactive');
      });

      $newSection = $(".section#" + $li.attr('id'));

      // Fade out old content if a tab was previously selected.
      if ($activeTab.length > 0) {
        $activeSection = $(".section#" + $activeTab.attr('id'));
        $activeSection.fadeOut('fast', function() {
          $newSection.fadeIn('fast');
        });
      } else {
        $newSection.fadeIn('fast');
      }

      // Update tab appearance.
      $(".tabs li").removeClass('active');
      $li.addClass('active');

      // Join subtitle with title, if applicable.
      if ($prependTitle.length > 0) {
        $('.joined-title').remove();
        $newTitle = $prependTitle.hide().clone().removeClass('prepend-title').addClass('joined-title');
        $newTitle.append(" &mdash; " + $newSection.find(".append-title").text());
        $prependTitle.parent().prepend($newTitle);
        $newSection.find(".append-title").hide();
        $newTitle.show();
      }

      justNavigatedWhileOnPage = true;
      window.location.hash = "section/" + $li.attr('id');
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

  var navigateWithHash = function() {
    if (justNavigatedWhileOnPage) {
      // Don't re-process this navigate event that occurred from a user's click.
      justNavigatedWhileOnPage = false;
    } else if (document.location.hash !== "") {
      // Automatically open tab/alg specified in hash.
      var tab, $algLi;

      // Activate this particular algorithm.
      if (document.location.hash.indexOf('alg/') === 1) {
        $algLi = $(".alg-list li#" + document.location.hash.substr(5));

        tab = $algLi.closest('ul').attr('id');
      } else {
        tab = document.location.hash.substr("#section/".length);
      }

      // Activate this tab, if this page supports tabs.
      if ($(".collapsible").length > 0) {
        $(".tabs li#" + tab).click();
      }

      if ($algLi !== undefined) {
        $algLi.click();
      }
    }
  };

  $(window).on('hashchange', navigateWithHash);
  navigateWithHash();

  var path = document.location.pathname.replace('.html', '');
  $("#nav").find("a[href='" + path + "']").closest("ul").show();
});