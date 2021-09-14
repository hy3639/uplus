$(document).ready(function(){
	resQuick(); // 반응형 퀵
	

/*======= 공통 (레이아웃) ======= */
	
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
function gnbHide(){
	$('.gnb-item').removeClass('on');
	$('.gnb-item .depth').removeClass('on').hide();
}

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
function quickHide(){
	$('.quick-item').removeClass('on');
	$('.quick-item .depth').removeClass('on').hide();
}

/* 상단 공지 슬라이드 */
var swiper = new Swiper(".cont-top .swiper-container", {
	direction: "vertical",
		// Navigation arrows
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},       
});

/*=======// 공통 (레이아웃) ======= */

/*======= 탭, 툴팁 ======= */

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
$('.tooltip-area').mouseenter(function(){
	$(this).find('.tooltip-layer').show();
});
$('.tooltip-area').mouseleave(function(){
	$(this).find('.tooltip-layer').hide();
});
/* 다른곳 클릭시 툴팁 닫기 */
$(document).mouseup(function(e){
	var $toolBox = $('.tooltip-area');
	if (!$toolBox.is(e.target) && $toolBox.has(e.target).length === 0){
		$toolBox.find('.tooltip-layer').hide();	
	}
});


/* 클릭형 툴팁 */
$(document).on('click', '.btn-layer', function(){
	$(this).closest('.tooltip-area').find('.tooltip-layer').show();	
});
$(document).on('click', '.btn-tooltip-close', function(){
	$(this).closest('.tooltip-layer').hide();	
})
/*=======// 탭, 툴팁 ======= */

/*======= 폼 ======= */

/* 디자인셀렉트 */
$(document).on('click', '.button-select', function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on').next('.select-layer').removeClass('on');
	}else{
		$(this).addClass('on').next('.select-layer').addClass('on');	
	}		
});
$('.select-layer button').each(function(){
	$(this).click(function(){
		var targetTag = $(this).closest('.select-area');		
		if(!$(this).hasClass('btnPop')){				
			var txt = $(this).text();		
			targetTag.find('.button-select').text(txt).removeClass('on');	
			$(this).closest('li').addClass('on').siblings().removeClass('on');		
		}
		targetTag.find('.select-layer').removeClass('on');
		targetTag.find('.btnPop').removeClass('on');
		
	});
});	

/* 다른곳 클릭시 셀렉트 닫기 */
$(document).mouseup(function(e){
	var $selBox = $('.select-area');
	if (!$selBox.is(e.target) && $selBox.has(e.target).length === 0){
		$selBox.find('.select-layer').removeClass('on');
		$selBox.find('.btnPop').removeClass('on');
		$selBox.find('.button-select').removeClass('on');
	}
});

/* 라디오 선택시 컨텐츠 영역 노출 : 단독*/
$('.formSingle').each(function(){
	var id = $(this).attr('data-form');
	var name = $(this).attr('name');			
	$('input[name=' + name + ']').change(function(){
		if($(this).closest('.form-list').find('.formSingle').is(':checked')){
			$(this).closest('.form-area').find('.' + id).show();
		}else{
			$(this).closest('.form-area').find('.' + id).hide();
		}
	});
});

/* 라디오 선택시 컨텐츠 영역 노출 : 다수*/
$('.formChange').each(function(){
	var idx = $(this).find('.form-list input[type=radio]:checked').parent('.form-wrap').index();
	$(this).find('.formItem').eq(idx).show();	
	$(this).find('.form-list input[type=radio]').change(function(){		
		var on = $(this).closest('.form-list').find('input[type=radio]:checked').closest('.form-wrap').index();
		$(this).closest('.formChange').find('.formItem').hide().eq(on).show();
	});
});

/*=======// 폼 ======= */

/*======= 테이블 ======= */
/* 테이블 sort버튼 */
$('th .sort').click(function(){
	$(this).toggleClass('on');
});

/* 테이블 오버시 버튼노출 */
$('.layer-box').mouseenter(function(){
	$(this).find('[class^=btn-]').show();
//	$(this).closest('.layer-box').find('.tit').hide();
});
$('.layer-box').mouseleave(function(){
	$(this).find('[class^=btn-]').hide();
//	$(this).closest('.layer-box').find('.tit').show();
});


/* 테이블 제목 클릭시 수정폼 노출 */
$(document).on('click', '.subject .btn-modify, .subject .button-input', function(){
	var targetTd = 	$(this).closest('.subject');
	var inputLen = targetTd.find('input').val().length;
	
//	targetTd.find('.layer-box').hide();
	targetTd.find('input')[0].setSelectionRange(inputLen,inputLen);
	targetTd.addClass('on').find('input').focus();
});
//닫기
$(document).on('click', '.subject .btn-save', function(){
	var targetTd = 	$(this).closest('.subject');
//		targetTd.find('.layer-box').show();
	targetTd.removeClass('on');
});

/* 테이블 체크시 bg 변경 */
$('.board-list td input[type="checkbox"]').each(function(){		
	$(this).change(function(){
		if($(this).is(':checked')){
			$(this).closest('tr').addClass('checked');
		}else{
			$(this).closest('tr').removeClass('checked');
		}
		
	});
});
/*=======// 테이블 ======= */


