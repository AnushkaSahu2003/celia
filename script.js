

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
var tl = gsap.timeline()
tl.from("#logo,#div1,#div2", {
delay:1,
  stagger:0.5,
  opacity: 0,

  duration: 1,

})

tl.to("#page1 h4,#page1 h3,#page1 p", {
  opacity:0,
     
  duration: 0.5,
   stagger:1,
   y:-15,
     scrollTrigger: {
       trigger: `#page1 h4 `,
       start: `top 40%`,
       end: `top -10%`,
       scroller:"#main",
      //  markers:true,
       scrub: 1,
     }
   
   })
var time = gsap.timeline()

time.from("#first,#second,#third", {
  rotate:80,
  y:250,

  x:80,
  opacity: 0,
// stagger:1,
  duration: 2,

})
time.to("#first", {
 rotate:180,
  
  duration: 2,


  scrollTrigger: {
    trigger: `#first `,
    start: `top 30%`,
    end: `top -80%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }

})
time.to("#second", {
 rotate:-170,
  
  duration: 2,


  scrollTrigger: {
    trigger: `#second `,
    start: `top 50%`,
    end: `top -80%`,
    scroller: '#main',
    // markers:true,
    scrub: 1,
  }

})
time.to("#third", {
 rotate:180,
  
  duration: 2,


  scrollTrigger: {
    trigger: `#third `,
    start: `top 80%`,
    end: `top -80%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }

})
time.from("#page2 h1,#page2 p", {
 opacity:0,
  
  duration: 1,

// y:200,
  scrollTrigger: {
    trigger: `#page2  `,
    start: `top 30%`,
    end: `top 10%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }

})


time.to("#page2",{
  // fontWeight:100,
  transform:"translateX(-50%)",
  duration:1,

  scrollTrigger:{
      trigger:"#page2 ",
      scroller:"#main",
      start:"top -5%",
      end:"top -50%",
      // markers:true,
      scrub:1,
      pin:true,
  }
})
time.from("#img1 ,#img3",{
stagger:0.5,
y:-180,
  duration:2,

  scrollTrigger:{
      trigger:"#img1",
      scroller:"#main",
      start:"top -4%",
      end:"top -30%",
      // markers:true,
      scrub:1,
      
  }
})
time.from("#img2 ,#img4",{
stagger:0.5,
y:280,
  duration:2,

  scrollTrigger:{
      trigger:"#img1",
      scroller:"#main",
      start:"top -5%",
      end:"top -30%",
      // markers:true,
      scrub:1,
      
  }
})
time.from("#page5 img",{
rotateX:120,
duration:6,
opacity:0,
stagger:3,
  scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      start:"top 80%",
      end:"top -150%",
      // markers:true,
      scrub:2,
      
  }
})
time.from("#white",{

duration:2,
y:120,
opacity:0,

  scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top 0%",
      end:"top -10%",
      // markers:true,
      scrub:1,
      pin:true,
    
      
  }
})
time.from("#box",{

duration:2,
y:700,


  scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      start:"top -20%",
      end:"top -100%",
      // markers:true,
      scrub:1,
    pin:true,
      
  }
})

time.from("#imgg1 ,#imgg2,#imgg3,#imgg4 ,#imgg5", {
  
  y: 320,
  rotateY:120,
  stagger: 3,
  duration: 3,
  opacity:0,
  rotateX:90,
  scrollTrigger: {
    trigger: `#page7`,
    start: `top 0%`,
    end: `top -200%`,
    scroller: `#main`,
    // markers:true,
    pin: true,
    scrub: 2,
  }
})
tl.to("#divv", {
  top: "-120%",
  stagger: 3,
  duration: 2,
  scrollTrigger: {
    trigger: `#page8`,
    start: `top -10%`,
    end: `top -50%`,
    scroller: `#main`,
    // markers:true,
    pin: true,
    scrub: 4,
  }
})




