$(function(){
   //이미지의 순번을 할당할 변수
   var thumbs = 0;
  
   //버튼을 클릭했을때 해당순번의 이미지위치로 이동하는 구문
   $("#sub .largeImg>.box>li").click(function(){
     $("#sub .largeImg>.box>li").removeClass("on");
     $(this).addClass("on")
     var p = $(this).index();
     thumbs = p;
     var gos = thumbs*-1200;
     $("#sub .sub").stop().animate({"left":gos+"px"},500);
   });
 
   //버튼에 마우스를 올리면 setInterval을 정지
   $("#sub .sub > li").mouseover(function(){
     clearInterval(time)
   });
 
   //버튼에 마우스가 떠나면 setInterval할당
   $("#sub .sub > li").mouseout(function(){
     time = setInterval(slide,4000)
   });
 
   //slider함수를 5초에 한번씩 반복실행
   var time = setInterval(slide,4000);
   
   //slider함수생성 
   function slide(){
     thumbs++;
     if(thumbs >= $("#sub .sub>li").length){
       thumbs = 0;
     }
     $("#sub .largeImg>.box>li").removeClass("on");
     $("#sub .largeImg>.box>li").eq(thumbs).addClass("on");
     var gos = thumbs*-1200;
     $("#sub .sub").stop().animate({"left":gos+"px"},500);
   }
})