const targetDate = new Date(2027,6,12,0,0,0).getTime();

const timerInterval = setInterval(function() {

  const now = new Date().getTime();
  
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(timerInterval); // إيقاف العداد
    document.getElementById("countdown").style.display = "none";
    document.getElementById("expired-text").style.display = "block";
  }

}, 1000); // 1000 مللي ثانية = 1 ثانية