/*======= 달력 ======= */

/* datepicker */
$('.cal').each(function(){
	$(this).find('input').datepicker({
		dateFormat: "yy-mm-dd", 		  
		showOn: "both",
		buttonImage: "../../images/icon/icon_20_date.png", 
		buttonImageOnly: true, 
		changeMonth: false, 
		changeYear: false, 
		minDate: '-100y',
		nextText: '다음 달', 
		prevText: '이전 달', 
		numberOfMonths:1, 		 
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		showOtherMonths:true,
	});
});
/*=======// 달력 ======= */

/*======= 팩스미리보기 ======= */
/* 슬라이드레이어 */
$('.btnLayer').click(function(){
	var id = $(this).attr('data-label');

	$('.side-content,.side-cont').removeClass('open');

	if($('.side-content[data-target=' + id + ']').hasClass('open')){
		$('.side-content[data-target=' + id + ']').removeClass('open');
		$(this).closest('.faxviewer').removeClass('open');
	}else{
		$('.side-content[data-target=' + id + ']').addClass('open');
		$(this).closest('.faxviewer').addClass('open');
	}
});

$('.side-content .btn-side-close').click(function(){	
	$(this).closest('.side-content').removeClass('open');
	$(this).closest('.faxviewer').removeClass('open');
});

/* 문서리스트 on */
$('.docu-list > div').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
});
/*=======// 슬라이드 레이어 ======= */

	
});


$(window).on('load', function(){
	rdoCheck(); // 라디오,체크박스

/*======= 디자인스크롤 ======= */
	$(".scroll-area").mCustomScrollbar({
		mouseWheelPixels : 500, 
		scrollInertia : 100
	});
	$(".scroll-area").resizable();
/*=======// 디자인스크롤 ======= */

/*======= 레이어팝업 ======= */

	$(document).on('click', '.btnPop', function(){
        layerPop();

		
        $(this).addClass('on');
        $('html').addClass('popOpen');

		//닫히지 않아야할경우 분기
		if(!$(this).closest('.layer-popup').hasClass('noneClose')){
			$(this).closest('.layer-popup').fadeOut(300, function(){
				$(this).removeClass('open');
			});
		}
        
        var name = $(this).attr('layer-name');
        $('.layer-popup[layer-name=' + name + ']').fadeIn(100, function(){
           // $(this).find('.firstTab').focus();
            $(this).addClass('open').closest('.layer-popup').prepend('<div class="dimmed">');;
			layerPop();
        });
		
    });

	/* 팝업닫기 */
    $(document).on('click', '.popClose,.dimmed', function(){
      // popClose();

	  $(this).closest('.layer-popup').removeClass('open').scrollTop(0).fadeOut(300, function(){
		$('.btnPop.on').focus().removeClass('on');
		$(this).closest('.layer-popup').find('.dimmed').remove();
	});	

	//팝업이 하나일경우만 body스크롤 제거
	if( !$(this).closest('.layer-popup').hasClass('scroll')){
		setTimeout(function(){
			$('html').removeClass('popOpen');
		}, 300);
	}


	
    });
	// $(document).on('click', '.dimmed', function(){
	// 	 popClose();
	// });
	// $(document).mouseup(function (e){
	// 	var LayerPopup = $(".popup");
	// 	console.log(LayerPopup.has(e.target).length);
	// 	if(LayerPopup.has(e.target).length === 0){
	// 		LayerPopup.removeClass("open");
	// 		$('.layer-popup').each(function(){
	// 			$(this).removeClass('open').scrollTop(0).fadeOut(300, function(){
	// 				$('.btnPop.on').focus().removeClass('on');
	// 				$('html').removeClass('popOpen');
	// 			});
	// 		});
			
	// 	}		
	// });
/*=======// 레이어팝업 ======= */

});

$(window).resize(function(){
	resQuick(); // 반응형 퀵
	layerPop(); //레이어팝업
});


$(window).scroll(function(){
	
});

/* 라디오,체크박스*/
function rdoCheck(){
    $('input[type=radio].styled, input[type=checkbox].styled,input[type=checkbox].styled2').each(function(){
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

// 레이어팝업 설정
function layerPop(){
    $('.btnPop, .layer-popup').each(function(){ 
       var tit = $(this).attr('title');
        $(this).attr('layer-name', tit).removeAttr('title');
    });

    $('.layer-popup').each(function(){
		var hei = $('.wrapper').outerHeight();		
        var popH = $(this).find('.popup').outerHeight();
        var pdT = (hei - popH) / 2;
        var mgB = $(this).find('.popup').css('margin-bottom');
        var space = mgB.replace(/px/g, '') * 2;

	
        if(hei - space < popH){
            $(this).css({'padding-top':mgB});
        }else{
            $(this).css({'padding-top':pdT});
        }
    });
}

// 레이어팝업 닫기
function popClose(){
   var spd = '300';
    $('.layer-popup').each(function(){
        $(this).removeClass('open').fadeOut(spd, function(){
            $('.btnPop.on').focus().removeClass('on');
            
        });
    });
    setTimeout(function(){
        $('html').removeClass('popOpen');
    }, spd);	

}

	
