$(document).ready(function(){

var selector="#main";


$('body > :not(#main)').click(function(){
    
    $("#main > span").css({"border":"none","background-color":"none","border-radius":"0px","background":"none"});
    selector=$("#main");
});
var m=300;

$("#name").keydown(function() {
var value=$("#name").val();
$("#main").text(value);
m=m-5;
$("#main").css("marginLeft",m+'px');
$("#main").lettering();
$("#main > span").click(function(){
$("#main > span").css({"border":"none","background-color":"none","border-radius":"0px","background":"none"});
$(this).css({"border-bottom":"5px solid black","border-radius":"10px"});
selector=this;

});

});





$("#name").keyup(function() {
var value=$("#name").val();
$("#main").html(value);
$("#main").lettering();
$("#main > span").click(function(){
$("#main > span").css({"border":"none","background-color":"none","border-radius":"0px","background":"none"});
$(this).css({"border-bottom":"10px solid #80FF00","border-radius":"10px"});
selector=this;

});
});




$("#size").slider({ animate: true, max: 200, min:40,slide:sizeSlide});

function sizeSlide(e,ui){
    $(selector).css("font-size",ui.value)
}

$("#rotation").slider({ animate: true, max: 360, min:0,slide:rotationSlide});

function rotationSlide(e,ui){
var srotate = "rotate(" + ui.value + "deg)";
    $(selector).css({"-webkit-transform":srotate,"-moz-transform":srotate})
}

$("#lspacing").slider({ animate: true, max: 100, min:-100,slide:lspacingSlide});

function lspacingSlide(e,ui){
    $(selector).css({"letter-spacing":ui.value})
}


$("#wspacing").slider({ animate: true, max: 100, min:-50,slide:wspacingSlide});

function wspacingSlide(e,ui){
    $(selector).css({"word-spacing":ui.value})
}

    $('#colorpicker').farbtastic(callback);
function callback(color) {
    $(selector).css("color",color);
    
    }







});