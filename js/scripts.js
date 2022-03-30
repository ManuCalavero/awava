$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.a-drop--xl').css('top',-(scrolled*1.2)+'px');
  $('.a-drop--m').css('top',-(scrolled*0.4)+'px');
  $('.a-drop--s').css('top',-(scrolled*0.2)+'px');
}

function displayList () {
  var trigger = $("#trigger"),
      mainTarget = $(".custom-list"),
      targetItem = $('.o-header__nav-list--item'),
      body = $("body"),
      html = $("html");

  trigger.on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    mainTarget.removeClass("unreveal"); 
    mainTarget.addClass("reveal"); 
    body.toggleClass("body-veil body-unveil"); 
    trigger.toggleClass("btn__trigger--is-open"); targetItem.each(function(i, el) {
      setTimeout(function() {
      $(el).toggleClass("no-visible visible");
      }, i * 68);
    })
  });

  html.on("click", function() {
    targetItem.removeClass("visible");
    mainTarget.removeClass("reveal");
    body.removeClass("body-veil body-unveil"); 
  });

}

$(document).on('page:load', displayList);
$(document).ready(displayList);