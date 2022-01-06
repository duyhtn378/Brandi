$(document).ready(function () {
    $('.single-item').slick({
        dots: true,
        appendDots: $('.dot-location'),
        infinite: true,
        autoplay: true,
    })
    $('.counter').countUp({
        'time': 3000,
        'delay': 10
    });
    AOS.init({
        easing: 'ease-in-quad',
    });
    $(document).scroll(function() {
        var headerEle = $(".bandi-header-container").outerHeight();
        var featrueEle = $(".features-container").outerHeight();
        var workEle = $(".works-container").outerHeight();
        var motEle = $(".mot-container").outerHeight();
        var factEle = $(".facts-container").outerHeight();
        var discussEle = $(".discuss-container").outerHeight();
        if($(window).scrollTop() > (headerEle + featrueEle + workEle*0.4 - 70) && $(window).scrollTop() < (headerEle + featrueEle + workEle) || $(window).scrollTop() > (headerEle + featrueEle + workEle + motEle - 70) && $(window).scrollTop() < (headerEle + featrueEle + workEle + motEle + factEle)){

         $(".bandi-header-decor").css("background-color","white");
         $(".bandi-header-decor").css("opacity","10");
         $(".bandi-header-navbar").css("color","black");
         $(".header-brand-list").css("color","black");

        }else {

         $(".bandi-header-decor").css("background-color","rgb(16, 22, 54)");
         $(".bandi-header-decor").css("opacity","0.2");
         $(".bandi-header-navbar").css("color","white");
         $(".header-brand-list").css("color","white");
        }
    });
    $("#btn-all").on("click", function() {
        onBtnAllClick();
    })
    $("#btn-branding").on("click", function() {
        onBtnBradingClick();
    })
    $("#btn-web").on("click", function() {
        onBtnWebClick();
    })
    $("#btn-logo").on("click", function() {
        onBtnLogoClick();
    })
    $("#btn-photo").on("click", function() {
        onBtnPhotoClick();
    })


    onBtnBradingClick = () => {
        let identify = "b"
        $("#b-1").css("display","block");
        $("#b-2").css("display","block");
        $("#b-3").css("display","block");
        $("#w-1").css("display","none");
        $("#w-2").css("display","none");
        $("#l-1").css("display","none");
        $("#p-1").css("display","none");
        $("#b-4").css("display","block");

        setBtnColor(identify);
    }
    onBtnAllClick = () => {
        let identify = "a"
        $("#b-1").css("display","block");
        $("#b-2").css("display","block");
        $("#b-3").css("display","block");
        $("#w-1").css("display","block");
        $("#w-2").css("display","block");
        $("#l-1").css("display","block");
        $("#p-1").css("display","block");
        $("#b-4").css("display","block");
        setBtnColor(identify);
    }
    onBtnWebClick = () => {
        let identify = "w"
        $("#b-1").css("display","none");
        $("#b-2").css("display","none");
        $("#b-3").css("display","none");
        $("#w-1").css("display","block");
        $("#w-2").css("display","block");
        $("#l-1").css("display","none");
        $("#p-1").css("display","none");
        $("#b-4").css("display","none");
        setBtnColor(identify);
    }
    onBtnLogoClick = () => {
        let identify = "l"
        $("#b-1").css("display","none");
        $("#b-2").css("display","none");
        $("#b-3").css("display","none");
        $("#w-1").css("display","none");
        $("#w-2").css("display","none");
        $("#l-1").css("display","block");
        $("#p-1").css("display","none");
        $("#b-4").css("display","none");
        setBtnColor(identify);
    }
    onBtnPhotoClick = () => {
        let identify = "p"
        $("#b-1").css("display","none");
        $("#b-2").css("display","none");
        $("#b-3").css("display","none");
        $("#w-1").css("display","none");
        $("#w-2").css("display","none");
        $("#l-1").css("display","none");
        $("#p-1").css("display","block");
        $("#b-4").css("display","none");
        setBtnColor(identify);
    }


    setBtnColor = (paramIdentify) => {
        if(paramIdentify == "b") {
            $("#btn-all").css("color","rgb(6, 32, 51)");
            $("#btn-all").css("padding","0");
            $("#btn-all").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-web").css("color","rgb(6, 32, 51)");
            $("#btn-web").css("padding","0");
            $("#btn-web").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-logo").css("color","rgb(6, 32, 51)");
            $("#btn-logo").css("padding","0");
            $("#btn-logo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-photo").css("color","rgb(6, 32, 51)");
            $("#btn-photo").css("padding","0");
            $("#btn-photo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-branding").css("color","white");
            $("#btn-branding").css("padding","5px 20px 5px 20px");
            $("#btn-branding").css("background-color","rgb(14, 180, 147)");
            $("#btn-branding").css("border-radius","5px");
        }
        if(paramIdentify == "a") {
            $("#btn-branding").css("color","rgb(6, 32, 51)");
            $("#btn-branding").css("padding","0");
            $("#btn-branding").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-web").css("color","rgb(6, 32, 51)");
            $("#btn-web").css("padding","0");
            $("#btn-web").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-logo").css("color","rgb(6, 32, 51)");
            $("#btn-logo").css("padding","0");
            $("#btn-logo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-photo").css("color","rgb(6, 32, 51)");
            $("#btn-photo").css("padding","0");
            $("#btn-photo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-all").css("color","white");
            $("#btn-all").css("padding","5px 20px 5px 20px");
            $("#btn-all").css("background-color","rgb(14, 180, 147)");
            $("#btn-all").css("border-radius","5px");
        }
        if(paramIdentify == "w") {
            $("#btn-branding").css("color","rgb(6, 32, 51)");
            $("#btn-branding").css("padding","0");
            $("#btn-branding").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-all").css("color","rgb(6, 32, 51)");
            $("#btn-all").css("padding","0");
            $("#btn-all").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-logo").css("color","rgb(6, 32, 51)");
            $("#btn-logo").css("padding","0");
            $("#btn-logo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-photo").css("color","rgb(6, 32, 51)");
            $("#btn-photo").css("padding","0");
            $("#btn-photo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-web").css("color","white");
            $("#btn-web").css("padding","5px 20px 5px 20px");
            $("#btn-web").css("background-color","rgb(14, 180, 147)");
            $("#btn-web").css("border-radius","5px");
        }
        if(paramIdentify == "l") {
            $("#btn-branding").css("color","rgb(6, 32, 51)");
            $("#btn-branding").css("padding","0");
            $("#btn-branding").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-all").css("color","rgb(6, 32, 51)");
            $("#btn-all").css("padding","0");
            $("#btn-all").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-web").css("color","rgb(6, 32, 51)");
            $("#btn-web").css("padding","0");
            $("#btn-web").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-photo").css("color","rgb(6, 32, 51)");
            $("#btn-photo").css("padding","0");
            $("#btn-photo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-logo").css("color","white");
            $("#btn-logo").css("padding","5px 20px 5px 20px");
            $("#btn-logo").css("background-color","rgb(14, 180, 147)");
            $("#btn-logo").css("border-radius","5px");
        }
        if(paramIdentify == "p") {
            $("#btn-branding").css("color","rgb(6, 32, 51)");
            $("#btn-branding").css("padding","0");
            $("#btn-branding").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-all").css("color","rgb(6, 32, 51)");
            $("#btn-all").css("padding","0");
            $("#btn-all").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-web").css("color","rgb(6, 32, 51)");
            $("#btn-web").css("padding","0");
            $("#btn-web").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-logo").css("color","rgb(6, 32, 51)");
            $("#btn-logo").css("padding","0");
            $("#btn-logo").css("background-color","rgb(244, 247, 249)");
    
            $("#btn-photo").css("color","white");
            $("#btn-photo").css("padding","5px 20px 5px 20px");
            $("#btn-photo").css("background-color","rgb(14, 180, 147)");
            $("#btn-photo").css("border-radius","5px");
        }
    }
});