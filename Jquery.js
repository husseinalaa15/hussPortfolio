




$(document).ready(function(){
 $(window).scroll(function(){
   if(this.scrollY>20){
     $(".navbar").addClass("sticky");
   }else{
     $(".navbar").removeClass("sticky");
   }
   if( this.scrollY > 20){
     $(".scroll-up-btn").addClass("show");

   }
   else{
     $(".scroll-up-btn").removeClass("show");   
// on Scroll Skills Bar animate
}


    








 })

 $(".scroll-up-btn").click(function(){
  $("html,body").animate({scrollTop:0});
});

$("#scroll-Dwn-btn").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".about").offset().top
  }, 500);
});

var typed = new Typed(".typing",{
  strings : ["Front End Developer","Web Designer","Web Developer","Graduated"],
  typeSpeed:50,
  backSpeed:60,
  loop:true
});

});





