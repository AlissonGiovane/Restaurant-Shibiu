
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000);   
});

$(function(){

  // ------- animação wow ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#galeria').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#chefs').parallax("100%", 0.3);
    $('#fale-conosco').parallax("100%", 0.1);

  }
  initParallax();

});

