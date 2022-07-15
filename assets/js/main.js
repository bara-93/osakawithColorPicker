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