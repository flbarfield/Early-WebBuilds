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

$('.fa-home').on({
    'mouseenter': function () {
        'use strict';
        $('.fa-home').css('color', 'rgb(0, 174, 211)');
    },
    'mouseleave': function () {
        'use strict';
        $('.fa-home').css('color', 'rgb(97, 97, 97)');
    }
});

$('.town').on({
    'mouseenter': function () {
        'use strict';
        $('.town').css({
            'background-color': 'rgb(245, 122, 44',
            'color': 'white'
        });
        $('#max-selections, .town-selections').fadeIn();
//        $('.town-selections').show();
    },
    'mouseleave': function () {
        'use strict';
        $('.town').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
        $('#max-selections, .town-selections').fadeOut();
    }
});

$('.discover').on({
    'mouseenter': function () {
        'use strict';
        $('.discover').css({
            'background-color': 'rgb(93, 186, 93)',
            'color': 'white'
        });
    },
    'mouseleave': function () {
        'use strict';
        $('.discover').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
    }
});

$('.quick').on({
    'mouseenter': function () {
        'use strict';
        $('.quick').css({
            'background-color': 'rgb(232, 76, 61)',
            'color': 'white'
        });
    },
    'mouseleave': function () {
        'use strict';
        $('.quick').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
    }
});

$('.live').on({
    'mouseenter': function () {
        'use strict';
        $('.live').css({
            'background-color': 'rgb(0, 174, 211)',
            'color': 'white'
        });
    },
    'mouseleave': function () {
        'use strict';
        $('.live').css({'color': 'rgb(97, 97, 97)',
                        'background-color': 'rgb(237, 237, 237)'
                       });
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