document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("animate__animated", "animate__fadeInUp");
                  entry.target.style.opacity = "1"; // 보이도록 설정
                  observer.unobserve(entry.target); // 한 번 실행 후 감지 해제
              }
          });
      },
      { threshold: 0.3 } // 요소가 30% 이상 화면에 보이면 실행
  );

  animatedElements.forEach((el) => {
      el.style.opacity = "0"; // 처음에는 안 보이게 설정
      observer.observe(el);
  });
});