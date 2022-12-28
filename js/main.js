const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function() {
  searchInputEl.focus();
});

const basketFromEl = document.querySelector('header .basket-from');
const basketEl = basketFromEl.querySelector('.basket');

basketFromEl.addEventListener("click", function(event) {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    basketEl.classList.remove("show");
  } else {
    basketEl.classList.add("show");
  }
});

window.addEventListener("click", function () {
  basketEl.classList.remove("show");
});

basketEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

new Swiper(".promotion .swiper", {
  autoplay: true, // 자동 재생
  loop: true, // 반복 재생
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    // 페이지 번호 사용
    el: ".promotion .swiper-pagination", // 페이지 번호 요소
    clickable: true, // 사용자의 페이지 번호 제어 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev", // 이전 버튼 요소
    nextEl: ".promotion .swiper-button-next", // 다음 버튼 요소
  },
});

function zoomIn(event) {
  event.target.style.transform = "scale(1.1)"; //1.2배 확대
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";// 속도
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}