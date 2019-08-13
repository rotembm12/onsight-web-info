$(function () {
    $(document).scroll(function () {
      let $nav = $("#main_navbar1");
      let $dropDownToggle = $('.dropdown-toggle');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $dropDownToggle.toggleClass('scrolled-item', $(this).scrollTop() > $nav.height());
    });
  });
 
