/*jshint -W087 */
if ((typeof theme) === 'undefined') { theme = {}; }

theme.mfpOpen  = function (popup) {
    var closeBtn = '<button title="Close (Esc)" type="button" class="mfp-close mfp-close--custom js-close-mfp"><i class="icon icon--close"></i></button>';

    switch (popup) {
        case 'password':
            $.magnificPopup.open({
                items: {
                    src: '.js-password-pop'
                },
                type: 'inline',
                mainClass: 'mfp-medium',
                fixedContentPos: true,
                focus: '.js-password-input',
                closeMarkup: closeBtn,
                removalDelay: 200
            }); 
            break;
    }
};

$(document).ready(function(){
    $(document).on('click', '.js-password-pop-trigger', function(e) {
        theme.mfpOpen('password');
        e.preventDefault();
    });
});