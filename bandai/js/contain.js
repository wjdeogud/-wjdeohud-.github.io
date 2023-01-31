$(function(){//document.ready
  $("#contain .meganav>li>button").mouseover(function(){
    $("#contain .meganav>li>button").removeClass("on");
    $(this).addClass("on")
  });
 })