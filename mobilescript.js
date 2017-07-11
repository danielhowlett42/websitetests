$(document).ready(function(){
  $('button').click(function(){
    $(this).fadeTo('slow',0.6);
    $(this).fadeTo('slow',1);
    window.location.href ="desktop.html";
  });
});
