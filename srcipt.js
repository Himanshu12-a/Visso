function next(page) {
  window.location.href = page;
}

// Fake countdown
function startCountdown(id) {
  let count = 5;
  let el = document.getElementById(id);
  let timer = setInterval(() => {
    count--;
    el.innerText = count;
    if (count <= 0) {
      clearInterval(timer);
      alert("😂 You got pranked!");
    }
  }, 1000);
}

// Random result generator
function randomResult(id, list) {
  let el = document.getElementById(id);
  let random = list[Math.floor(Math.random() * list.length)];
  el.innerText = random;
}
