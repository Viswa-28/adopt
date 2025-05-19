  gsap.registerPlugin(ScrollTrigger);
  

let btn=document.querySelector('.primary-btn');
btn.addEventListener('click',function(){
 alert('Button Clicked');
})

  let left=document.querySelector('.left-container');
  let right=document.querySelector('.right-container');
  let banner=document.querySelector('.banner-sub');

  // gsap.to(left,{
  //   ScrollTrigger:{
  //     trigger:banner,
  //     start:"top top",
  //     end:"bottom top",
  //     // end:"bottom center",
  //     scrub:true,
  //     // pin:true,
  //     markers:true
  //   },
  //   x:100,
  //   ease:"1",
  //   duration:1
  // });


  // gsap.to(right,{
  //   ScrollTrigger:{
  //     trigger:banner,
  //     start:"top center",
  //     end:"bottom center",
  //     scrub:true,
  //     // pin:true,
  //     markers:true
  //   },
  //   x:-50,
  //   ease:"1",
  //   duration:1
  // });
  let tl = gsap.timeline({
  scrollTrigger: {
    trigger: banner,
    start: "top bottom",
    end: "bottom ",
    scrub: 1,
    // pin: true,
    // markers: true
  }
});

tl.to(left, { x: -1000, ease: "none" }, 1)
.to(right, { x: 1000, ease: "none" }, 1);


let card=document.querySelector('.card');