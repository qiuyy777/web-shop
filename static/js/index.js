$(window).ready(function(){

	// 自动轮播广告
	var imgBox = $(".main-banner");
	var imgLi = $(".bn-imgs>li");
	var arrowBox = $(".bn-arrow");
	var indexArr = $(".main-banner .scroll-index>li");
	autoScroll(imgBox,arrowBox,imgLi,indexArr);
	function autoScroll(imgBox,arrow,imgliArr,scrollIndex){ 
	    var num = 0;
	    var timer=null;
	    timer = setInterval(autoPlay,2000);
		// 点击左箭头往左边轮播
		arrow.children(".icon-left").click(function(){
			num--;
			if(num<0){
				num = imgliArr.length-1;
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
	   var scrollWidth = imgliArr.children("li").eq(0).width();

		// 添加轮播图页面转换css效果
		function fade(){
			imgliArr.eq(num).addClass("banner-show").siblings().removeClass("banner-show");
			scrollIndex.eq(num).addClass("current").siblings().removeClass("current");
		}

		// 自动往右播放计数
		function autoPlay(){
			num++;
			if(num > imgliArr.length-1){
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