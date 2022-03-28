$(document).ready(function () {
  "use strict";

  //   $(".demo").beefup({
  //     accessibility: true,
  //   });

  //   up down create;
  $(".item1 .faq-heading").on("click", function () {
    $(".item1 .faq-content").slideToggle();
    $(".item1").toggleClass("border-red");
    $(".content2, .content3, .content4").hide();
    $(".item2, .item3, .item4").removeClass("border-red", 1000);
  });

  $(".item2 .faq-heading").on("click", function () {
    $(".item2 .faq-content").slideToggle();
    $(".item2").toggleClass("border-red");
    $(".content1, .content3, .content4").hide();
    $(".item1, .item3, .item4").removeClass("border-red", 1000);
  });

  $(".item3 .faq-heading").on("click", function () {
    $(".item3 .faq-content").slideToggle();
    $(".item3").toggleClass("border-red");
    $(".content2, .content1, .content4").hide();
    $(".item2, .item1, .item4").removeClass("border-red", 1000);
  });

  $(".item4 .faq-heading").on("click", function () {
    $(".item4 .faq-content").slideToggle();
    $(".item4").toggleClass("border-red");
    $(".content2, .content3, .content1").hide();
    $(".item2, .item3, .item1").removeClass("border-red", 1000);
  });

  // countdown timer;

  $("#getting-started").countdown("2030/01/01", function (event) {
    $("#hours").html(event.strftime("%H"));
    $("#minutes").html(event.strftime("%M"));
    $("#seconds").html(event.strftime("%S"));
  });
});
