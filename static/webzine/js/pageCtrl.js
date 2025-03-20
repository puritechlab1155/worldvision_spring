



        // 페이지 로드 시 네비게이션 설정
        document.addEventListener('DOMContentLoaded', setupNavigation);

        // 맨 위로 스크롤 이동 함수
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
