$(document).ready(function() {
  var projectTextStartingBackground = $('#project-text-box').css('background-color');
  $('#im-text').hide();
  $('#dvd-text').hide();
  $('#unit-text').hide();
  $('#console-text').hide();
  var textId;

  $('.project-link').mouseover(function() {
    var color = $(this).css('background-color');
    var id = $(this).attr('id');
    var idStem = id.substr(0, id.length - 4);
    textId = "#" + idStem + "text";
    $('#project-text-box').css('background-color',color);
    $(textId).show();
    $('#projects-text').hide();
  });

  $('.project-link').mouseleave(function() {
    $('#project-text-box').css('background-color',projectTextStartingBackground);
    $(textId).hide();
    $('#projects-text').show();
  })
});
