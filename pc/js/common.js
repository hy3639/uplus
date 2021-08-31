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

	/* 상단 공지 슬라이드 */
	var swiper = new Swiper(".cont-top .swiper-container", {
        direction: "vertical",
		  // Navigation arrows
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},       
    });




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

	/* 테이블 오버시 버튼노출 */
	$('.layer-box').mouseenter(function(){
		$(this).find('button').show();
	});
	$('.layer-box').mouseleave(function(){
		$(this).find('button').hide();
	});


	/* datepicker */
	$('.cal').each(function(){
		$(this).find('input').datepicker({
		   dateFormat: "yy-mm-dd", 
		  // showMonthAfterYear: true ,
		  // monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']

		  showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다. 
		  buttonImage: "../images/icon/icon_20_date.png", 
		  buttonImageOnly: true, // 버튼에 있는 이미지만 표시한다. 
		  changeMonth: false, // 월을 바꿀수 있는 셀렉트 박스를 표시한다. 
		  changeYear: false, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다. 
		  minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다. 
		  nextText: '다음 달', // next 아이콘의 툴팁.
		   prevText: '이전 달', // prev 아이콘의 툴팁. 
		  numberOfMonths:1, // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다. 
		  //stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 
		  //yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
		  // showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 
		  // closeText: '닫기', // 닫기 버튼 패널 
		  
		   showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
		   dayNamesMin: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
		   monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
		   yearSuffix: '.',
		  showOtherMonths:true,
	  
		  

		});
	});

	/* 라디오 선택시 컨텐츠 영역 노출 : 단독*/
	$('.formSingle').each(function(){
		var id = $(this).attr('data-form');
		var name = $(this).attr('name');			
		$('input[name=' + name + ']').change(function(){
			if($(this).closest('tr').find('.formSingle').is(':checked')){
				$(this).closest('table').find('tr.' + id).show();
			}else{
				$(this).closest('table').find('tr.' + id).hide();
			}
		});
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

	
	
