$(document).ready(function(){
    
    
   /* for sticky navigation */    
   $(".js--section-start").waypoint(function(direction) {
       
        if (direction == "down") {
           $("nav").addClass("sticky");
            
            if( $("nav").hasClass("sticky") ){
                $(".sticky").hide().slideToggle();   
            }
        }else{
            $("nav").removeClass("sticky");  
        }
        
    },{ offset: '60px;'});
    
    
    /* scroll for buttons */
    $(".js--scroll-to-plans").click( function(){
       
        $("html, body").animate( {scrollTop: $(".js--section-plans").offset().top},1000 );
        
    });
    
     /* scroll for buttons */
    $(".js-scroll-to-start").click( function(){
       
        $("html, body").animate( {scrollTop: $(".js--section-start").offset().top},1000 );
        
    });
    
    
    $(".js--scroll-to-aboutus").click( function(){
        $("html, body").animate( {scrollTop: $(".js--section-aboutus").offset().top},1000 );
    });
    
    
    $(".js--scroll-to-dienste").click( function(){
        $("html, body").animate( {scrollTop: $(".js--section-dienste").offset().top},1000 );
    });
    
    $(".js--scroll-to-richtungen").click( function(){
        $("html, body").animate( {scrollTop: $(".js--section-richtungen").offset().top},1000 );
    });
    
    $(".js--scroll-to-kontakte").click( function(){
        $("html, body").animate( {scrollTop: $(".js--section-kontakte").offset().top},1000 );
    });
    
    
    /* animations beims scrollen */
    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated fadeIn");
    },{ offset: '50%;'});
    
    
    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated fadeIn");
    },{ offset: '50%;'});
    
    
    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn");
    },{ offset: '50%;'});
    
    
    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse");
    },{ offset: '20%;'});
    

    $(".js--wp-5").waypoint(function(direction){
        $(".js--wp-5").addClass("animated fadeIn");
    },{ offset: '50%;'});
    
    
    /* mobil nav */
    $(".js--nav-icon").click(function(){
        
        var nav = $(".js--main-nav");
        
        
        var icon = $(".js--nav-icon i");
        
        nav.slideToggle(200);
        
        
        
        if(icon.hasClass("ion-navicon-round")){
            icon.removeClass("ion-navicon-round");
            icon.addClass("ion-close-round");
        }else{
            if(icon.hasClass("ion-close-round")){
                icon.removeClass("ion-close-round");
                icon.addClass("ion-navicon-round");
            }
        }
    });
    
    
    
    
    
    
    
});