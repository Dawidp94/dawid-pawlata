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
   });

   $(window).scroll(function(){
    if(($(window).scrollTop() > $('#sec-2').offset().top)){
        $('#logo').addClass("fixed")
        $('#logo').addClass("top-0")
        $('#logo').addClass("left-0")
        $('#logo').addClass("bg-black")
        $('#logo').addClass("opacity-90")
        $('#logo').addClass("w-screen")
        $('#logo').removeClass("w-4/5")
        $('#logo').addClass("pl-10")
        $('#logo-a').removeClass("md:mt-10")
        $('#logo-a').addClass("my-3")
        $('#logo').addClass("z-50")
        $('#logo-a').removeClass("sm:text-2xl")
        $('#logo-a').removeClass("text-xl")
        $('#logo-a').addClass("text-md")
        
    }else {
        $('#logo').removeClass("fixed")
        $('#logo').removeClass("top-0")
        $('#logo').removeClass("left-0")
        $('#logo').removeClass("bg-black")
        $('#logo').removeClass("w-4/5")
        $('#logo').addClass("w-screen")
        $('#logo').removeClass("pl-10")
        $('#logo-a').addClass("md:mt-10")
        $('#logo-a').removeClass("my-3")
        $('#logo').removeClass("z-50")
        $('#logo-a').addClass("sm:text-2xl")
        $('#logo-a').addClass("text-xl")
        $('#logo-a').removeClass("text-md")
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



