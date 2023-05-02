function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("hamburger")) {
        image.src = "images/cross.svg";
    } else {
        image.src = "images/hamburger.svg";
    }
}


$(document).ready(function(){
    $("#formButton").click(function(){
        $("#form1").toggle();
    });
});

