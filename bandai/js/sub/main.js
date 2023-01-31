$(function(){
  //이미지의 순번을 할당할 변수
  var num = 0;

  var totalSlide = $("#main .slide>li").length;

  $("#main .slide>li").click(function(){
    $("#main .slide>li").removeClass("on");
    $(this).addClass("on");
    var i = $(this).index();
    num = i;
    $("#main .main").stop().animate({"left":(-100*num)+"%"},500);
  });

  $("#main .next").click(function(){
    if($("#main .main").is(":animated")) return false;
    slideRight();
  });

  $("#main .prev").click(function(){
    if($("#main .main").is(":animated")) return false;
    slideLeft();
  });

  //버튼에 마우스를 올리면 setInterval을 정지
  $("#main .wrapper>div").mouseover(function(){
    clearInterval(timer)
  });

  //버튼에 마우스가 떠나면 setInterval할당
  $("#main .wrapper>div").mouseout(function(){
    timer = setInterval(slideRight,4000)
  });

  var timer = setInterval(slideRight,4000);

  function slideLeft(){
    num--;
    if(num<=-1){num = totalSlide-1;};
    var first = $("#main .main>li").first();
    $("#main .main").stop().animate({"left":"-100%"},500,function(){
      $(this).append(first).css({"left":0})
    });
    active();
  };

  function slideRight(){
    num++;
    if(num >= totalSlide){num = 0;};
    var last = $("#main .main>li").last();
    $("#main .main").prepend(last).css("left","-100%").stop().animate({"left":0},500);
    active();
  };

  function active(){
    $("#main .slide>li").removeClass("on");
    $("#main .slide>li:eq("+num+")").addClass("on");
  };
})