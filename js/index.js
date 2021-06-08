$(function(){
    $('#gnav-btn').on('click', function(){
        $('#gnav').toggleClass('gnav--02')
        $('#gnav-btn__top').toggleClass('gnav-btn__top--02')
        $('#gnav-btn__mid').toggleClass('gnav-btn__mid--02')
        $('#gnav-btn__btm').toggleClass('gnav-btn__btm--02')
    });

    $(window).scroll(function(){

        var target = $('#sec1__ashirai').offset().top;
        target -= 600;
        if( $(window).scrollTop() > target){
        $('#sec1__ashirai').addClass('sec1__ashirai--02');
    }else{
        $('#sec1__ashirai').removeClass('sec1__ashirai--02');
         }

        var target = $('#sec1__ttl').offset().top;
        target -= 600;
        if( $(window).scrollTop() > target){
        $('#sec1__ttl').addClass('sec1__ttl--02');
    }else{
        $('#sec1__ttl').removeClass('sec1__ttl--02');
         }

        var target = $('#sec1__top-lead').offset().top;
        target -= 600;
        if( $(window).scrollTop() > target){
        $('#sec1__top-lead').addClass('sec1__top-lead--02');
    }else{
        $('#sec1__top-lead').removeClass('sec1__top-lead--02');
         }

        var target = $('#sec1__box').offset().top;
        target -= 500;
        if( $(window).scrollTop() > target){
        $('#sec1__box').addClass('sec1__box--03');
    }else{
        $('#sec1__box').removeClass('sec1__box--03');
         }
        var target = $('#sec1__box-02').offset().top;
        target -= 500;
        if( $(window).scrollTop() > target){
        $('#sec1__box-02').addClass('sec1__box--03');
    }else{
        $('#sec1__box-02').removeClass('sec1__box--03');
        }
// topページセクション2コーヒー豆種類
        var target = $('#sec2__box-01').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-01').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-01').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-02').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-02').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-02').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-03').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-03').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-03').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-04').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-04').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-04').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-05').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-05').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-05').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-06').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-06').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-06').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-07').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-07').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-07').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-08').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-08').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-08').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-09').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-09').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-09').removeClass('sec2__box--02');
         }
        var target = $('#sec2__box-10').offset().top;
        target -= 400;
        if( $(window).scrollTop() > target){
        $('#sec2__box-10').addClass('sec2__box--02'); 
    }else{
        $('#sec2__box-10').removeClass('sec2__box--02');
         }


    //     var target = $('#sec2__ttl').offset().top;
    //     target -= 300;
    //     if( $(window).scrollTop() > target){
       
    //     $('#sec2__box-02').addClass('sec2__box--02');
    //     $('#sec2__box-03').addClass('sec2__box--02');
    //     $('#sec2__box-04').addClass('sec2__box--02');
    //     $('#sec2__box-05').addClass('sec2__box--02');
    // }else{
       
    //     $('#sec2__box-02').removeClass('sec2__box--02');
    //     $('#sec2__box-03').removeClass('sec2__box--02');
    //     $('#sec2__box-04').removeClass('sec2__box--02');
    //     $('#sec2__box-05').removeClass('sec2__box--02');
    //      }

    });

});