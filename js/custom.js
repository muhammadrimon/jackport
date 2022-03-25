$(document).ready(function () {
  "use strict";

  //   $(".demo").beefup({
  //     accessibility: true,
  //   });

  //   up down create;
  $(".item1 .faq-heading").on("click", function () {
    $(".item1 .faq-content").slideToggle();
    $(".item1").toggleClass("border-red");
  });

  $(".item2 .faq-heading").on("click", function () {
    $(".item2 .faq-content").slideToggle();
    $(".item2").toggleClass("border-red");
  });

  $(".item3 .faq-heading").on("click", function () {
    $(".item3 .faq-content").slideToggle();
    $(".item3").toggleClass("border-red");
  });

  $(".item4 .faq-heading").on("click", function () {
    $(".item4 .faq-content").slideToggle();
    $(".item4").toggleClass("border-red");
  });
});
