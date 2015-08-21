$(document).ready(function () {

    var menu_up = 'notUp';
    $(".menu_button").on("click", function () {
        if (menu_up === 'notUp') {
            $(".mobile-menu").fadeIn(200);
            $(this).addClass("is-open");

            menu_up = 'up';
        } else if (menu_up === 'up') {
            $(".mobile-menu").fadeOut(200);
            $(".mobile-menu li").find('ul').fadeOut(200);
            $(this).removeClass("is-open");
            menu_up = 'notUp';
        } else if (menu_up === 'lv2') {
            $(".mobile-menu li").find('ul').fadeOut(200);
            $(this).removeClass("level2")
            $(this).addClass("is-open");

            menu_up = 'up';
        }
    });
    $(window).on('resize', function () {
        $(".mobile-menu").fadeOut();
        $(".mobile-menu li").find('ul').fadeOut(200);
        $(".menu_button").removeClass("is-open");
        $(".menu_button").removeClass("level2");

        menu_up = 'notUp';
    });


    $(".mobile-menu a").not(".nodiv").on('click', function () {
        $(this).parent("li").find('ul').slideDown(200);
        menu_up = "lv2";
        $(".menu_button").addClass("level2");

    });



});
