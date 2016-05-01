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