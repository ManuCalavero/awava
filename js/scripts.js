$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.a-drop--xl').css('top',-(scrolled*1.2)+'px');
  $('.a-drop--m').css('top',-(scrolled*0.4)+'px');
  $('.a-drop--s').css('top',-(scrolled*0.2)+'px');
}