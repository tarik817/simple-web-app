$(document).ready(function(){
    $("#owl-carousel").owlCarousel({

        // Наиболее важные особенности owl
        items : 1,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop : true,
        autoplay : true,
        autoplayTimeout : 4000
    });
});
