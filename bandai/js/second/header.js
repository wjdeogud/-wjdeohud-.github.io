$(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll)
    var header = $("header").offset().top + 160;
    if(scroll > header){
      $("#menu").css("display","block")
    }else if(header>scroll>=0){
      $("#menu").css("display","none")
    }
  });

  $("#menu .icon").click(function(){
    no();
    $("nav .wrapper").css("display","block")
    $("nav .gnb").animate({right:"0px"},500)
  });
  $("nav .wrapper").click(function(){
    $("nav .gnb").animate({right:"-400px"},500,function(){
      $("nav .wrapper").css("display","none")
      on();
    })
  });

  function on(){
    $("#menu").css("display","block").animate({top:0},500)
  }

  function no(){
    $("#menu").animate({top:"-160px"},500,function(){
      $("#menu").css("display","none")
    })
  }
})