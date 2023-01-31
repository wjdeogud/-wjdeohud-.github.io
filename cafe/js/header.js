$(function(){
  $("header .bar").click(function(){
    $("header .menu").animate({right:"0px"},500)
  })
  $("header .btn").click(function(){
    $("header .menu").animate({right:"-400px"},500)
  })
})