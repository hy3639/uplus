$(document).ready(function(){
	resQuick();
	
	/* GNB 하위메뉴 */
	//열기
	$(document).on('click', '.gnb .link', function(){
		if($(this).closest('.gnb-item').hasClass('on')){
			gnbHide();
		}else{
			gnbHide();
			$(this).closest('.gnb-item').addClass('on');
			$(this).closest('.gnb-item').find('.depth').fadeIn(100, function(){
				$(this).addClass('on');
			});
		}
	});
	//닫기
	// $(document).mouseup(function(e){
	// 	var $depth = $('.gnb-item');
	// 	if(!$depth.is(e.target) && $depth.has(e.target).length === 0){
	// 		gnbHide();
	// 	}
	// });
	function gnbHide(){
		$('.gnb-item').removeClass('on');
		$('.gnb-item .depth').removeClass('on').hide();
	}

	/* quick 메뉴열기 */
	// $(document).on('click', '.btn-quick', function(){
	// 	if($(this).hasClass('on')){
	// 		$(this).removeClass('on').prev('.quick').removeClass('on');
	// 		$('.quick-item').removeClass('on');
	// 		$('.quick .depth').removeClass('on').css('display','none')
	// 	}else{
	// 		$(this).addClass('on').prev('.quick').addClass('on');
	// 	}		
	// })

	/* quick 하위메뉴 */
	//열기
	$(document).on('click', '.quick button.link', function(){
		if($(this).closest('.quick-item').hasClass('on')){
			quickHide();
		}else{
			quickHide();
			$(this).closest('.quick-item').addClass('on');
			$(this).closest('.quick-item').find('.depth').fadeIn(100, function(){
				$(this).addClass('on');
			});
		}
	});
	//닫기
	// $(document).mouseup(function(e){
	// 	var $depth = $('.quick-item');
	// 	if(!$depth.is(e.target) && $depth.has(e.target).length === 0){
	// 		quickHide();
	// 	}
	// });
	function quickHide(){
		$('.quick-item').removeClass('on');
		$('.quick-item .depth').removeClass('on').hide();
	}




	/* 탭영역 */
	$(document).on('click', '.tab-item .btn', function(){
		var idx = $(this).closest('.tab-item').index();
		console.log(idx);
		if(!$(this).closest('.tab-item').hasClass('on')){
			$(this).closest('.tab-item').addClass('on').siblings('.tab-item').removeClass('on');
			$(this).closest('.tab-lst').next('.tab-conts').children('.tab-cont').hide().removeClass('on').eq(idx).fadeIn(200).addClass('on');
		}
	});

	/* 툴팁 */
	$('.btn-tooltip').mouseenter(function(){
		$(this).next('.tooltip-layer').show();
	});
	$('.btn-tooltip').mouseleave(function(){
		$(this).next('.tooltip-layer').hide();
	});

	


	
});


$(window).on('load', function(){
	rdoCheck(); // 라디오,체크박스

	//디자인스크롤
	$(".scroll-area").mCustomScrollbar({
		mouseWheelPixels : 500, 
		scrollInertia : 100
	});
	$(".scroll-area").resizable();

});

$(window).resize(function(){
	resQuick();
});


$(window).scroll(function(){
	
});

/* 라디오,체크박스*/
function rdoCheck(){
	

    $('input[type=radio].styled, input[type=checkbox].styled').each(function(){
        if(!$(this).parent().hasClass('chkbox')){
            $(this).wrap('<span class="chkbox"></span>');
            var $chk = $(this).closest('.chkbox');
            $chk.append('<span class="chk"></span>');
        }
    });

	// $('input[type=checkbox].styled2').each(function(){
    //     if(!$(this).parent().hasClass('chkbox')){
    //         $(this).wrap('<span class="chkbox"></span>');
    //         var $chk = $(this).closest('.chkbox');
    //         $chk.append('<span class="chk"></span>');
    //     }
    // });
	
}

/* 셀렉트 스타일 입히기 */
// function select(){
//     $('select.styled').each(function(){
// 		$(this).wrap('<div class="selBox"></div>');
        
//     });
// }


/* 반응형 퀵 */
function resQuick(){
	var w = $(window).outerWidth();
	if(w >= 1470){	
		//펼쳐질경우
		$('.quick-area').each(function(){
			$(this).removeClass('nonfix');		
			$(this).addClass('on').find('.quick').addClass('on');			
		});			
	}else{
		//닫힐경우			
		$('.quick-area').each(function(){
			$(this).addClass('nonfix');			
			$(this).removeClass('on').find('.quick').removeClass('on');
			$(this).find('.quick-item').removeClass('on');
			$(this).find('.depth').removeClass('on').hide();
		});			
		$(document).on('mouseenter', '.quick-area.nonfix', function(){
			if($(this).hasClass('fix')){
				$(this).removeClass('on').find('.quick').removeClass('on');
				$('.quick-item').removeClass('on');
				$('.quick .depth').removeClass('on').css('display','none')
			}else{
				$(this).addClass('on').find('.quick').addClass('on');
			}		
		});
		$(document).on('mouseleave', '.quick-area.nonfix', function(){				
			$(this).removeClass('on');
			$(this).find('.quick').removeClass('on');
			$('.quick-item').removeClass('on');
			$('.quick-item .depth').removeClass('on').hide();			
		});
		
	}
}

	
	
