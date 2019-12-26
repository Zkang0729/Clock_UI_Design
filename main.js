setInterval(() => {
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("minute");
  var seconds = document.getElementById("second");
  var ampm = document.getElementById("ampm");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = "AM";

  if (h >= 12) {
    am = "PM";
    h -= 12;
  }

  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  ampm.innerHTML = am;
}, 1000);
