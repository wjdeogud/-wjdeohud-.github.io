$(function(){
  
    var controller = new ScrollMagic.Controller();
    
    var tween1 = TweenMax.to('#contents #one', 1, {
      opacity: 0,
    });

    var tween2 = TweenMax.to('#contents #first', 1, {
      width:0,
      height:0
    });

    var tween3 = TweenMax.to('#contents #two', 1, {
      opacity: 1,
    });

    var tween4 = TweenMax.to('#contents #second', 1, {
      width:"100%"
    });

    var tween5 = TweenMax.to('#contents #two', 1, {
      opacity: 0
    });

    var tween6 = TweenMax.to('#contents #second', 1, {
      width:0,
      height:0
    });

    var tween7 = TweenMax.to('#contents #three', 1, {
      opacity: 1,
    });

    var tween8 = TweenMax.to('#contents #third', 1, {
      height:"100%"
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger1",
      duration: "4000px",
      triggerHook :0
    })
    .setPin("#contents .box")
    .addTo(controller)
    
    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger2",
      duration: "1000px",
      triggerHook :0
    })
    .setTween(tween1)
    .addTo(controller)

    var scene3 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger2",
      duration: "1000px",
      triggerHook :0
    })
    .setTween(tween2)
    .addTo(controller)

    var scene4 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger3",
      duration: "500px",
      triggerHook :0
    })
    .setTween(tween3)
    .addTo(controller)

    var scene5 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger3",
      duration: "500px",
      triggerHook :0
    })
    .setTween(tween4)
    .addTo(controller)
    

    var scene6 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger4",
      duration: "1500px",
      triggerHook :0
    })
    .setClassToggle('#contents #first', 'on')
    .addTo(controller)

    var scene6 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger5",
      duration: "1500px",
      triggerHook :0
    })
    .setTween(tween5)
    .addTo(controller)

    var scene7 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger5",
      duration: "1500px",
      triggerHook :0
    })
    .setClassToggle('#contents #one', 'on')
    .setTween(tween6)
    .addTo(controller)

    var scene8 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger6",
      duration: "1000px",
      triggerHook :0
    })
    .setTween(tween7)
    .addTo(controller)

    var scene9 = new ScrollMagic.Scene({
      triggerElement: "#contents #trigger6",
      duration: "1000px",
      triggerHook :0
    })
    .setTween(tween8)
    .addTo(controller)
    
})