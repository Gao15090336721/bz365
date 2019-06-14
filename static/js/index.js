$(function(){
		$(".menu li:nth-child(1)").addClass("active");
	})

    $(function(){
        $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>80 ){
            $("header").addClass('headerBox');
            $(".home-logo").addClass('home-logo2')
        }else{
            $("header").removeClass('headerBox');
            $(".home-logo").removeClass('home-logo2')
        }
        });
    });

    $(function () {
        $("#hoverBtn").hover(function () {
            $(".h-bg").addClass("c-active animated fadeIn");
            $(".h-bg").show();
        }, function () {
            $(".h-bg").removeClass("c-active animated fadeIn");
            $(".h-bg").hide();
        })

        $("#hoverBtn2").hover(function () {
            $(".h-bg2").addClass("c-active animated fadeIn");
            $(".h-bg2").show();
        }, function () {
            $(".h-bg2").removeClass("c-active animated fadeIn");
            $(".h-bg2").hide();
        })

        $("#hoverBtn3").hover(function () {
            $(".h-bg3").addClass("c-active animated fadeIn");
            $(".h-bg3").show();
        }, function () {
            $(".h-bg3").removeClass("c-active animated fadeIn");
            $(".h-bg3").hide();
        })
    });

	
	
	
    var swiper = new Swiper('.swiper-container', {
        pagination: {
        el: '.swiper-pagination',
      },
        loop:true,
        autoplay: {
        delay: 4000,
      },
        /*navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },*/
    });

	$(".about").hover(function(){
		    $(".submenu").show();
	}, function () {
            $(".submenu").hide();
        })
	
	$(".downApp").hover(function(){
		    $(".ewmBox").show();
	}, function () {
            $(".ewmBox").hide();
        })
	
	$(".about1").hover(function(){
		    $(".submenu1").show();
	}, function () {
            $(".submenu1").hide();
        })
