
let prayer = document.querySelector(".prayer1");
let prayer2 = document.querySelector(".prayer2");
let prayer3 = document.querySelector(".prayer3");
let prayer4 = document.querySelector(".prayer4");
let prayer5 = document.querySelector(".prayer5");
let prayer6 = document.querySelector(".prayer6");
let city = document.querySelector(".city");
let clunder1 = document.querySelector(".clunder1");
let clunder = document.querySelector(".clunder");

city.addEventListener("change", () => {
  adress(`https://api.aladhan.com/v1/timingsByAddress?address=${city.value}`);
  document.querySelector(".prayer-Time Strong span").innerHTML = city.value;
});
window.addEventListener("load", () => {
  adress(`https://api.aladhan.com/v1/timingsByAddress?address=العريش`);
});
function adress(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => items(data.data));
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? +h : h;
  m = m < 10 ? +m : m;
  s = s < 10 ? +s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

function items(items) {
  prayer.innerHTML = `<div class="prayer">
    <span>${items.timings.Imsak} ص</span>
    </div>`;
  prayer2.innerHTML = `<div class="prayer">
    <span>${items.timings.Fajr} ص</span>
    </div>`;
  prayer3.innerHTML = `<div class="prayer">
    <span>${items.timings.Dhuhr} ص</span>
    </div>`;
  prayer4.innerHTML = `<div class="prayer">
    <span>${items.timings.Asr} ص</span>
    </div>`;
  prayer5.innerHTML = `<div class="prayer">
    <span>${items.timings.Maghrib} ص</span>
    </div>`;
  prayer6.innerHTML = `<div class="prayer">
    <span>${items.timings.Isha} ص</span>
    </div>`;
  clunder1.innerHTML = `
    <Strong>${items.date.hijri.weekday.ar}:-</Strong>
      <span>${items.date.readable} </span>
      `;
  clunder.innerHTML = `
    <Strong>${items.date.hijri.weekday.ar}:-</Strong>
      <span>${items.date.hijri.day} ${items.date.hijri.month.ar} ${items.date.hijri.year}</span>
      `;

}
