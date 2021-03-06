// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state' + state;
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').innerHTML = countdownNumber;

  //countdown
  if (state == 2) {
    timer = setInterval(function () {
  
       countdownNumber = countdownNumber -1;

      document.getElementById('countdown').innerHTML = countdownNumber;

       if (countdownNumber <= 0) {
           changeState(3);
         };
    }, 500);

  } else if (state == 3) {
      var success = setTimeout(function ()
      {
        var randomNumber = Math.round(Math.random()*10);

        // Success

        if (randomNumber > 1) {
          changeState(4);

        } else {
          changeState(5);  // oh no!
        }
      }, 2000);
  };
}
