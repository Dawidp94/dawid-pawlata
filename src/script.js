import 'https://rawcdn.githack.com/flackr/scroll-timeline/637746fa559c3f9d01fcdaf2fcb7e649d18dfc33/dist/scroll-timeline.js';

   $(window).scroll(function(){
        if($(window).scrollTop() > 1000){
    $('#foto-main').addClass("opacity-0")
        } else {$('#foto-main').removeClass("opacity-0")

        }
   })

   $(window).scroll(function(){
    if($(window).scrollTop() > 1000){
    $('#foto-map').addClass("opacity-1")
    $('#foto-map').removeClass("opacity-0")
    } else {$('#foto-map').removeClass("opacity-1")
    $('#foto-map').addClass("opacity-0")

    }
    })  


   $("div.nav_burger").click(function()
   {
        // console.log("działa");
       $("ul.navs_elements").toggleClass("navsChange"),
       $("div.nav_burger").toggleClass("change")
       
   });

   $("#arrow").click(function(){

    // $("div#arrow").toggleClass("arrow-hover")
    $("div#certific").toggleClass("h-[235px]")

   })
 

function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightS2 = $('.section1').offset().top;
    const heightS3 = $('.section2').offset().top;
    const heightS4 = $('.section3').offset().top;
    const heightS5 = $('.section4').offset().top;
    const heightS6 = $('footer').offset().top;
    
 
    if (scrollValue < heightS2 - 100) {
     $('div').not('.dot_1').removeClass('active');
     $('.dot_1').addClass('active');
    } else if (scrollValue < heightS3 - 100) {
     $('div').not('.dot_2').removeClass('active');
     $('.dot_2').addClass('active');
    } else if (scrollValue < heightS4 - 100) {
     $('div').not('.dot_3').removeClass('active');
     $('.dot_3').addClass('active');
    } else if (scrollValue < heightS5 - 100) {
     $('div').not('.dot_4').removeClass('active');
     $('.dot_4').addClass('active');
    } else if (scrollValue < heightS6 - 100) {
     $('div').not('.dot_5').removeClass('active');
     $('.dot_5').addClass('active');
    }
   }
 
   $(window).on("scroll", changeDot)



 

///////////////////////////////////

// const scrollTracker = document.querySelector('.about_all_article')

// const scrollTrackingTimeline = new ScrollTimeline({
//     sourse: document.scrollingElement,
//     orientation: block,
//     scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// })

// scrollTracker.animate(
//     {
//         transform: ['scaleX(0)', 'scaleX(1)']
//     },
//     {
//         duration: 1,
//         timeline: scrollTrackingTimeline
//     }
// )




///////


const animitedElements = document.querySelectorAll(".animited");

animitedElements.forEach((elements) => {

    // const elementsOffsetTop = elements.offsetTop;
    // const elementsHeight = elements.offsetHeight;

    const animitedImageTimeline = new ScrollTimeline({
        scrollOffsets: [
            {target: elements, edge: "end", threshold: "1"},
            {target: elements, edge: "start", threshold: "1"}
        ],
    }); 

    elements.animate(
        {
            transform: [
                "perspective(1000px) rotateX(45deg)",
                "perspective(1000px) rotate(0)",
            ],
            opacity: ["0", "1"]
        },
        {
            duration: 1,
            easing: "linear",
            timeline: animitedImageTimeline,
            
    
        }
    );
});



