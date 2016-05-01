var backgrounds = [
    'url(Images/Fireplace.jpg)',
    'url(Images/MiscRoom.jpg)',
    'url(Images/PoolTable.jpg)'],
    
    timeoutVar,
    current = 0;

//SlideShow

function changeBackground () {
    'use strict';
    clearTimeout(timeoutVar);
    $('html').css('background-image', function () {
        if (current > backgrounds.length) {
            current = 0;
        }
        return backgrounds[current++];
    });
    timeoutVar = setTimeout(changeBackground, 3000);
}
changeBackground();


//Minimized panel behaivior

$('#min-right-panel .fa').on('click', function () {
    'use strict';
    $(this).parent().fadeOut();
    $('#right-panel').fadeIn();
});

$('#min-right-panel').on({
    'mouseenter': function () {
        'use strict';
        $(this).animate({ width: '+=.5em' }, 200);
    },
    'mouseleave': function () {
        'use strict';
        $(this).animate({ width: '-=.5em'}, 200);
    }
});

//Max panel behaivior

$('.fa-arrow-right').on('click', function () {
    'use strict';
    $(this).parent().parent().fadeOut();
    $('#min-right-panel').fadeIn();
});