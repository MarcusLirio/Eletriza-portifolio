
				jQuery(document).ready(function(){
					
					if (window.self===window.top){
						if (jQuery('body').is('.wp-admin.compose-mode')){
							return;
						}
					}
					
					var who = jQuery('#testimonials-slider-1 ul.slides');
				
					var opts = ['slide','horizontal','no','3500','1500','no','yes','yes','dark','1','1','1','1'];
					if (opts[2] == 'yes') opts[2] = true; else opts[2] = false;
					if (opts[5] == 'yes') {
						opts[5] = true;
					} else opts[5] = false;
					if (opts[6] == 'yes') {
						opts[6] = true;
					} else opts[6] = false;
					if (opts[7] == 'yes') opts[7] = true; else opts[7] = false;
					if (opts[0] == 'fade') opts[0] = true; else opts[0] = false;
				
					who.slick({
						fade: opts[0],
						dots: opts[6], 
						autoplay: opts[2], 
						autoplaySpeed:opts[3], speed:opts[4], infinite: true,
						arrows: opts[5],
						adaptiveHeight:true,
						nextArrow:'<button type="button" class="slick-next default"><i class="ultsl-arrow-right6"></i></button>',
						prevArrow:'<button type="button" class="slick-prev default"><i class="ultsl-arrow-left6"></i></button>',
						swipe:true,
						draggable:true,
						touchMove:true,
						slidesToScroll: parseInt(opts[9],10),
						slidesToShow: parseInt(opts[9],10),
						responsive:[{
							breakpoint: 1024,
							settings:{
								slidesToShow: parseInt(opts[10],10),
								slidesToScroll: parseInt(opts[10],10)
							}
						},{
							breakpoint: 768,
							settings:{
								slidesToShow: parseInt(opts[11],10),
								slidesToScroll: parseInt(opts[11],10)
							}
						},{
							breakpoint: 480,
							settings:{
								slidesToShow: parseInt(opts[12],10),
								slidesToScroll: parseInt(opts[12],10)
							}
						}],
						pauseOnHover:opts[7],
						pauseOnDotsHover:opts[7],
						customPaging:function(slider,i){
							return'<i type="button" class="ultsl-record" data-role="none"></i>';
						}
					});
				});
		