$(document).ready(function () {
  /* FOR STICKY NAVIGATION */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80px;",
    }
  );
  /* ANIMATION SCROLL */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );
  $(".js--nav").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav i");

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.removeClass("ion-close-round");
      icon.addClass("ion-navicon-round");
    }
    nav.slideToggle(200);
  });
});
