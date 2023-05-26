$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// Function to shrink nav bar removing paddings and adding black background
$(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
        $('.nav').addClass('scrolldown');
    } else {
        $('.nav').removeClass('scrolldown');
    }
});