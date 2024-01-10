$(".drum").click(function () {
    let sound = new Audio("https://noureddinemt.github.io/tambours_jQuery/sounds/" + $(this).text() + ".mp3");
    sound.play()
    $(this).addClass("pressed")
    setTimeout(() => {
        $(this).removeClass("pressed")
    }, 1000);
})
$(document).keypress(function (e) {
    let sound = new Audio("https://noureddinemt.github.io/tambours_jQuery/sounds/" + e.key + ".mp3");
    sound.play()
    $("."+ e.key).addClass("pressed")
    setTimeout(() => {
        $("."+ e.key).removeClass("pressed");
    }, 1000);
})
