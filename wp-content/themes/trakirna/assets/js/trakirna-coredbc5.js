(function($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrapper').length){
			$('.loader-wrapper').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('[data-txStickyHeader]').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('[data-txStickyHeader]');
			var scrollLink = $('.scroll-to-top');

			var HeaderHight = $('[data-txStickyHeader]').height();
			if (windowpos >= HeaderHight + 100 ) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});

		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});

		$('.hamburger').on('click', function(e) {
			$('.about-sidebar').addClass('active');
		});

		$('.about-sidebar .close-button').on('click', function(e) {
			$('.about-sidebar').removeClass('active');
		});

		$('.about-sidebar .gradient-layer').on('click', function(e) {
			$('.about-sidebar').removeClass('active');
		});

		$('.xs-sidebar-group .close-button').on('click', function(e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});

		$('.newsletter-close-btn').on('click', function(e) {
			$('.quickview-popup-area-section').removeClass('active');
		});

	}

	// Menu Aimation
	document.querySelectorAll('.main-menu .navigation > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');


	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		//$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');

			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');

			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });

	}



	//Date Picker
	if($('.datepicker').length){
		$( '.datepicker' ).datepicker();
	}


	function testimonialActive($scope, $) {
		// Testimonial Nav
		var Testimonial_nav = new Swiper(".testimonial__nav", {
			loop: true,
			spaceBetween: 20,
			speed: 500,
			slidesPerView: 3,
			centeredSlides: true,
			// direction: "vertical",
			autoplay: {
				enabled: true,
				delay: 6000
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'991': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'768': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'577': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'0': {
					slidesPerView: 2,
					direction: "horizontal",
				},
			},
		});

		var swiper2 = new Swiper(".testimonial__active", {
			loop: true,
			spaceBetween: 0,
			//Pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			//effect: 'fade',
			autoplay: {
				enabled: true,
				delay: 6000
			},
			slidesPerView: 1,
			thumbs: {
				swiper: Testimonial_nav,
			},
		});



		var slider = new Swiper('.testimonial-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.testimonial-four_next',
				prevEl: '.testimonial-four_prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 1,
				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	function teamActive($scope, $) {
		// Team Nav
		var team__nav = new Swiper(".team__nav", {
			loop: true,
			spaceBetween: 20,
			speed: 500,
			slidesPerView: 3,
			centeredSlides: true,
			// direction: "vertical",
			autoplay: {
				enabled: true,
				delay: 6000
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'991': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'768': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'577': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'0': {
					slidesPerView: 3,
					direction: "horizontal",
				},
			},
		});
		var swiper2 = new Swiper(".team__active", {
			loop: true,
			spaceBetween: 0,
			//Pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			//effect: 'fade',
			autoplay: {
				enabled: true,
				delay: 6000
			},
			slidesPerView: 1,
			thumbs: {
				swiper: team__nav,
			},
		});
	}


	function heroSliderThree($scope, $) {
		// hero sldier nav
		var SliderThree_nav = new Swiper(".slider-three__nav", {
			loop: true,
			spaceBetween: 28,
			speed: 500,
			slidesPerView: 3,
			centeredSlides: true,
			direction: "vertical",
			autoplay: {
				enabled: true,
				delay: 6000
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
					//direction: "horizontal",
				},
				'1200': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'992': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'991': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'768': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'577': {
					slidesPerView: 3,
					direction: "horizontal",
				},
				'0': {
					slidesPerView: 3,
					direction: "horizontal",
				},
			},
		});

		var swiper3 = new Swiper(".slider-three__active", {
			loop: true,
			spaceBetween: 0,
			//Pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			//effect: 'fade',
			autoplay: {
				enabled: true,
				delay: 6000
			},
			slidesPerView: 1,
			thumbs: {
				swiper: SliderThree_nav,
			},
		});
	}

	function movingElement($scope, $) {
		if ($(".animation_mode").length) {
			$('.animation_mode').marquee({
				speed: 50,
				gap: 20,
				delayBeforeStart: 0,
				direction: 'left',
				duplicated: true,
				pauseOnHover: true,
				startVisible:true,
			});
		}
	}




	/*------------------------------------------
        = NEWSLETTER POPUP
    -------------------------------------------*/
    function newsletterPopup() {
        var newsletter = $(".newsletter-popup-area-section");
        var newsletterClose = $(".newsletter-close-btn");

        var test = localStorage.input === 'true'? true: false;
        $(".show-message").prop('checked', test || false);

        var localValue = localStorage.getItem("input");

        //console.log(localValue);

        if(localValue === "true") {
            newsletter.css({
                "display": "none"
            });
        }
        newsletter.addClass("active-newsletter-popup");
        newsletterClose.on("click", function(e) {
            newsletter.removeClass("active-newsletter-popup");
            return false;
        })
        $(".show-message").on('change', function() {
            localStorage.input = $(this).is(':checked');
        });
    }


	// Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");
		splitTitleLines.forEach(splitTextLine => {
		const tl = gsap.timeline({
			scrollTrigger: {
			trigger: splitTextLine,
			start: 'top 90%',
			end: 'bottom 60%',
			scrub: false,
			markers: false,
			toggleActions: 'play none none none'
			}
		});

		const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" })
		tl.from(itemSplitted.lines, { duration: 1, delay: 0.4, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
	});



	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}

	if ($('.main-header .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .main-menu .navigation'));
	}






	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}



	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
			  type: 'foreground',     // background, foreground
			  direction: 'horizontal' // vertical, horizontal
		});
	}





	// Odometer
	function counterActive($scope, $) {
		if ($(".odometer").length) {
			jQuery(".odometer").appear(function (e) {
				var odo = jQuery(".odometer");
				odo.each(function () {
					var countNumber = jQuery(this).attr("data-count");
					jQuery(this).html(countNumber);
				});
			});
		}
	}



	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	//  Animation Fade Left End

	/////////////////////////////////////////////////////
	// CURSOR
	var cursor = $(".cursor"),
	follower = $(".cursor-follower");

	var posX = 0,
		posY = 0;

	var mouseX = 0,
		mouseY = 0;

	TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {
			left: posX - 12,
			top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {
			left: mouseX,
			top: mouseY
			}
		});
	}
	});

	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	//circle
	$(".theme-btn, a").on("mouseenter", function() {
		cursor.addClass("active");
		follower.addClass("active");
	});
	$(".theme-btn, a").on("mouseleave", function() {
		cursor.removeClass("active");
		follower.removeClass("active");
	});
	// CURSOR End




	$(document).ready(function() {
		var st = $(".tx-split-text");
        if(st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function(index, el) {
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });
            gsap.set(el, { perspective: 400 });

            if( $(el).hasClass('split-in-fade') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    ease: "Back.easeOut",
                });
            }
            if( $(el).hasClass('split-in-right') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if( $(el).hasClass('split-in-left') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-up') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-down') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-rotate') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    rotateX: "50deg",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-scale') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    scale: "0.5",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    // toggleActions: "restart pause resume reverse",
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.02,
            });
        });
	});



	// Main Slider
	function heroSliderOne($scope, $) {
		var slider = new Swiper('.main-slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			effect: 'fade',
			loop: true,
			speed: 1200,
			navigation: {
				nextEl: '.main-slider-next',
				prevEl: '.main-slider-prev',
				clickable: true,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			autoplay: {
				enabled: true,
				delay: 6000
			},
		});
	}

	// Main Slider
	function heroSliderTwo($scope, $) {
		var slider = new Swiper('.main-slider_two', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.main-slider_two-next',
				prevEl: '.main-slider_two-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".main-slider_two-pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 1,

				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	// Single Item Slider
	var slider = new Swiper('.single-item-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// Case Carousel
	function caseStudyActive($scope, $) {
		var slider = new Swiper('.case-carousel', {
			slidesPerView: 4,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}




	// Services Carousel
	function serviceSliderActive($scope, $) {
		var slider = new Swiper('.services_carousel', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.service-three-slider-next',
				prevEl: '.service-three-slider-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 2,
				},
				'1200': {
					slidesPerView: 2,
				},
				'992': {
					slidesPerView: 2,
				},
				'990': {
					slidesPerView: 2,
				},
				'850': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	// Team Carousel
	function teamSliderTwoActive($scope, $) {
		var slider = new Swiper('.team-carousel', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.team-three-slider-next',
				prevEl: '.team-three-slider-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".team-three-pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'990': {
					slidesPerView: 2,
				},
				'850': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	// News Carousel
	function postSliderActive($scope, $) {
		var slider = new Swiper('.news-carousel', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			slidesPerView: "auto",
			// Navigation arrows
			navigation: {
				nextEl: '.news-carousel-slider-next',
				prevEl: '.news-carousel-slider-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".team-three-pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 1,
				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'990': {
					slidesPerView: 1,
				},
				'850': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}



	//Progress Bar
	function progressActive($scope, $) {
		if($('.progress-line').length){
			$('.progress-line').appear(function(){
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width',percent+'%');
			},{accY: 0});
		}
	}




	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}



	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}



	// Testimonial Section Four Carousel
	if($('.shop-detail').length){
		var thumbsCarousel = new Swiper('.shop-detail .thumbs-carousel', {
	      spaceBetween: 15,
	      slidesPerView: 4,
	      //direction: 'vertical',
	      breakpoints: {
		      320: {
	     		  //direction: 'horizontal',
			      slidesPerView: 3,
		      },
		      640: {
	     		  //direction: 'horizontal',
			      slidesPerView: 4,
		      } ,
		      1023: {
			      slidesPerView: 4,
		      }

		   }
	    });

	    var contentCarousel = new Swiper('.shop-detail .content-carousel', {
	      spaceBetween: 0,
	      loop:true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      thumbs: {
	        swiper: thumbsCarousel
	      },
	    });
	}



	//Jquery Spinner / Quantity Spinner
	if($('.qty-spinner').length){
		$("input.qty-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}



	//Event Countdown Timer
	if($('.time-countdown').length){
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}



	// Masonary
	function projectGridMasonry($scope, $) {
		function enableMasonry() {
			if($('.masonry-items-container').length){

				var winDow = $(window);
				// Needed variables
				var $container=$('.masonry-items-container');

				$container.isotope({
					itemSelector: '.masonry-item',
					 masonry: {
						columnWidth : '.masonry-item.col-lg-4'
					 },
					animationOptions:{
						duration:500,
						easing:'linear'
					}
				});

				winDow.bind('resize', function(){

					$container.isotope({
						itemSelector: '.masonry-item',
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				});
			}
		}

		enableMasonry();
	}





	// Masonary
	function enableMasonryTwo() {
		if($('.masonry-items-container_two').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container_two');

			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-3'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});

			winDow.bind('resize', function(){

				$container.isotope({
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}

	enableMasonryTwo();



	//Tabs Box
	function tabActive($scope, $) {
		if($('.tabs-box').length){
			$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
				e.preventDefault();
				var target = $($(this).attr('data-tab'));

				if ($(target).is(':visible')){
					return false;
				}else{
					target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
					$(this).addClass('active-btn');
					target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
					target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
					$(target).fadeIn(300);
					$(target).addClass('active-tab');
				}
			});
		}
	}



	// LightBox Image
	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}



	// LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}



	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}



	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);

		});
	}



	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	// active nice select
	if($('select').length){
		$('select').niceSelect();
	}

	var txPostGallery = new Swiper("[data-txPostGallery]", {
		spaceBetween: 0,
		slidesPerView: 1,
		effect: "fade",
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			clickable: true,
		},
		autoplay: {
			enabled: true,
			delay: 6000,
		},
	});


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
	});

	function background() {
		var img = $("[data-background]");
		img.css("background-image", function () {
			var bg = "url(" + $(this).data("background") + ")";

			if ($(this).data("background")) {
				return bg;
			} else {
				return false;
			}
		});
	}
	background();

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
		enableMasonryTwo();

		// Newsletter PoPup
		if($(".newsletter-popup-area-section").length) {
			setTimeout(function() {
				newsletterPopup();
			},"2000");
		}
		if($(".cookies-area").length) {
			cookiesClose();
		}
	});

	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/hero_slider_one.default', heroSliderOne);
		elementorFrontend.hooks.addAction('frontend/element_ready/hero_slider_two.default', heroSliderTwo);
		elementorFrontend.hooks.addAction('frontend/element_ready/hero_slider_three.default', heroSliderThree);
		elementorFrontend.hooks.addAction('frontend/element_ready/hero_slider_four.default', heroSliderTwo);
		elementorFrontend.hooks.addAction('frontend/element_ready/explore.default', counterActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/trakirna_counter.default', counterActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/image_box.default', counterActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/trakirna_testimonial.default', testimonialActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/case_study.default', caseStudyActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/trakirna_team.default', teamActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/team_slider_two.default', teamSliderTwoActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/service_slider.default', serviceSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/project_grid.default', projectGridMasonry);
		elementorFrontend.hooks.addAction('frontend/element_ready/post_grid.default', postSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/moving_element.default', movingElement);
		elementorFrontend.hooks.addAction('frontend/element_ready/trakirna_progress.default', progressActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/pricing_tab.default', tabActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/service_tab.default', tabActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/quote_form_tab.default', tabActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/quote_form_tab_two.default', tabActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/quote_form_tab_three.default', tabActive);
	});

})(jQuery);
