let colors = ['red','orange','yellow','blue','green'];
for(let i=0;i<colors.length;i++){
    $(".color-box .color-options li").eq(i).css("backgroundColor",colors[i]);
}
$(".color-box .color-options li").click(function(){
    let currentColor = $(this).css("backgroundColor");
    $(".colorChange").css("color",currentColor);
})
$(".color-box i").click(function(){
    let boxWidth = $(".color-box .color-options").outerWidth();
    if( $(".color-box ").css("left") == "0px"){
        $(".color-box ").animate({"left":-boxWidth},2000);
    }else{
        $(".color-box").animate({"left":0},2000);
    }
    
})
let aboutSection = $("#about").offset().top;
$(window).scroll(function(){
    let tscroll = $(window).scrollTop();   
    if(tscroll >= aboutSection-50){
        $(".navbar").css({"backgroundColor":"rgba(0,0,0,0.6)","transition":"all 1s"})
        $("#btnUP").fadeIn(2000);
    }else{
        $(".navbar").css("backgroundColor","transparent");
        $("#btnUP").fadeOut(2000);


    }
})
$("#btnUP").click(function(){
    $(window).scrollTop(0)
    
})
$("a[href='#']").click(function(e){{
    let hLink = "#"
    let hLink_text = $(e.target).text();
    hLink += hLink_text
    let sectionOffset = $(hLink).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)
}})
$(document).ready(function(){
$("#loadingSpinner .sk-folding-cube").fadeOut(4000);
$("#loadingSpinner").fadeOut(4000);
$('body').css("overflow","auto")

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {loop:true,
        margin:25,
        stagePadding:15

    }
    );
  });


  $(document).ready(function() {
    $(".skitter-large").skitter();
  });

})