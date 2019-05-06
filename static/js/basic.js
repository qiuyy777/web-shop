$(window).ready(function(){
// 登录模态框
	$("#login").click(function(){	
		$("#mask").show();
	});
	$(".close").click(function(){
		$("#mask").hide();
	})


   //顶部共同导航下拉切换
    var shopCataLi = $(".shop-cata").children("li");
    shopCataLi.on("mouseenter",function(){
    	if($(this).hasClass("menu-dropdown")){
    		$(".nav-header-more").eq($(this).index()).show().siblings().hide();
    		$(".fluid-menu").slideDown();
    	}else{
    		$(".fluid-menu").slideUp();
    	}
    });
    $(".nav-header-more").mouseleave(function(){
    	$(".fluid-menu").slideUp();
    })
    $(".nav-site").mouseenter(function(){
    	    $(".fluid-menu").slideUp();
    });

	//购物车下拉样式
	$(".user-cart").mouseenter(function(){
		$(".cart-dropdown").slideDown();
		if($(".cart-items").children("li").length>4){
			$(".cart-items").css({"height":"440px","overflow-y":"scroll"});
		}else{
			$(".cart-items").css({"hight":"auto"});
		}
	});
	$(".user-cart").mouseleave(function(){
		$(".cart-dropdown").slideUp();
	});


 	// 全部商品分类导航 显示右侧菜单
	MenuMoreShow();
	
	function MenuMoreShow(){
		var  menuItems = $(".menu-items");
		var  menuMore = $(".menu-more");
		menuItems.mouseenter(function(){
			menuMore.css("display","none");
		  	var uls = menuMore.eq($(this).index()).children("ul");
		  	var menuMoreWidth = uls.length*uls.outerWidth();
		  	if(uls.length ===4){
		  		menuMore.eq($(this).index()).addClass("menu-more-shadow");
		  	}else{
		  		menuMore.eq($(this).index()).removeClass("menu-more-shadow");
		  	}
			menuMore.eq($(this).index()).css({"display":"block","width":menuMoreWidth});
		});
		menuItems.mouseleave(function(){
			menuMore.css({"display":"none"});
		})

	}

});