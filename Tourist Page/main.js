var mobileMenu = $('#selections');

//NAV BEHAIVIOR
$('.fa-bars').on({
    'click': function () {
        'use strict';
        $('#fade').css({
            'background-image': 'url(../grey.png)',
            'opacity': '.4'
        });
        mobileMenu.css('width', '0');
        mobileMenu.removeClass('hide').animate({width: '15em'});
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

if (!mobileMenu.hasclass('hide')) {
    $('#fade').on('click', function () {
        'use strict';
        mobileMenu.animate({width: '0'});
        $('#fade').removeAttr('style');
        mobileMenu.addClass('hide');
    });
//    $('#selections').click(function (e) {
//        e.stopPropagation();
//    });
}

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