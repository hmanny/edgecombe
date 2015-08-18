var menu_up = false;
$(".menu_button").on("click", function () {
    if (menu_up === false) {
        $(".mobile-menu").fadeIn(200);
        $(this).addClass("is-open");
        menu_up = true;
    } else {
        $(".mobile-menu").fadeOut(200);
        $(this).removeClass("is-open");
        menu_up = false;
    }
});
$(window).on('resize', function () {
    $(".mobile-menu").fadeOut();
    $(".menu_button").removeClass("is-open");
    menu_up = false;
});
