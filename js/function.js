$(function(){
    $('#gnav-btn').on('click', function(){
        $('#gnav').toggleClass('gnav--02')
        $('#gnav-btn__top').toggleClass('gnav-btn__top--02')
        $('#gnav-btn__mid').toggleClass('gnav-btn__mid--02')
        $('#gnav-btn__btm').toggleClass('gnav-btn__btm--02')
    });
});