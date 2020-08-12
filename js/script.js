$(function(){
    
    var annai = '.hdGnav_annai';
    var brand = '.hdGnav_brand';
    var IR = '.hdGnav_IR';
    var CSR = '.hdGnav_CSR';
    var recruit = 'hdGnav_recruit';
    
    $('.hdGnav_annai').hover(function(){
        $(".hdGnav_downmenu,.hdGsubnav_item").css("height","auto");
        setTimeout(function(){
        $(".hdGnav_downmenu,.hdGsubnav_item").fadeTo(300, 1);},100);
    },
    function () {
        //マウスが離れたとき
        //透明にする
        $(".hdGnav_downmenu,.hdGsubnav_item").fadeTo(200, 0);    //0.2秒で透明
        setTimeout(function(){
     $(".hdGnav_downmenu,.hdGsubnav_item").css("height","0");},200);
    });
});