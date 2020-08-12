$(function(){
    var annai = '.hdGnav_annai';
    
    $(annai).hover(function(){
        $(".hdGnav_annai ul,.hdGnav_annai > div").css("height","auto");
        setTimeout(function(){
        $(".hdGnav_annai ul,.hdGnav_annai > div").fadeTo(300, 1);},100);
    },
    function () {
        //マウスが離れたとき
        //透明にする
        $(".hdGnav_annai ul,.hdGnav_annai > div").fadeTo(200, 0);    //0.2秒で透明
        setTimeout(function(){
     $(".hdGnav_annai ul,.hdGnav_annai > div").css("height","0");},200);
    });
});

$(function(){
    var brand = '.hdGnav_brand';
    
    $(brand).hover(function(){
        $(".hdGnav_brand ul,.hdGnav_brand > div").css("height","auto");
        setTimeout(function(){
        $(".hdGnav_brand ul,.hdGnav_brand > div").fadeTo(300, 1);},100);
    },
    function () {
        //マウスが離れたとき
        //透明にする
        $(".hdGnav_brand ul,.hdGnav_brand > div").fadeTo(200, 0);    //0.2秒で透明
        setTimeout(function(){
     $(".hdGnav_brand ul,.hdGnav_brand > div").css("height","0");},200);
    });
});

$(function(){
    var IR = '.hdGnav_IR';
    
    $(IR).hover(function(){
        $(".hdGnav_IR ul,.hdGnav_IR > div").css("height","auto");
        setTimeout(function(){
        $(".hdGnav_IR ul,.hdGnav_IR > div").fadeTo(300, 1);},100);
    },
    function () {
        //マウスが離れたとき
        //透明にする
        $(".hdGnav_IR ul,.hdGnav_IR > div").fadeTo(200, 0);    //0.2秒で透明
        setTimeout(function(){
     $(".hdGnav_IR ul,.hdGnav_IR > div").css("height","0");},200);
    });
});

$(function(){
    var CSR = '.hdGnav_CSR';
    var recruit = 'hdGnav_recruit';
    var itemul = ' ul';
    
    
    $(CSR).hover(function(){
        $(".hdGnav_CSR ul,.hdGnav_CSR > div").css("height","auto");
        setTimeout(function(){
        $(".hdGnav_CSR ul,.hdGnav_CSR > div").fadeTo(300, 1);},100);
    },
    function () {
        //マウスが離れたとき
        //透明にする
        $(".hdGnav_CSR ul,.hdGnav_CSR > div").fadeTo(200, 0);    //0.2秒で透明
        setTimeout(function(){
     $(".hdGnav_CSR ul,.hdGnav_CSR > div").css("height","0");},200);
    });
});

$(function(){
    var recruit = '.hdGnav_recruit';
    $(recruit).hover(function(){
        $(".hdGnav_recruit ul,.hdGnav_recruit > div").css("height","auto");
        setTimeout(function(){
        $(".hdGnav_recruit ul,.hdGnav_recruit > div").fadeTo(300, 1);},100);
    },
    function () {
        //マウスが離れたとき
        //透明にする
        $(".hdGnav_recruit ul,.hdGnav_recruit > div").fadeTo(200, 0);    //0.2秒で透明
        setTimeout(function(){
     $(".hdGnav_recruit ul,.hdGnav_recruit > div").css("height","0");},200);
    });
});

$(function(){
    $(".topimgSlide").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 3000,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
});