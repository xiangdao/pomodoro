var icon = 'icon.jpg';
var snd = new Audio("file.wav");
var countdown = parseInt(document.getElementById('countdown').innerHTML);
var timer = 0;

if (window.webkitNotifications.checkPermission() !== 0) {
  document.getElementById("permission").innerHTML =
    "Looks like you haven't enabled desktop notifications, <a href='#' onclick='window.webkitNotifications.requestPermission();'>click here to enable</a>";
}

function showPopup() {
  if (window.webkitNotifications.checkPermission() == 0) {
    var popup = window.webkitNotifications.createNotification(
      icon, 'Pomodoro', 'Pomodoro complete - take a break!'
    );
    popup.show();
  }
  snd.play();
}

function tick() {
  document.getElementById("countdown").innerHTML = --countdown;
  if (countdown == 0) {
    showPopup();
    clearInterval(timer);
  }
}

timer = setInterval(tick, 1000);