$(function() {
    function fixHeightOnIOS7() {
        var fixedHeight = Math.min(
            $(window).height(), // This is smaller on Desktop
            window.innerHeight || Infinity // This is smaller on iOS7
        );
        $('body').height(fixedHeight);
    }

    $(window).on('resize orientationchange', fixHeightOnIOS7);
    fixHeightOnIOS7();
    $('body').css('position', 'fixed');
    $('.gate').css('height', document.height);
});
