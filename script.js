function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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

}
// init()


var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        start: "top top",
        // markers: true,
        scrub: 1,
        // end: "+=" + (window.innerHeight * 9)
    }
});

t1.to("#awards img", {
    width: "-50%", scale: 0,
    ease: Power1,
    stagger: 1,
    duration: 1
}, 'a');

t1.to("#Wlogo h1", {
    opacity: 1,
    ease: Power1,
    stagger: 1
}, 'a');

var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#second",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 9)
    }
});
t2.to(".toro", {
    x: "-100%",
    ease: Power1,
    endTime: 4,
    stagger: 1
});
t1.to("#ins h1", {
    top: "0%",
    ease: Power1,
    // delay: 4,
    duration: 2
});

t1.to("#venue", {
    top: "-3%",
    ease: Power1,
    delay: 2,
});

var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#third",
        start: "top 30%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 1)
    }
});
t3.to("#our h1", {
    top: "0%",
    ease: Power1,
    duration: 1
});

var t4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#fourth",
        start: "top 100%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 1)
    }
});

t4.to("#vitaly", {
    top: "-30%",
    ease: Power1,
    delay: .5

}, 'd');

t4.to("#pablo", {
    top: "-30%",
    ease: Power1,
    delay: .5

}, 'd');

var t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#fifth",
        start: "top 100%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 1)
    }
});
t5.to("#victor", {
    top: "42%",
    ease: Power1,
    delay: .5
}, 'e')

t5.to("#isabel", {
    top: "42%",
    ease: Power1,
    delay: .5
}, 'e')

var t6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#sixth",
        start: "top 100%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 1)
    }
});

t6.to("#femke", {
    top: "14%",
    ease: Power1
}, 'f')

t6.to("#fili", {
    top: "14%",
    ease: Power1
}, 'f')

t6.to("#speak", {
    top: "14%",
    ease: Power1
}, 'f')

var t7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#seventh",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * .5)
    }
});

t7.to("#work h1", {
    top: "10%",
    ease: Power1
}, 'g')

t7.to("#shops", {
    top: "32%",
    ease: Power1,
    delay: .5
}, 'g')

t7.to(".swiper-container", {
    top: "22%",
    ease: Power1,
    delay: 1.4
}, 'g')

var t8 = gsap.timeline({
    scrollTrigger: {
        trigger: "#eight",
        start: "top 80%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * .5)
    }
});
t8.to("#talks h2", {
    top: "0%",
    ease: Power1
}, 'h')

t8.to("#talks h1", {
    top: "0%",
    ease: Power1,
    stagger: 1
}, 'h')

var t9 = gsap.timeline({
    scrollTrigger: {
        trigger: "#nineth",
        start: "top 100%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 1)
    }
});
t9.to("#workshops h1", {
    top: "0%",
    ease: Power1,
}, 'i')

t9.to("#workshops h2", {
    top: "0%",
    ease: Power1,
}, 'i')

t9.to("#speakers h2", {
    top: "0%",
    ease: Power1,
    delay: .5
}, 'i')

t9.to("#speakers h1", {
    top: "0%",
    ease: Power1,
    delay: .5
}, 'i')

var t10 = gsap.timeline({
    scrollTrigger: {
        trigger: "#nineth",
        start: "top 90%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 9)
    }
});

t10.to("#stay", {
    x: "-100%",
    ease: Power1,
    duration: 5
})

var t11 = gsap.timeline({
    scrollTrigger: {
        trigger: "#tenth",
        start: "top 92%",
        // markers: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 2)
    }
});

t11.to(".ic .four", {
    scale: 1,
    ease: Power1,
    delay: .5
})

var t12 = gsap.timeline({
    scrollTrigger: {
        trigger: "#twelveth",
        start: "top top",
        // markers: true,   
        scrub: 1,
        // end: "+=" + (window.innerHeight * 2)
    }
});

t12.to("#code", {
    bottom: "8%",
    ease: Power1,
    duration: .5
})

var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    spaceBetween: 10
    // mousewheel: true
});


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });