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
        th.trigger("reset");
      }, 500);
    });
    return false;
  });
});

$(document).ready(function () {
    $.support.placeholder = (function () {
        var i = document.createElement("input");
        return "placeholder" in i;
    })();

    if ($.support.placeholder) {
        $(".form-label").each(function () {
            $(this).addClass("js-hide-label");
        });

        $(".form-group").find("input, textarea").on("keyup blur focus", function (e) {
            var $this = $(this),
                $label = $this.parent().find("label");

            switch (e.type) {
                case "keyup": {
                    $label.toggleClass("js-hide-label", $this.val() == "");
                } break;
                case "blur": {
                    if ($this.val() == "") {
                        $label.addClass("js-hide-label");
                    } else {
                        $label.removeClass("js-hide-label").addClass("js-unhighlight-label");
                    }
                } break;
                case "focus": {
                    if ($this.val() !== "") {
                        $label.removeClass("js-unhighlight-label");
                    }
                } break;
                default: break;
            }
        });
    }
});