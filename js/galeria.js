$(function(){

	var maxIndex = Math.ceil($('.portfolio__mini__img__wraper').length/3) - 1;
	var curIndex = 0;

	initSlider();
	navegateSlider();
	clickSlider();

	function initSlider(){
		var amt = $('.portfolio__mini__img__wraper').length * 16.6;
		var elScroll = $('.portfolio__nav__galeria__wraper');
		var elSingle = $('.portfolio__mini__img__wraper');

		elScroll.css('width',amt+'%');
		elSingle.css('width',16.6*(100/amt)+'%');
	}

	function navegateSlider(){
		$('.arrow__right').click(function(){
			if(curIndex < maxIndex){
				curIndex++;
				var elOff = $('.portfolio__mini__img__wraper').eq(curIndex*6).offset().left - $('.portfolio__nav__galeria__wraper').offset().left;
				$('.nav__galeria').animate({'scrollLeft':elOff+'px'});
			}else{
				//console.log('chegamos até o final')
			}
		});

		$('.arrow__left').click(function(){
			if(curIndex > 0){
				curIndex--;
				var elOff = $('.portfolio__mini__img__wraper').eq(curIndex*6).offset().left - $('.portfolio__nav__galeria__wraper').offset().left;
				$('.nav__galeria').animate({'scrollLeft':elOff+'px'});
			}else{
				//console.log('chegamos até o final')
			}
		});
	}

	function clickSlider(){
		$('.portfolio__mini__img__wraper').click(function(){
			$('.portfolio__mini__img__wraper').css('background-color','transparent');
			$(this).css('background-color','rgb(210,210,210)');
			var img = $(this).children().css('background-image');
			$('.portfolio__img__destaque').css('background-image',img);
		});

		$('.portfolio__mini__img__wraper').eq(0).click();
	}


})