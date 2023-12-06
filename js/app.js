$ (document).ready(function(){

$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    smartSpeed: 1000,
    dots: false,
    navText: ['PREV','NEXT'],
    responsive:{
        0:{
            
            nav:false,
        },
        768:{

            nav:true,
            
        },
       
    }
})


/*project slider*/

$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: ['PREV','NEXT'],
    margin: 24,
    responsive:{
        0:{
            
          items: 1,
          nav: false,
          margin: 0,
        },
        768:{
            items: 2,
        
            
        },
        1140: {
            items:2,
            center: true,
        }
       
    }
})


});

$('#reference').owlCarousel({
    loop:true,
    margin:0,
    nav: false,
    dots: true,
    items:1, 
    smartSpeed: 800,
    
})
