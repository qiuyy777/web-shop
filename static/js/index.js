$(window).ready(function(){
	countDownTime();
	autoScroll();
	bottomScroll();

	// 自动轮播广告
	function autoScroll(){ 

		var imgBox = $(".main-banner");
		var arrow = $(".bn-arrow");
		var imgLiArr = $(".bn-imgs>li");
		var scrollIndex = $(".main-banner .scroll-index>li");

	    var num = 0;
	    var timer=null;
	    timer = setInterval(autoPlay,2000);
		// 点击左箭头往左边轮播
		arrow.children(".icon-left").click(function(){
			num--;
			if(num<0){
				num = imgLiArr.length-1;
			}
			fade();

		})
		// 点击右箭头往右轮播
		arrow.children(".icon-right").click(function(){
			autoPlay();
		})
		// 鼠标离开轮播图，自动轮播
		imgBox.mouseenter(function(){
			clearInterval(timer);
		});
	    // 鼠标离开轮播图，自动轮播
		imgBox.mouseleave(function(){
			 timer = setInterval(autoPlay,2000);
		});
	   var scrollWidth = imgLiArr.children("li").eq(0).width();

		// 添加轮播图页面转换css效果
		function fade(){
			imgLiArr.eq(num).addClass("banner-show").siblings().removeClass("banner-show");
			scrollIndex.eq(num).addClass("current").siblings().removeClass("current");
		}

		// 自动往右播放计数
		function autoPlay(){
			num++;
			if(num > imgLiArr.length-1){
				num = 0;
			};
			fade();
		}
	}

// 页面主体中左右小箭头控制滑动
	$(".subject .icon-left").click(function(){
		var visibel = $(this).closest(".subject").parent().find(".scroll-wrap");
		var scrollWidth = visibel.outerWidth();
		visibel.find("ul").animate({"left":0},1000);
		$(this).addClass("arrow-disable").siblings().removeClass("arrow-disable");
	})

	$(".subject .icon-right").click(function(){
		var visibel = $(this).closest(".subject").parent().find(".scroll-wrap");
		var scrollWidth = visibel.outerWidth();
		visibel.find("ul").animate({"left":-scrollWidth-15},1000);
		$(this).addClass("arrow-disable").siblings().removeClass("arrow-disable");

	})


// 页面主体中tab栏目切换
	$(".main-detail .tab-title li").mouseenter(function(){
		$(this).closest(".main-detail").find(".tab").eq($(this).index()).addClass("show").siblings("ul").removeClass("show");
		$(this).addClass("tab-active").siblings().removeClass("tab-active");
	});	


// 内容栏 滚动切换动画
	function bottomScroll() {
		 var stepWidth = $(".small-scroll").children("li").outerWidth();
		 var indexS = 0;
		 $(".content-scroll .arrow .icon-left").click(function(){ 	
		 	 indexS--;
		 	 if(indexS < 0){
		 	 	indexS=0;
		 	 }
		 	var offsetLeft = $(".small-scroll").css("left");
		 	$(this).parent().siblings(".small-scroll").animate({"left":-stepWidth*indexS});
		 	$(this).parent().siblings(".scroll-index").children("li").eq(indexS).addClass("dot-active").siblings().removeClass("dot-active");

		 });
		$(".content-scroll .arrow .icon-right").click(function(){ 
			console.log($(this).parent().siblings(".small-scroll"));
		 	 indexS++;
		 	 if(indexS > 2){
		 	 	indexS = 2;
		 	 }
		 	$(this).parent().siblings(".scroll-index").children("li").eq(indexS).addClass("dot-active").siblings().removeClass("dot-active");
		 	$(this).parent().siblings(".small-scroll").animate({"left":-stepWidth*indexS},200);
		 });

	}

	//倒计时

	function countDownTime();() {
		let result = '';
		let deadline = 22;
		setInterval(() => {

			let now = Date.now();

		    const ten = new Date();
		    ten.setHours(deadline);
		    ten.setMinutes(0);
		    ten.setSeconds(0);

		    if(new Date(now).getHours() > deadline) {
		        ten.setDate(new Date(now).getDate() + 1);
		    }
		    
		    const interval = Math.ceil(ten.getTime() - new Date(now).getTime()) / 1000;
		    const hour = Math.floor(interval / 3600);
		    const minutes = Math.floor((interval % 3600) / 60);
		    const second = Math.floor(interval % 60);

				function formatTime(t){
					if(t < 10){
						return t = '0'+ t.toString()
					}else{
						return t.toString()
					}
				}
				$('.left-time div:eq(0)').text(formatTime(hour));
				$('.left-time div:eq(2)').text(formatTime(minutes));
				$('.left-time div:eq(4)').text(formatTime(second));

			},1000)
	}
// 点击箭头回到到顶部
	$(window).scroll(function(){
		var docScrollTop = $(document).scrollTop();
		if(docScrollTop>500){
			$(".scroll-top").fadeIn();
			$(".scroll-top").click(function(){
				$(document).scrollTop(0);
			});
		}else{
			$(".scroll-top").fadeOut();
		}
	})


});