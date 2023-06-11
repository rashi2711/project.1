// document.querySelector("")
function show1(){
  gsap.set(".a",{opacity:0,y:-10})
  var t6=gsap.timeline({
      scrollTrigger:{
        trigger:"#main",
        start:"top top",
        end:"+=" + (window.innerHeight*2),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })
  t6.to(".a",{
      opacity:1,
      stagger:.6,
      y:10,
      duration:1
  })
  
}

show1();
function show2(){
  gsap.set(".col",{opacity:0,y:-10})
  var t6=gsap.timeline({
      scrollTrigger:{
        trigger:"#main1",
        start:"top top",
        end:"+=" + (window.innerHeight*2),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })
  t6.to(".col",{
      opacity:1,
      stagger:.6,
      y:10,
      duration:1
  })
}
show2();

function show3(){
  gsap.set(".b",{opacity:0,y:-10})
  var t7=gsap.timeline({
      scrollTrigger:{
        trigger:"#main2",
        start:"top top",
        end:"+=" + (window.innerHeight*2),
        pin:true,
        // markers:true,
        scrub:2
    }
    })
  t7.to(".b",{
    // delay:2,
      opacity:1,
      stagger:.6,
      y:10,
      duration:1
  })
  
}
show3();


function show4(){
  gsap.set(".c",{opacity:0, y:-10})
  var t1=gsap.timeline({
    scrollTrigger:{
      trigger:"#main3",
      start:"top top",
      end:"+=" + (window.innerHeight*9),
      pin:true,
    //   markers:true,
      scrub:2
  }
  })
t1.to("#main3 #overlay1",{
    duration:1,
    left:"0%",
    ease:Power3
})  
t1.to(".c",{
  opacity:1,
  duration:1,
  stagger:.6,
  ease:Power3,
  y:10
})
t1.to("#on2 video",{
 width:"102%",
  ease:Power3
})
}
show4();
function show5(){
  var t2=gsap.timeline({
      scrollTrigger:{
        trigger:"#main4",
        start:"top top",
        end:"+=" + (window.innerHeight*2),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })
  t2.to("#side1 img",{
      duration:1,
      rotate:"40deg",
      ease:Power3,
      
  })
  }
  show5();


  function show6(){
    gsap.set(".d",{opacity:0, y:-10})
    var t1=gsap.timeline({
      scrollTrigger:{
        trigger:"#main5",
        start:"top top",
        end:"+=" + (window.innerHeight*4),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })
  t1.to("#main5 #carbox",{
      duration:1,
      left:"50%",
      ease:Power3
  },"a")  
  t1.to(".d",{
    delay:1,
    opacity:1,
    duration:1,
    stagger:.6,
    ease:Power3,
    y:10
  },"a")
  t1.to("#carbox video",{
   width:"800px",
    ease:Power3
  })
  }
  show6();

  function show7(){
    gsap.set(".e",{opacity:0, y:-10})
    var t1=gsap.timeline({
      scrollTrigger:{
        trigger:"#main6",
        start:"top top",
        end:"+=" + (window.innerHeight*1),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })  
  t1.to(".e",{
    opacity:1,
    duration:1,
    stagger:.6,
    ease:Power3,
    y:10
  })
t1.to("#main6 #box3 img",{
  delay:5,
  top:"-70%",
  left:"-50%",
  ease:Power3
},"A")
t1.to("#main6 #box4 img",{
  delay:5,
  top:"-70%",
  left:"50%",
  ease:Power3
},"A")
  }
  show7();
  
function show8()
{
  
    gsap.set(".f",{opacity:0, y:-10})
    var t1=gsap.timeline({
      scrollTrigger:{
        trigger:"#main7",
        start:"top top",
        end:"+=" + (window.innerHeight*9),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })
  t1.to("#main7 #mid",{
      duration:1,
      marginLeft:"0%",
      ease:Power3
  })  
  t1.to(".f",{
    opacity:1,
    duration:1,
    stagger:.6,
    ease:Power3,
    y:10
  })
}
show8();

function show9(){
    gsap.set(".g",{opacity:0, y:-10})
    var t1=gsap.timeline({
      scrollTrigger:{
        trigger:"#main8",
        start:"top top",
        end:"+=" + (window.innerHeight*9),
        pin:true,
      //   markers:true,
        scrub:2
    }
    })
 
  t1.to(".g",{
    opacity:1,
    duration:3,
    stagger:.6,
    ease:Power3,
    y:10
  })
  t1.to("#main8 img",{
   width:"59%",
    ease:Power3
  })
  }

show9();
gsap.to("#overlay svg",{
   opacity:0,
   duration:1,
   ease:Expo.easeInOut
})
gsap.to("#overlay",{
    delay:1,
    duration:1,
    opacity:0,
    ease:Expo.easeInOut
})
gsap.to("#center #right",{
    // delay:1,
     duration:2,
   top:"-900px",
   ease:Power3
},"a")
gsap.to("#center #left",{
    // delay:1,
    duration:2,
    top:"700px",
    ease:Power3
},"a")

gsap.to("#line #ci",{
    duration:2,
    // delay:1,
  left:"1100px",
  ease:Expo.easeInOut
},"a")
gsap.to("#line #contact",{
    duration:2,
    // delay:1,
    left:"1100px",
    ease:Expo.easeInOut
},"a")