$(function () {
    var annai = '.hdGnav_annai';

    $(annai).hover(function () {
            $(".hdGnav_annai ul,.hdGnav_annai > div").css("height", "auto");
            setTimeout(function () {
                $(".hdGnav_annai ul,.hdGnav_annai > div").fadeTo(300, 1);
            }, 100);
        },
        function () {
            //マウスが離れたとき
            //透明にする
            $(".hdGnav_annai ul,.hdGnav_annai > div").fadeTo(200, 0); //0.2秒で透明
            setTimeout(function () {
                $(".hdGnav_annai ul,.hdGnav_annai > div").css("height", "0");
            }, 200);
        });

    var brand = '.hdGnav_brand';

    $(brand).hover(function () {
            $(".hdGnav_brand ul,.hdGnav_brand > div").css("height", "auto");
            setTimeout(function () {
                $(".hdGnav_brand ul,.hdGnav_brand > div").fadeTo(300, 1);
            }, 100);
        },
        function () {
            //マウスが離れたとき
            //透明にする
            $(".hdGnav_brand ul,.hdGnav_brand > div").fadeTo(200, 0); //0.2秒で透明
            setTimeout(function () {
                $(".hdGnav_brand ul,.hdGnav_brand > div").css("height", "0");
            }, 200);
        });

    var IR = '.hdGnav_IR';

    $(IR).hover(function () {
            $(".hdGnav_IR ul,.hdGnav_IR > div").css("height", "auto");
            setTimeout(function () {
                $(".hdGnav_IR ul,.hdGnav_IR > div").fadeTo(300, 1);
            }, 100);
        },
        function () {
            //マウスが離れたとき
            //透明にする
            $(".hdGnav_IR ul,.hdGnav_IR > div").fadeTo(200, 0); //0.2秒で透明
            setTimeout(function () {
                $(".hdGnav_IR ul,.hdGnav_IR > div").css("height", "0");
            }, 200);
        });

    var CSR = '.hdGnav_CSR';


    $(CSR).hover(function () {
            $(".hdGnav_CSR ul,.hdGnav_CSR > div").css("height", "auto");
            setTimeout(function () {
                $(".hdGnav_CSR ul,.hdGnav_CSR > div").fadeTo(300, 1);
            }, 100);
        },
        function () {
            //マウスが離れたとき
            //透明にする
            $(".hdGnav_CSR ul,.hdGnav_CSR > div").fadeTo(200, 0); //0.2秒で透明
            setTimeout(function () {
                $(".hdGnav_CSR ul,.hdGnav_CSR > div").css("height", "0");
            }, 200);
        });

    var recruit = '.hdGnav_recruit';
    $(recruit).hover(function () {
            $(".hdGnav_recruit ul,.hdGnav_recruit > div").css("height", "auto");
            setTimeout(function () {
                $(".hdGnav_recruit ul,.hdGnav_recruit > div").fadeTo(300, 1);
            }, 100);
        },
        function () {
            //マウスが離れたとき
            //透明にする
            $(".hdGnav_recruit ul,.hdGnav_recruit > div").fadeTo(200, 0); //0.2秒で透明
            setTimeout(function () {
                $(".hdGnav_recruit ul,.hdGnav_recruit > div").css("height", "0");
            }, 200);
        });

    $(".topimgSlide").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 3000,
        fade: true,
    });

    var topBtn = $('.topBtn');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    var header = $('.header_wrapper');
    var navline = $('.hdGnav_downmenu');
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            header.css({
                'background-color':
                'rgba(65,75,106,0.8)',
                'transition': '0.5s',
                'padding-top': '0'
            });
            navline.css({
                'top': '91px'
            });

        } else {
            header.css({
                'background-color': 'transparent',
                'padding-top': '25px'
            });
            navline.css({
                'top': '116px'
            });
        }
    });


});
