$(function(){//document.ready
  //이미지의 순번을 할당할 변수
  var count = 0;
  
  //버튼을 클릭했을때 해당순번의 이미지위치로 이동하는 구문
  $("#main .sub>li").click(function(){
    $("#main .sub>li").removeClass("on");
    $(this).addClass("on")
    var i = $(this).index();
    count = i;
    var pos = count*-900;
    $("#main .thumbs").stop().animate({"left":pos+"px"},500);
  });

  //버튼에 마우스를 올리면 setInterval을 정지
  $("#main .sub > li").mouseover(function(){
    clearInterval(timer)
  });

  //버튼에 마우스가 떠나면 setInterval할당
  $("#main .sub > li").mouseout(function(){
    timer = setInterval(slider,4000)
  });

  //slider함수를 5초에 한번씩 반복실행
  var timer = setInterval(slider,4000);
  
  //slider함수생성 
  function slider(){
    count++;
    if(count >= $("#main .sub>li").length){
      count = 0;
    }
    $("#main .sub>li").removeClass("on");
    $("#main .sub>li").eq(count).addClass("on");
    var pos = count*-900;
    $("#main .thumbs").stop().animate({"left":pos+"px"},500);
  }
 })