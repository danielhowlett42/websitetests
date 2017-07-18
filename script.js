
$(document).ready(function(){
  // var menu = $('#stickyhome').offset().top;
  // $(window).scroll(function(){
  //   var ypos = $(this).scrollTop();
  //   if (ypos >= menu){$('#stickyhome').addClass('fixed');}
  //   else{$('#stickyhome').removeClass('fixed');}
  //   $('#stickyhome').width($('#stickyhome').parents().width());
  // });
  $('#stickyhome').click(function(){window.location.href="firstpage.html";});





  $(this).click(function(){
    window.location.href = "firstpage.html";
  });
  $('img').click(function(){
    window.location.href = "";
  });
});
