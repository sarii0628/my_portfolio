$(function(){
    $('.cards__detail-show').on("click", 
    function(){
        $(this).next().slideToggle(200);
        $(this).toggleClass('open', 200);
    });
});