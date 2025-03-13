document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationTypes = entry.target.getAttribute("data-animate") || "fadeInLeft";
          const animationList = animationTypes.split(" "); // 여러 애니메이션 지원

          // Animate.css 클래스 추가
          entry.target.classList.add("animate__animated", ...animationList.map(a => `animate__${a}`));

          // 줌인 줌아웃 효과 추가
          if (animationList.includes("zoomIn")) {
            entry.target.style.transform = "scale(1.2)"; // 확대
          } else if (animationList.includes("zoomOut")) {
            entry.target.style.transform = "scale(0.8)"; // 축소
          } else {
            entry.target.style.transform = "scale(1)"; // 기본 크기
          }

          entry.target.style.opacity = "1";
          entry.target.style.visibility = "visible";

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.visibility = "hidden";
    el.style.transform = "scale(0.8)"; // 초기 크기 설정
    observer.observe(el);
  });
});