$(function(){
  var controller = new ScrollMagic.Controller();

  var tween9 = TweenMax.to('#contain #A>ul>li', 1, {
    rotationY:180,
    opacity:0
  });

  var tween10 = TweenMax.to('#contain #B>ul>li', 1, {
    rotationY:360
  });

  var tween11 = TweenMax.to('#contain #B', 1, {
    opacity:1
  });

  var tween12 = TweenMax.to('#contain #B>ul>li', 1, {
    rotationY:540
  });

  var tween13 = TweenMax.to('#contain #B', 1, {
    opacity:0
  });

  var tween14 = TweenMax.to('#contain #C>ul>li', 1, {
    rotationY:360
  });

  var tween15 = TweenMax.to('#contain #C', 1, {
    opacity:1
  });
  
    var scene9 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger7",
      duration: "5990px",
      triggerHook :0
    })
    .setPin("#contain .wrapper")
    .addTo(controller)

    var scene10 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger8",
      duration: "2000px",
      triggerHook :0
    })
    .setTween(tween9)
    .addTo(controller)

    var scene11 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger9",
      duration: "1500px",
      triggerHook :0
    })
    .setTween(tween10)
    .addTo(controller)

    var scene12 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger9",
      duration: "1500px",
      triggerHook :0
    })
    .setTween(tween11)
    .addTo(controller)

    var scene14 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger10",
      duration: '3000px',
      triggerHook :0
    })
    .setClassToggle('#contain #one', 'on')
    .addTo(controller)

    var scene13 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger11",
      duration: "2000px",
      triggerHook :0
    })
    .setTween(tween12)
    .addTo(controller)

    var scene14 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger11",
      duration: "2000px",
      triggerHook :0
    })
    .setTween(tween13)
    .addTo(controller)

    var scene15 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger12",
      duration: "1500px",
      triggerHook :0
    })
    .setTween(tween14)
    .addTo(controller)

    var scene16 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger12",
      duration: "1500px",
      triggerHook :0
    })
    .setTween(tween15)
    .addTo(controller)

    var scene14 = new ScrollMagic.Scene({
      triggerElement: "#contain #trigger13",
      duration: '500px',
      triggerHook :0
    })
    .setClassToggle('#contain #two', 'on')
    .addTo(controller)
})