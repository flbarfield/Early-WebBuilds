var mobileMenu = $('#selections');

//NAV BEHAIVIOR
$('.fa-bars').on({
    'click': function () {
        'use strict';
        $('#fade').css({
            'background': 'gray',
            'opacity': '.5'
        });
        $('#selections').css({'background': 'white'});
        mobileMenu.css('width', '0');
        mobileMenu.show().animate({width: '15em'});
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