// Sticky Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

let timeInterval;

function toggleTime() {
  const timeOutput = document.getElementById("timeOutput");
  const closeBtn = document.getElementById("closeTime");

  if (timeOutput.style.display === "inline") return;

  timeOutput.style.display = "inline";
  closeBtn.style.display = "inline";

  function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    timeOutput.innerText =`${h}:${m}:${s}`;
  }

  updateTime();
  timeInterval = setInterval(updateTime, 1000);
}

function hideTime() {
  const timeOutput = document.getElementById("timeOutput");
  const closeBtn = document.getElementById("closeTime");

  clearInterval(timeInterval);
  timeOutput.style.display = "none";
  closeBtn.style.display = "none";
}

// Swiper initialization
const swiper = new Swiper('.trustedSwiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});