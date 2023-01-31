$(function(){
  var min = 0;
    var max = -2280;
    $("#content #bar").draggable({
      axis:"x",
      containment:'parent',
      drag:function(){
        var barleft = $("#content #bar").css("left");
        console.log(barleft)
        barleft = parseInt(barleft);//문자열을 숫자열로 변환
        var power = ((barleft*(max-min))/1000)+min;
        $("#content .icon").css("left",power);
      }
    });
})