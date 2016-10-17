setInterval(function blink () {
  $('#cursor').toggleClass('hidden');
}, 600);

$(document.body).on('keypress', function(event) {
   $('#cursor').before(String.fromCharCode(event.keyCode));
});