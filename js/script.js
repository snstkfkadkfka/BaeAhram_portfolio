// ==========================원페이지 스크롤
$(function () {
    function checkSection() {
        var scrollPos = $(window).scrollTop();
        var winHeight = $(window).height();

        $(".page").each(function (index) {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();

            if (scrollPos + winHeight / 2 >= top && scrollPos + winHeight / 2 <= bottom) {
                $("nav .menu li a").removeClass("on light");
                $("nav .menu li a").eq(index).addClass("on");
                if (index === 1 || index === 3 || index === 5) {
                    $("nav .menu li a").eq(index).addClass("light");
                }
            }
        });
    }

    $(window).on("scroll", function () {
        checkSection();
    });

    $(".page").on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var moveTop;

        if (delta < 0) { // 휠을 내리면
            if ($(this).next().length) {
                moveTop = $(this).next().offset().top;
            } else if ($(this).parent().next().length) { // 부모의 다음 요소가 존재하는지 확인
                moveTop = $(this).parent().next().offset().top;
            } else {
                return; // 다음 요소가 없으면 함수 종료
            }
        } else { // 휠을 올리면
            if ($(this).prev().length) {
                moveTop = $(this).prev().offset().top;
            } else if ($(this).parent().prev().length) { // 부모의 이전 요소가 존재하는지 확인
                moveTop = $(this).parent().prev().offset().top;
            } else {
                return; // 이전 요소가 없으면 함수 종료
            }
        }

        $("html,body").stop().animate({ scrollTop: moveTop }, 800, function () {
            checkSection();
        });
    });

    $("nav .menu li a").click(function (e) {
        e.preventDefault();
        $("nav .menu li a").removeClass("on light");
        $(this).addClass("on");
        var loc = $($(this).attr("href")).offset().top;
        $("html,body").stop().animate({ scrollTop: loc }, 1000, function () {
            checkSection();
        });
    });

    // 페이지 로드 시 현재 위치 확인
    checkSection();
});

// ==============페이지3 팝업창 
$(".p3 .but2").click(function () {
    $(".pop1").fadeIn(300)
    return false;
})
$(".pop1").click(function () {
    $(".pop1").fadeOut(300)
    return false;
})

// ==============페이지4 팝업창 
$(".p4 .but2").click(function () {
    $(".pop2").fadeIn(300)
    return false;
})
$(".pop2").click(function () {
    $(".pop2").fadeOut(300)
    return false;
})

// ==============페이지5 팝업창 
$(".p5 .but2").click(function () {
    $(".pop3").fadeIn(300)
    return false;
})
$(".pop3").click(function () {
    $(".pop3").fadeOut(300)
    return false;
})



// ===============================================페이지6 팝업창 
// ===================대전교육청
$(".card_News .card1").click(function () {
    $(".pop4").fadeIn(200)
    return false;
})
$(".pop4 .material-symbols-outlined").click(function () {
    $(".pop4").fadeOut(200)
    return false;
})

// ===================공영홈쇼핑
$(".card_News .card2").click(function () {
    $(".pop5").fadeIn(200)
    return false;
})
$(".pop5 .material-symbols-outlined").click(function () {
    $(".pop5").fadeOut(200)
    return false;
})

// ===================한국상품 BEST5
$(".card_News .card3").click(function () {
    $(".pop6").fadeIn(200)
    return false;
})
$(".pop6 .material-symbols-outlined").click(function () {
    $(".pop6").fadeOut(200)
    return false;
})

// ===================설화수
$(".pdp .pdp1").click(function () {
    $(".pop7").fadeIn(200)
    return false;
})
$(".pop7 .material-symbols-outlined").click(function () {
    $(".pop7").fadeOut(200)
    return false;
})

// ===================우리농가수
$(".pdp .pdp2").click(function () {
    $(".pop8").fadeIn(200)
    return false;
})
$(".pop8 .material-symbols-outlined").click(function () {
    $(".pop8").fadeOut(200)
    return false;
})

// ===================던킨도너츠
$(".banner .ban1").click(function () {
    $(".pop9").fadeIn(200)
    return false;
})
$(".pop9 .material-symbols-outlined").click(function () {
    $(".pop9").fadeOut(200)
    return false;
})

// ===================리에티
$(".banner .ban2").click(function () {
    $(".pop10").fadeIn(200)
    return false;
})
$(".pop10 .material-symbols-outlined").click(function () {
    $(".pop10").fadeOut(200)
    return false;
})

// =========================슬라이더
$(".p6 .box #slide1").click(function(){
   $(".p6 .box #slide3").appendTo(".p6 .box").removeClass("on")
    $(this).addClass("on")
})
$(".p6 .box #slide2").click(function(){
   $(".p6 .box #slide1").appendTo(".p6 .box").removeClass("on")
   $(this).addClass("on")
})
$(".p6 .box #slide3").click(function(){
   $(".p6 .box #slide2").appendTo(".p6 .box").removeClass("on")
   $(this).addClass("on")
})



// ==========================스크롤 이벤트
$(window).scroll(function () {
    var value = $(window).scrollTop();
    console.log(value);
    if (value < 512, value > 0) {
        $("nav>ul>li").css({ border: "1px solid #fff" })
    }
    if (value < 1401, value > 513) {
        $("nav>ul>li").css({ border: "1px solid #000" })
    }
    if (value < 3254, value > 1402) {
        $("nav>ul>li").css({ border: "1px solid #fff" })
    }
    if (value < 4151, value > 3255) {
        $("nav>ul>li").css({ border: "1px solid #3F3F3F" })
    }
    if (value < 5074, value > 4152) {
        $("nav>ul>li").css({ border: "1px solid #FF9700" })
    }
    if (value < 5514, value > 5075) {
        $("nav>ul>li").css({ border: "1px solid #fff" })
    }
    if (value > 900) {
        $(".p2 .skills .graph>ul>li").addClass("on")
    } else {
        $(".p2 .skills .graph>ul>li").removeClass("on")
    }
});
