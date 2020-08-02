$(window).on("scroll", function () {
    $("wrapper__header").toggleClass("active", $(this).scrollTop() > $(window).height(50))
});