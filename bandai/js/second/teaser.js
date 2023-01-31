$(function(){
  $(".box").click(function(){
    $("#teaser>.wrapper").css("height","1080px");
    $("#teaser .box").animate({bottom:"0"},500,function(){
      $(this).css("display","none")
    })
    $("#teaser .text").css('display','none');
    $("#teaser .txt").css('display','none');
    $("#teaser #video").get(0).play()
  });
})