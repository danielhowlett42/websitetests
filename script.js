$(document).ready(function(){
  $('button').mouseenter(function(){
      $(this).fadeTo("fast", 0.6);//
        $(this).click(function(){
          window.location.href = "firstpage.html";
        });
  });
  $('button').mouseleave(function(){
      $('button').fadeTo("fast", 1);
  });

});
