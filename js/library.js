$(document).ready(function() {

    $('.menu a').click(function () {

        router(this.getAttribute('href'));

    });

    $('.slider a').click(function () {

        router(this.getAttribute('href'));

    });


    $('.system-button').click(function () {

        router(this.getAttribute('data-button-type'));

    });

    $('.block-screen').click(function () {

        $(this).css('display','none')
        $('.form-dialog').hide();

    });

    $('.slider-btn-left').click(function() {
       sliderBottomShift(-1); 
        
    });

    $('.slider-btn-right').click(function() {
       sliderBottomShift(1); 
        
    });
});


function router(module) {

    if (module.substr(0, 1) == '#') {
        module = module.substr(1);
    }



    switch (module) {
        case 'home':
            $('.contents').html('');
            $('.menu-add').show();
            break;

        case 'log-in':
            $('.block-screen').show();
            $('.form-log-in').show();
            break;

        default:
            module = module.toLowerCase() + '.html';
            $(".contents").load('tpl/' + module);


            $('.menu-add').hide();

    }
    
}



var imgShow = 0;

//!document.getElementByClass('im').style.zIndex = '1';!//
/*function myNext() {
    
    var a = document.getElementsByClassName('slider-img-wrapper');
    
    for (var i = 0; i < a.length; i++) {                            
        a[i].style.zIndex = '0';
    }
    
    imgShow++;
    
    if (imgShow == a.length) {                            
        imgShow = 0;
    }
    
    a[imgShow].style.zIndex = '1';


}*/

function myNext() {
    
    var a = $('.slider-img-wrapper');
    a.hide();
    
    
    
    $(a[imgShow]).show();
    imgShow++;

    if (imgShow == a.length) {                            
        imgShow = 0;
    }                            

}
setInterval(myNext, 1500);

function sliderBottomShift(step) {
    var left = $('.slider-tape').css('left');
    left = parseInt(left);


    

    left = left - $('.slider-tape-img').outerWidth(true) * step;
    var leftPx = left.toString() + 'px';

    $('.slider-tape').animate({'left': leftPx }, 500);




}



