$(document).ready(function(){
	resQuick(); // 반응형 퀵
	loding(); //로딩바
	initSwiper();
	fixedHeader();

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
	if(!$(this).closest('.tab-item').hasClass('on')){
		$(this).closest('.tab-item').addClass('on').siblings('.tab-item').removeClass('on');
		$(this).closest('.tab-lst').next('.tab-conts').children('.tab-cont').hide().removeClass('on').eq(idx).fadeIn(200).addClass('on');
	}
});

/* 오버형 툴팁 */
$('.tooltip-area').mouseenter(function(){
	if(!$(this).hasClass('click')){
		$(this).find('.tooltip-layer').show();
	
		$('select').blur(); 
	}
	
});
$('.tooltip-area').mouseleave(function(){
	if(!$(this).hasClass('click')){
		$(this).find('.tooltip-layer').hide();
	}	
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

/*======= top ======= */
$('.qlnks.top').click(function(){
	$('html, body').animate({scrollTop: '0'}, 680);
});
/*=======// top ======= */

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

/* 인풋 파일 */
$(".file").each(function(){
	$(this).on('change',function(){
		console.log('change');
		var fileName = $(this).val();
		console.log(fileName);
		$(this).closest('.file-box').find('.upload-name').val(fileName);
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
	if(!$(this).hasClass('block')){
		$(this).find('[class^=btn-]').show();
	}

});
$('.layer-box').mouseleave(function(){
	if(!$(this).hasClass('block')){
		$(this).find('[class^=btn-]').hide();
	}

});


/* 테이블 제목 클릭시 수정폼 노출 */
$(document).on('click', '.subject .btn-modify, .subject .button-input', function(){
	var targetTd = 	$(this).closest('.subject');
	var inputLen = targetTd.find('input').val().length;
	targetTd.find('input')[0].setSelectionRange(inputLen,inputLen);
	targetTd.addClass('on').find('input').focus();
});
//닫기
$(document).on('click', '.subject .btn-save', function(){
	var targetTd = 	$(this).closest('.subject');
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
	 //경로 변경시
	if($(this).closest('.calendar-area').hasClass('src')){	
		$('img.ui-datepicker-trigger').attr('src' , '../../../images/icon/icon_20_date.png');
	}
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
	if(!$(this).closest('.layer-popup').hasClass('scroll')){
		setTimeout(function(){
			$('html').removeClass('popOpen');
		}, 300);
	}


	
    });

/*=======// 레이어팝업 ======= */

/*======= 요금안내 탭 활성화 ======= */

	if (location.hash == "#tabs-3"){
		$(window).scrollTop(0);
		$('.tab-lst').find('.tab-item').eq(2).addClass('tab-item on').siblings().removeClass('on');         
		$('.tab-conts').find('#tabs-3').addClass('on').siblings().removeClass('on');    
	} 

/*=======// 요금안내 탭 활성화 ======= */

});

$(window).resize(function(){
	resQuick(); // 반응형 퀵
	layerPop(); //레이어팝업

	ww = $(window).width();
	initSwiper();
});

$(window).scroll(function(){
	fixedHeader();
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

		console.log(hei);
	
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

	
//윈도우팝업
function openWindowPop(url, name, options){ 
    window.open(url, name, options);
}


/*======= 로딩바 ======= */
var cSpeed=9;
var cWidth=64;
var cHeight=64;
var cTotalFrames=8;
var cFrameWidth=64;
var cImageSrc='../../images/layout/sprites.gif';

var cImageTimeout=false;
var cIndex=0;
var cXpos=0;
var cPreloaderTimeout=false;
var SECONDS_BETWEEN_FRAMES=0;

function startAnimation(){	
	document.getElementById('loaderImage').style.backgroundImage='url('+cImageSrc+')';
	document.getElementById('loaderImage').style.width=cWidth+'px';
	document.getElementById('loaderImage').style.height=cHeight+'px';
	
	//FPS = Math.round(100/(maxSpeed+2-speed));
	FPS = Math.round(100/cSpeed);
	SECONDS_BETWEEN_FRAMES = 1 / FPS;
	
	cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES/1000);
}


function continueAnimation(){
	
	cXpos += cFrameWidth;
	//increase the index so we know which frame of our animation we are currently on
	cIndex += 1;
		
	//if our cIndex is higher than our total number of frames, we're at the end and should restart
	if (cIndex >= cTotalFrames) {
		cXpos =0;
		cIndex=0;
	}
	
	if(document.getElementById('loaderImage'))
		document.getElementById('loaderImage').style.backgroundPosition=(-cXpos)+'px 0';
	
	cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES*1000);
}

function stopAnimation(){//stops animation
	clearTimeout(cPreloaderTimeout);
	cPreloaderTimeout=false;
}

function imageLoader(s, fun)//Pre-loads the sprites image
{
	clearTimeout(cImageTimeout);
	cImageTimeout=0;
	genImage = new Image();
	genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
	genImage.onerror=new Function('alert(\'Could not load the image\')');
	genImage.src=s;
}

function loding(){
	$('.loding').each(function(){
		//The following code starts the animation
		new imageLoader(cImageSrc, 'startAnimation()');
	});
}

/*=======// 로딩바 ======= */


/*======= 서비스소개 모바일 슬라이드 ======= */
var ww = $(window).width();
var mySwiper = undefined;
function initSwiper() {

  if (ww < 768 && mySwiper == undefined) {
	$('.info-slide').each(function(){
		mySwiper = new Swiper(".info-slide", {
			pagination: {
				el: ".swiper-pagination",
			  },
		});
	});
  
  } else if (ww >= 768 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}
/*=======// 서비스소개 모바일 슬라이드 ======= */


function fixedHeader(){
	var winH = $(this).scrollTop();
	$('.wrapper.service .header').each(function(){
		if(0 < winH) {
		$(this).addClass("fixed");
		} else {
			$(this).removeClass("fixed");
		}
	});
}

 
 