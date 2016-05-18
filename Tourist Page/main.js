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