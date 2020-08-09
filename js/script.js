// Лиипкий header

window.onscroll = function showHeader() {

    let header = document.querySelector('.wrapper__header');

    if (window.pageYOffset > 100){
        header.classList.add('.header_fixed');
    } else {
        header.classList.remove('.header_fixed');
    }
}
 

// Форма обратной связи

$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});