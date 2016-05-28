var mobileMenu = $('#selections');

//NAV BEHAIVIOR

//mobile nav

$('.fa-bars').on({
    'click': function () {
        'use strict';
        $('#fade').css({
            'background-image': 'url(../grey.png)',
            'opacity': '.4'
        });
        mobileMenu.css('width', '0');
        mobileMenu.removeClass('hide').animate({width: '15em'});
        setTimeout(function () {
            if (!mobileMenu.hasClass('hide')) {
                $('html').not(mobileMenu).on('click', function () {
                    mobileMenu.animate({width: '0'});
                    $('#fade').removeAttr('style');
                });
            }
        }, 1000);
    },
    'mouseenter': function () {
        'use strict';
        $('.fa-bars').css('color', 'rgb(245, 122, 44)');
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-bars').css('color', 'rgb(97, 97, 97)');
    }
});

//max nav


//SLIDESHOW BEHAIVIOR

$('#slideshow').slidesjs({
    width: 100,
    height: 20,
    play: {
        active: false,
        effect: 'fade',
        interval: 5000,
        auto: true,
        restartDelay: 2500
    },
    effect: {fade: {speed: 900}},
    navigation: {active: false},
    pagination: {active: false}
});

//COLUMN BEHAIVIOR


// ICON BEHAIVIOR

//$('#bill-icons i, #city-directory i').on({
//    'mouseenter': function () {
//        'use strict';
//    },
//    'mouseleave': function () {
//        'use strict';
//    }
//}