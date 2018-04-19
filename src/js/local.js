$(document).ready(function () {
    var body = $('body');

    function topMenu() {
        if ($(window).width() < 959) {

            body.on('click', '.top-menu__link.active', function () {
                $(this).parents('.top-menu__wrap').toggleClass('open');
                return false
            });
        }
    };

    topMenu();
    $(window).on('resize', function () {
        topMenu();
    });

    body.on('click', '.map__btn', function (event) {
        event.preventDefault();
        if ($(this).siblings('.map__btn-container').hasClass('visible')) {
            $(this).siblings('.map__btn-container').removeClass('visible');
        }
        else {
            $('.map__btn-container').removeClass('visible');
            $(this).siblings('.map__btn-container').addClass('visible');
        }
    });

    body.mouseup(function(event) {
        if ($('.map__btn-wrapper').has(event.target).length === 0) {
            $('.map__btn-container').removeClass('visible');
        }
    });

    body.on('focus', '#copyTarget', function(event){
        $(this).select();
    });

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    };

    body.on('click', '#copyButton', function() {
        copyToClipboard($('#copyTarget'));
    });
    body.on('click', '.btn-go-back', function() {
        $('.ranking-table__container').css('height', 'auto');
        $('.btn-container--show-full').hide();
    });
    $('#northeast').iframeTracker({
        blurCallback: function(){
            openPhotoSwipe(items[0]);
        }
    });
    $('#southatlantic').iframeTracker({
        blurCallback: function(){
            openPhotoSwipe(items[1]);
        }
    });
    $('#southcentral').iframeTracker({
        blurCallback: function(){
            openPhotoSwipe(items[2]);
        }
    });
    $('#midwest').iframeTracker({
        blurCallback: function(){
            openPhotoSwipe(items[3]);
        }
    });
    $('#mountainwest').iframeTracker({
        blurCallback: function(){
            openPhotoSwipe(items[4]);
        }
    });
    $('#pacificwest').iframeTracker({
        blurCallback: function(){
            openPhotoSwipe(items[5]);
        }
    });
});
