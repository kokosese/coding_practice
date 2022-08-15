$(function(){
    $('.hamburger').on('click',function(){
        hamburger();
    });
    $('.navi a').on('click',function(){
        hamburger();
    })
})

function hamburger() {
    $('.hamburger').toggleClass('action');
    if($('.hamburger').hasClass('action')){
        $('.navi').addClass('action');
    } else {
        $('.navi').removeClass('action');
    }
}