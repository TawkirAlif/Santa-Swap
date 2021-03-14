// svg icons support ie11
(function(){
    svg4everybody();
}());

// carousel arrows
const navArrows = [`
    <svg class="icon icon-arrow-prev">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>
    </svg>`,
    `<svg class="icon icon-arrow-next">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>
    </svg>`];

// owl carousel
$(document).ready(function(){
	const slider =  $('.js-slider');
	slider.owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 700
	});

	const sliderCategories =  $('.js-slider-categories');
	sliderCategories.owlCarousel({
		items: 5,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 700,
		responsive: {
			0:{
				items: 1,
				autoHeight: true
			},
			768: {
			    items: 3
			},
		    1024: {
		        items: 4
		    },
		    1340: {
		        items: 5
		    }
		}
	});

});

// toggle sidebar
(function(){
    const toggle = $('.sidebar__toggle'),
    	  page = $('.page'),
    	  sidebar = $('.sidebar'),
    	  headerToggle = $('.header__toggle'),
    	  logo = $('.header__logo'),
    	  close = $('.sidebar__close');
   	toggle.on('click', function(){
   		sidebar.toggleClass('active');
   		page.toggleClass('wide');
   		setTimeout(function(){
   			$('.owl-carousel').trigger('refresh.owl.carousel');
   		}, 200);
   	});

   	headerToggle.on('click', function(){
   		sidebar.addClass('active');
   		page.addClass('toggle');
   		logo.addClass('hidden');
   		$('body').addClass('no-scroll');
   		$('html').addClass('no-scroll');
   	});

   	close.on('click', function(){
   		sidebar.removeClass('active');
   		page.removeClass('toggle');
   		logo.removeClass('hidden');
   		$('body').removeClass('no-scroll');
   		$('html').removeClass('no-scroll');
   	});

}());

// header
(function(){
    const header = $('.header'),
		  items = header.find('.header__item');

	items.each(function(){
		let item = $(this),
			head = item.find('.header__head'),
			body = item.find('.header__body');

		head.on('click', function(e){
			e.stopPropagation();

			if(!item.hasClass('active')){
				items.removeClass('active');
				item.addClass('active');
			}else{
				items.removeClass('active');
			}
		});

		body.on('click', function(e){
			e.stopPropagation();
		});

		$('body').on('click', function(){
			items.removeClass('active');
		});
	});
}());

$(document).ready(function() {
	$('.select').niceSelect();
});

// dropdown
(function() {
    const dropdowns = $('.dropdown');
    dropdowns.each(function(){
        let dropdown = $(this);
            head = dropdown.find('.dropdown__head'),
            body = dropdown.find('.dropdown__body');
        head.on('click', function(e){
            e.stopPropagation();
            e.preventDefault();
            if(!dropdown.hasClass('active')){
                dropdowns.removeClass('active');
                dropdown.addClass('active');
            }else{
                dropdowns.removeClass('active');
            }
        });
        body.on('click', function(e){
            e.stopPropagation();
        });
        $('body').on('click', function(){
            dropdowns.removeClass('active');
        });
    });
}());

// field
(function(){
    $('.js-field-input').focusin(function(){
        $(this).parents('.js-field').addClass('active');
    });
    $('.js-field-input').focusout(function(){
        const _this = $(this),
              field = _this.parents('.js-field'),
              value = _this.val();
        if (value == '') {
            field.removeClass('active');
        }
    });
}());

// activities stage
$('.activity__row').on('click', function(){
	$('.activity__table').addClass('small');
	$('.activity__sidebar').addClass('visible');
});
$('.activity__close').on('click', function(){
	$('.activity__table').removeClass('small');
	$('.activity__sidebar').removeClass('visible');
});

// magnificPopup
(function(){
	var link = $('.js-popup-open');
	link.magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		removalDelay: 200,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});
}());

// tabs
(function () {
    let tabs = $('.js-tabs');
    tabs.each(function () {
        let thisTabs = $(this),
            nav = thisTabs.find('.js-tabs-link'),
            option = thisTabs.find('.option'),
            item = thisTabs.find('.js-tabs-item');
        nav.on('click', function () {
            let thisNav = $(this),
                indexNav = thisNav.index();
            nav.removeClass('active');
            thisNav.addClass('active');
            item.hide();
            item.eq(indexNav).fadeIn();
            return false;
        });

    });

    $(document).ready(function(){
    	let option = $('.js-tabs-select .option');

    	option.on('click', function () {
    	    let thisOption = $(this),
    	        indexOption = thisOption.index();
    	    console.log(indexOption);
    	    $('.js-tabs-item').hide();
    	    $('.js-tabs-item').eq(indexOption).fadeIn();
    	});
    });
})();

// favorite for table
$('.favorite').on('click', function(){
	$(this).toggleClass('active');
});

// wallets stage
$('.balances__row').on('click', function(){
	$('.wallets__wrapper').addClass('small');
	$('.balances__table').addClass('small');
	$('.wallets__sidebar').addClass('visible');
	$('.wallets__body').show();
	$('.operations__form').hide();
	$('.operations__wrap').hide();
});
$('.wallets__close').on('click', function(){
	$('.wallets__wrapper').removeClass('small');
	$('.balances__table').removeClass('small');
	$('.wallets__sidebar').removeClass('visible');
});
$('.wallets__btn').on('click', function(){
	$('.wallets__wrapper').addClass('small');
	$('.balances__table').addClass('small');
	$('.wallets__sidebar').addClass('visible');
	$('.wallets__body').hide();
});
$('.wallets__btn:first-child, .card__btn:first-child').on('click', function(){
	$('.wallets__body').hide();
	$('.operations__form').show();
	$('.operations__wrap').hide();
});
$('.wallets__btn:nth-child(2), .card__btn:nth-child(2)').on('click', function(){
	$('.wallets__body').hide();
	$('.operations__wrap').show();
	$('.operations__form').hide();
});

// price toggle menu
$('.details__burger').on('click', function(){
	$(this).parents('.details__company').toggleClass('active');
});

// exchange toggle menu
$('.exchange__head').on('click', function(){
	$(this).parents('.exchange__company').toggleClass('active');
});

$(document).ready(function(){
	if (window.matchMedia("(max-width: 767px)").matches) {
	  const number = $('.market__row:not(.market__row_head) .market__cell:not(:first-child)');
	  number.each(function(){
	  	const numberValue = Math.round((+($(this).text()))*1000)/1000;
	  	$(this).text(numberValue);
	  });
	}
});

// control sections for mobile version page Exchange
(function(){
	const link = $('.exchange__menu .exchange__link'),
		  item = $('.exchange__top, .market__tabs, .market__transactions, .orders, .actions');
	link.each(function(){
		let thisLink = $(this),
			thisLinkAttr = thisLink.data('class'),
			top = $('body').offset().top;
		thisLink.on('click', function(e){
			e.preventDefault();
			link.removeClass('active');
			thisLink.addClass('active');
			item.hide();
			$(thisLinkAttr).show();
			$('body,html').animate({scrollTop: top}, 500);
		})
	});
}());

// toggle body theme
(function () {
    const switchTheme = $('.js-switch-theme'),
          body = $('body');

    switchTheme.on('change', function(){
        if (!body.hasClass('dark')){
            body.addClass('dark');
            localStorage.setItem('darkMode', "on");
        }else{
            body.removeClass('dark');
            localStorage.setItem('darkMode', "off");
        }
    });
}());