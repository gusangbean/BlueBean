$(function () {
    // alert('gd')


    $('main .main2 .portfolio1 .port1').click(function () {
        $('main .popup1').fadeIn()
    })
    $('main .popup1 .btn').click(function () {
        $('main .popup1').fadeOut()
    })

    $('main .main2 .portfolio1 .port2').click(function () {
        $('main .popup2').fadeIn()
    })
    $('main .popup2 .btn').click(function () {
        $('main .popup2').fadeOut()
    })

    $('main .main2 .portfolio2 .port3').click(function () {
        $('main .popup3').fadeIn()
    })
    $('main .popup3 .btn').click(function () {
        $('main .popup3').fadeOut()
    })
    $('main .main2 .portfolio2 .port4').click(function () {
        $('main .popup4').fadeIn()
    })
    $('main .popup4 .btn').click(function () {
        $('main .popup4').fadeOut()
    })

    $('main .main2 .portfolio3 .port5').click(function () {
        $('main .popup5').fadeIn()
    })
    $('main .popup5 .btn').click(function () {
        $('main .popup5').fadeOut()
    })
    $('main .main2 .portfolio3 .port6').click(function () {
        $('main .popup6').fadeIn()
    })
    $('main .popup6 .btn').click(function () {
        $('main .popup6').fadeOut()
    })




    // 1. 클릭했을 때 해당하는 영역ㄱ

    $('header .inner nav ul li').click(function(){
        $(this).addClass('on')
        $(this).siblings().removeClass('on')

        let idx = $(this).index()
        console.log(idx)
        let section = $('main section').eq(idx)
        let sectionDistance = section.offset().top - (0)

        $('html, body').animate({
            scrollTop: sectionDistance
        })
    })

    // 2. 색바꿈
    $(window).scroll(function(){
        $('main section').each(function(){
            if ($(this).offset().top <= $(window).scrollTop() + 100) {
                $('header .inner nav ul li').removeClass('on')
                let idx = $(this).index()
                $('header .inner nav ul li').eq(idx).addClass('on')
            }
        })
    })

})
