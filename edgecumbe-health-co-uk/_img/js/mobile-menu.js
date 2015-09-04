$(document).ready(function () {
    
    $(".mobile-menu li").find('ul').wrap("<div class='innerMenu'></div>");

    var menu_up = 'notUp';
    $(".menu_button").on("click", function () {
        if (menu_up === 'notUp') {
            $(".mobile-menu").addClass("showMenu");
            $(".site").css("overflow","hidden");
            $(this).addClass("is-open");

            menu_up = 'up';
        } else if (menu_up === 'up') {
            $(".mobile-menu").removeClass("showMenu");
            $(".mobile-menu li").find('.innerMenu').removeClass("showMenu");
            $(this).removeClass("is-open");
            $(".site").removeAttr("style");
            menu_up = 'notUp';
        } else if (menu_up === 'lv2') {
            $(".mobile-menu li").find('.innerMenu').removeClass("showMenu");
            $(this).removeClass("level2")
            $(this).addClass("is-open");

            menu_up = 'up';
        }
    });
    $(window).on('resize', function () {
        $(".mobile-menu").removeClass("showMenu");
        $(".mobile-menu li").find('.innerMenu').removeClass("showMenu");
        $(".menu_button").removeClass("is-open");
        $(".menu_button").removeClass("level2");
        $(".site").removeAttr("style");
        menu_up = 'notUp';
    });


    $(".mobile-menu li").not(".nodiv").find("a").on('click', function () {
        $(this).parent("li").find('.innerMenu').addClass("showMenu");
        menu_up = "lv2";
        $(".menu_button").addClass("level2");

    });
    $(".mobile-menu").children("ul").append($(".login"));



});
