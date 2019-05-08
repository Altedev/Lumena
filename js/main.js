$( document ).ready(function(){

    $('.cross').hide();
    $( ".hamburger" ).click(function() {
        console.log(123);
        $( "header .content nav ul" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( "header .content nav ul" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            992: {slidesPerView: 1, slidesPerGroup: 1}
        }
    });

    $('#submitForm').on('click', function(e){
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var phone = $('input[name="phone"]').val();
        var message = $('textarea[name="message"]').val();

        var error = 0;

        if(!name){
            $('input[name="name"]').attr('id', 'error');
            error++;
        }
        if(!phone){
            $('input[name="phone"]').attr('id', 'error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {name : name, phone: phone,message: message}
        }).done(function( data ) {
            $('#mainForm').html('<h3>'+data.msg+'</h3>');
        });
    });

    $(window).scroll(function() {
        var top_of_element = $("#howCreatePictureBlockOne").offset().top;
        var bottom_of_element = $("#howCreatePictureBlockOne").offset().top + $("#howCreatePictureBlockOne").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();


        var top_of_element_two = $("#howCreatePictureBlockTwo").offset().top;
        var bottom_of_element_two = $("#howCreatePictureBlockTwo").offset().top + $("#howCreatePictureBlockTwo").outerHeight();
        var bottom_of_screen_two = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_two = $(window).scrollTop();

        var top_of_element_three = $("#howCreatePictureBlockThree").offset().top;
        var bottom_of_element_three = $("#howCreatePictureBlockThree").offset().top + $("#howCreatePictureBlockThree").outerHeight();
        var bottom_of_screen_three = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_three = $(window).scrollTop();

        var top_of_element_four = $("#howCreatePictureBlockFour").offset().top;
        var bottom_of_element_four = $("#howCreatePictureBlockFour").offset().top + $("#howCreatePictureBlockFour").outerHeight();
        var bottom_of_screen_four = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_four = $(window).scrollTop();


        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            TweenMax.to('#howCreatePictureBlockOne', 1, {
                left: 0,
                ease: Bounce.easeOut
            });
        }
        if ((bottom_of_screen_two > top_of_element_two) && (top_of_screen_two < bottom_of_element_two)){
            TweenMax.to('#howCreatePictureBlockTwo', 1, {
                left: 0,
                ease: Bounce.easeOut
            });
        }
        if ((bottom_of_screen_three > top_of_element_three) && (top_of_screen_three < bottom_of_element_three)){
            TweenMax.to('#howCreatePictureBlockThree', 1, {
                left: 0,
                ease: Bounce.easeOut
            });
        }
        if ((bottom_of_screen_four > top_of_element_four) && (top_of_screen_four < bottom_of_element_four)){
            TweenMax.to('#howCreatePictureBlockFour', 1, {
                left: 0,
                ease: Bounce.easeOut
            });
        }


    });


    $('.gallery').find('li a').on('click', function (e) {
        var href = $(this).attr('href');
        e.preventDefault();
        $('.scope-pictures').hide();
        $(href).show();
    })

    $('.choose-form ul li').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('item');
        $('.choose-form').addClass('step');
        $('.choose-size').removeClass('step');
        $(this).parent().parent().find('.none').addClass('disabled');
        $('.choose-size').find('.disabled').removeClass('disabled').addClass('none');
    })

    $('.choose-size ul li label').on('click', function () {
        $('.choose-size').find('.none').removeClass('none').addClass('disabled');
        $(this).parent().parent().parent().addClass('step');
        $('.bottom').find('.disabled').removeClass('disabled').addClass('none');

        var valueSpan = $(this).attr('for');
        var valueItem = $(this).parent().parent().parent().parent().parent().find('.item').attr('value');
        var result = parseInt(valueSpan) + parseInt(valueItem);
        $('p.cost span').text(result);
        console.log($('p.cost span').text());
    })

    $('.div-ghost button.see-image').on('click', function (e) {
        e.preventDefault();
        console.log(this);
        $(this).parent().find('a:eq(0)').trigger('click');
    })

});