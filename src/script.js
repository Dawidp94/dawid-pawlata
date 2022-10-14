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
    }),

   $("div#burger").click(function()
   {
       $("div#burger").toggleClass("change")
       $("body").toggleClass("overflow-y-hidden")
       $("#menu").toggleClass("translate-y-full")
       if ($("#background-darken").hasClass("visible-mode")){
        $("#background-darken").removeClass("visible-mode")
       }else{
        $("#background-darken").addClass("visible-mode")
       }
       
   }
   );

   $("li#select-menu").click(function()
   {
        $("body").removeClass("overflow-y-hidden")
        $("#menu").removeClass("translate-y-full")
        $("div#burger").removeClass("change")
        $("#background-darken").addClass("visible-mode")
   });

   $("#arrow").click(function(){

    $("div#arrow").toggleClass("arrow-rotate")
    $("div#certific-container").toggleClass("certific-open")
   

   })
 
   
      





 

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
            {target: elements, edge: "end", threshold: "0"},
            {target: elements, edge: "start", threshold: "1"}
        ],
    }); 

    elements.animate(
        {
            // transform: [
            //     "perspective(1000px) rotateX(45deg)",
            //     "perspective(1000px) rotate(0)",
            // ],
            opacity: ["0", "1"]
        },
        {
            duration: 1,
            easing: "linear",
            timeline: animitedImageTimeline,
            
    
        }
    );
});



