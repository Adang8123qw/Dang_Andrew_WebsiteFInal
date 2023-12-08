$(document).ready(function() {
    $("#welcome-section").fadeIn(1000);
    $(".menu-items-container").click(function() {
      $(this).slideToggle();
    });
});