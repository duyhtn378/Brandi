$(document).ready(function () {
    //banner slider
    $('.header-carousel').slick({
        dots: true,
        appendDots: $('.dot-location'),
        infinite: true,
        autoplay: true,
    })
    //SOME FUN FACT count up
    $('.counter').countUp({
        'time': 3000,
        'delay': 10
    });
    //Fade effect
    AOS.init({
        easing: 'ease-in-quad',
    });
    //Function Handle change header style when scroll throw a banner
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
         $(".bandi-header-brand").removeClass("text-white");
         $(".bandi-header-brand").addClass("text-dark");
         $(".header-brand-list a").removeClass("text-white");
         $(".header-brand-list a").addClass("text-dark");

        }else {

         $(".bandi-header-decor").css("background-color","rgb(16, 22, 54)");
         $(".bandi-header-decor").css("opacity","0.2");
         $(".bandi-header-brand").addClass("text-white");
         $(".bandi-header-brand").removeClass("text-dark");
         $(".header-brand-list a").addClass("text-white");
         $(".header-brand-list a").removeClass("text-dark");
        }
    });
    //function handle event when click filter buttons
    $(".btn-all").on("click", function() {
        onBtnAllClick();
    })
    $(".btn-branding").on("click", function() {
        onBtnBradingClick();
    })
    $(".btn-web").on("click", function() {
        onBtnWebClick();
    })
    $(".btn-logo").on("click", function() {
        onBtnLogoClick();
    })
    $(".btn-photo").on("click", function() {
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
        // bannerData = ["data from DB"]
        // let filterdata = bannerData.filter((data) => {
        //     data.id.includes("b")
        // })

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
    //function change to button style when click
    setBtnColor = (paramIdentify) => {
        if(paramIdentify == "b") {
            $(".btn-all").removeClass("btn-choose");
            $(".btn-web").removeClass("btn-choose");
            $(".btn-logo").removeClass("btn-choose");
            $(".btn-photo").removeClass("btn-choose");
            $(".btn-branding").addClass("btn-choose");
        }
        if(paramIdentify == "a") {
            $(".btn-all").addClass("btn-choose");
            $(".btn-web").removeClass("btn-choose");
            $(".btn-logo").removeClass("btn-choose");
            $(".btn-photo").removeClass("btn-choose");
            $(".btn-branding").removeClass("btn-choose");
        }
        if(paramIdentify == "w") {
            $(".btn-all").removeClass("btn-choose");
            $(".btn-web").addClass("btn-choose");
            $(".btn-logo").removeClass("btn-choose");
            $(".btn-photo").removeClass("btn-choose");
            $(".btn-branding").removeClass("btn-choose");
        }
        if(paramIdentify == "l") {
            $(".btn-all").removeClass("btn-choose");
            $(".btn-web").removeClass("btn-choose");
            $(".btn-logo").addClass("btn-choose");
            $(".btn-photo").removeClass("btn-choose");
            $(".btn-branding").removeClass("btn-choose");
        }
        if(paramIdentify == "p") {
            $(".btn-all").removeClass("btn-choose");
            $(".btn-web").removeClass("btn-choose");
            $(".btn-logo").removeClass("btn-choose");
            $(".btn-photo").addClass("btn-choose");
            $(".btn-branding").removeClass("btn-choose");
        }
    }
});