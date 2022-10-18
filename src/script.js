import 'https://rawcdn.githack.com/flackr/scroll-timeline/637746fa559c3f9d01fcdaf2fcb7e649d18dfc33/dist/scroll-timeline.js';

   $(window).scroll(function(){
        if(($(window).scrollTop() <= 1000)){
            $('#foto-map').addClass("opacity-0")
            $('#foto-between').addClass("opacity-0")
            $('#foto-main').addClass("opacity-1")
            $('#foto-main').removeClass("opacity-0")
    }
        else if($(window).scrollTop() > 1000 && $(window).scrollTop() < 2500){
            $('#foto-main').addClass("opacity-0")
            $('#foto-between').addClass("opacity-1")
            $('#foto-between').removeClass("opacity-0")
            $('#foto-map').removeClass("opacity-1")
            $('#foto-map').addClass("opacity-0")
            // $('#foto-map').removeClass("opacity-0")
        } else {
            $('#foto-between').addClass("opacity-0")
            $('#foto-between').removeClass("opacity-1")
            $('#foto-map').removeClass("opacity-0")
            $('#foto-map').addClass("opacity-1")
             
        }

   })


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
 
   
      

const animitedElements = document.querySelectorAll(".animited");

animitedElements.forEach((elements) => {

    const animitedImageTimeline = new ScrollTimeline({
        scrollOffsets: [
            {target: elements, edge: "end", threshold: "0"},
            {target: elements, edge: "start", threshold: "1"}
        ],
    }); 

    elements.animate(
        {
            opacity: ["0", "1"]
        },
        {
            duration: 1,
            easing: "linear",
            timeline: animitedImageTimeline,
            
        }
    );
});



