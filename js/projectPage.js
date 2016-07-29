$(document).ready(function() {
  var projectTextStartingBackground = $('#projects-text').css('background-color');

  $('.project-link').mouseover(function() {
    var color = $(this).css('background-color');
    $('#projects-text').css('background-color',color);
  });

  $('.project-link').mouseleave(function() {
    $('#projects-text').css('background-color',projectTextStartingBackground);
  })
});
