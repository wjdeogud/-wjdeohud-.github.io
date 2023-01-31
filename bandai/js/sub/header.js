$(function(){
  $("header .meganav>.dropdown").hover(
   function(){
     $(this).children(".dropdown-content").stop().delay(200).fadeIn(100);
     $("header .dropdown-content2").css({"display":"none"});
     $(".gb2").slideUp(400);
   },
   function(){
     $("header .dropdown-content").stop().css({"display":"none"});
   }
  );

  var gb = $("header .gb")

  $("header .meganav>.dropdown").hover(
   function(){
     gb.stop().slideDown(400);
   },
   function(){
     gb.stop().slideUp(400);
   }
  );

  $("header .search>.btn").click(function(){
   var sub = $("header .search>.btn").next(".dropdown-content2");
   if(sub.is(":visible")){
     sub.stop().css({"display":"none"});
   }else{
     sub.stop().delay(300).fadeIn(100);
   }
  });

  $("header .search>.btn").click(function(){
   if($(".gb2").is(":visible")){
     $(".gb2").slideUp(400);
   }else{
     $(".gb2").slideDown(400);
   }
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    //console.log(scroll)
    var mainTop = $("#main").offset().top;
    //console.log(mainTop)
    if(scroll>mainTop+100){
      $("header>.wrap>.box").slideUp(300);
      $("header").css("color","#111");
      $("header").css("background-color","#fff");
      $("header").css("padding-top","40px");
      $("header button").css("color","#111");
      $("header .search .fas").css("color","#111");
    }
    else{
      $("header>.wrap>.box").slideDown(300);
      $("header").css("color","#fff");
      $("header").css("background-color","transparent");
      $("header").css("padding","0");
      $("header button").css("color","#fff");
      $("header .search .fas").css("color","#fff");
    }
  })
 })