$(document).ready(function () {
    $('#adaptive-menu').hide();
    console.log('Hello');

    //Скролл по якорям
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
    $('.adapt-navigator').click(function () {
        $('#adaptive-menu').slideToggle();
        console.log('Done')
    });
    $('#menu-close').click(function () {
        $('#adaptive-menu').slideToggle();
        console.log('Done')
    });
    $('#menu-open').click(function () {
        $('#adaptive-menu').slideToggle();
        console.log('Done')
    });

    
});
//слайдер
var reviewId = 1;

function setID(id) {
    $('.active').removeClass('active');
    $('#review-' + id).addClass('active');
}

$('#next').click(function () {
    if (reviewId !== 4) {
        reviewId++;
        setID(reviewId)
    } else {
        setID(1);
        reviewId = 1;
    }
});
$('#prev').click(function () {
    reviewId--;
    if (reviewId !== 0) {
        setID(reviewId)
    } else {
        setID(4);
        reviewId = 4;
    }
});


//Изменение цвета меню при скроллле в низ
var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 400){
        $("#header-container").css({"background": "#151515"})
    }
    if(400 > scrolled){
        $("#header-container").css({"background": "rgba(0,0,0,0)"})
    }
};

//Адааптивное меню

