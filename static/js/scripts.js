jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
    $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
  });
    $(window).resize(function(){
        var ancho = $(window).width();
        if(ancho<=1024){
            $('.clase1').removeClass('grid_4').addClass('grid_12');
            $('.clase2').removeClass('grid_4').addClass('grid_12');
            $('.clase3').removeClass('grid_3').addClass('grid_12');

            $(window).scroll(function(){
                if ( $(this).scrollTop() > 200) {
                $('#logo').fadeOut(1000);
            } 
            else {
                $('#logo').fadeIn();
            }  
            });
        }
        else{
            $('.clase1').removeClass('grid_12').addClass('grid_4');
            $('.clase2').removeClass('grid_12').addClass('grid_4');
            $('.clase3').removeClass('grid_12').addClass('grid_3');
        }
       
    });
});   
