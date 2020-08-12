$(function(){

	$('.gazo').click(function(){

		if($(this).hasClass('close')==false){
			/*hamburgerメニューが閉じていて開けたいときの処理(バツを表示する処理)*/
			$(this).attr('src','images/close-icon.png').addClass('close'),
				$('.inmenu').slideDown(600);

		}else{
			/*hamburgerメニューが開いていて閉じたいときの処理(hamburgerを表示したいときの処理)*/
			$(this).attr('src','images/open-icon.png').removeClass('close'),
				$('.inmenu').slideUp(500);
		}
	});

	$('.open-inmenu').click(function(){
		$(this).next('.in-inmenu').slideToggle();
	});





	//    $('.gazo').click(function(){
	//       if($('.gazo').attr('class') == 'selected')  {
	//           $(this).removeClass('selected').next('.inmenu').slideUp('fast');
	//       } else {
	//           
	//       }
	//    });
});