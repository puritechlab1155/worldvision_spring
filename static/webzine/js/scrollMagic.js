document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationTypes = entry.target.getAttribute("data-animate") || "fadeInUp";
          const animationList = animationTypes.split(" "); // 여러 애니메이션 지원

          // Animate.css 클래스 추가
          entry.target.classList.add("animate__animated", ...animationList.map(a => `animate__${a}`));

          // 애니메이션 속도 빠르게 (0.6초로 설정)
          entry.target.style.animationDuration = "0.6s";

          entry.target.style.opacity = "1";
          entry.target.style.visibility = "visible";
          entry.target.style.transform = "scale(1)"; // 원래 크기 복원

          // 애니메이션 시작 후 약간의 딜레이 후 Lottie 실행 (애니메이션 중간쯤)
          entry.target.addEventListener("animationstart", () => {
            setTimeout(() => {
              const lottiePlayers = entry.target.querySelectorAll("dotlottie-player");
              lottiePlayers.forEach(player => player.play());
            }, 300); // 0.3초 후 Lottie 실행
          }, { once: true });

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
    
    // Lottie 자동 실행 방지
    const lottiePlayers = el.querySelectorAll("dotlottie-player");
    lottiePlayers.forEach(player => player.pause()); // 초기에는 정지 상태

    observer.observe(el);
  });
});
