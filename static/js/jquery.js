$(document).ready(function () {
    $('.slide_home.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $('.slide_trend.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.slide_details.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })
    $('.bnc_main_category_slide.owl-carousel').owlCarousel({
        loop:false,
        nav:true,
        // navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    $('.news_slider.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })


    /* Nút scroll top*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $(".bnc_scrolltop").fadeIn();
        else $(".bnc_scrolltop").fadeOut();
        });
        $(".bnc_scrolltop").click(function () {
        $("body,html").animate({scrollTop: 0}, "1000");
        });
    // popup khi load trang
    $(document).ready(function(){       
        $('#myModal').modal('show');
    });

    // slide news sidebar
    $('#slick1').slick({
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        rows: 2,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        nav: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 2,
                rows: 2,
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: true,
                nav: true
            }
        }, {
            breakpoint: 480,
            settings: {
                rows: 1,
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: true
            }
        }]
    });
   $('.bnc_header_bot_search').click(function (e) { 
       e.preventDefault();
       $('.open_search').toggleClass('dilen');
   });
   $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });

    $('.close').click(function (e) { 
        e.preventDefault();
       $('.bnc_ads_banner').hide();
    });
    $('.toggle_media').click(function (e) { 
        e.preventDefault();
        $('.bnc_ads_banner').toggleClass('mediashow');
    });

    $(function() {
        $('.fa-minus').on('click', function() {
          $(this).toggleClass('collapsed');
        });
      });
});