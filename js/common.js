$(document).ready(function(){


//btn menu mobile
    $('.btn_nav').click(function(){
        $(this).toggleClass('active');
    });
    $('.btn_nav').click(function(){
        $('.menu_mobile').toggleClass('left_0');
        $('body').toggleClass('body_class');
    });

//    owlCarousel
    $("#owl-carousel").owlCarousel({
        navigation : true, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        items : 1,
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:4000,
        autoplayHoverPause: true,
        itemsMobile : true,
        margin:20,
        autoplayHoverPause: true,
        navText:'',
        nav:true
    });
    
//    magnificPopup form_popup
    $('.header_contacts_btn').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300

    });

    
});