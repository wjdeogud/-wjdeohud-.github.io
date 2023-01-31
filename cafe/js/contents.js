$(function(){

  var num = 0;

  var totalSlide = $("#contents .dot>li").length;

  $("#contents .dot>li").click(function(){
    $("#contents .dot>li").removeClass("on");
    $(this).addClass("on");
    var i = $(this).index();
    $("#contents .largeImg").stop().animate({"left":-(i*100)+"%"},500)
  })

  $("#contents .largeImg").mouseover(function(){
    clearInterval(timer)
  });

  $("#contents .largeImg").mouseout(function(){
    timer = setInterval(slideRight,4000)
  });

  var timer = setInterval(slideRight,4000);

  function slideRight(){
    num++;
    if(num >= totalSlide){num = 0;};
    $("#contents .largeImg").stop().animate({"left":-(num*100)+"%"},500)
    active();
  }

  function active(){
    $("#contents .dot>li").removeClass("on");
    $("#contents .dot>li:eq("+num+")").addClass("on");
  }
})