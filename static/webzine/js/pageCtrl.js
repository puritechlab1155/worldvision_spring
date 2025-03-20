


        // 페이지 URL을 배열로 정의
        const pages = [
            'index.html',
            'specialStory.html',
            'patrons.html',
            'flyingSeagull.html',
            'specialProgram.html',
            'scene01.html',
            'scene02.html',
            'camp.html',
            'news.html'
        ];

        // 현재 페이지를 찾기 위한 함수
        function getCurrentPageIndex() {
            const currentPage = window.location.pathname.split('/').pop();
            return pages.indexOf(currentPage);
        }

        // 버튼 클릭 이벤트 처리 함수
        function setupNavigation() {
            const homeButton = document.getElementById('homePage');
            const prevButton = document.getElementById('prevPage');
            const nextButton = document.getElementById('nextPage');
            
            const currentIndex = getCurrentPageIndex();
            
            if (currentIndex > 0) {
                prevButton.addEventListener('click', () => {
                    window.location.href = pages[currentIndex - 1];
                });
                prevButton.disabled = false; // 이전 페이지가 존재하면 활성화
            } else {
                prevButton.disabled = true; // 첫 페이지에서는 비활성화
            }
            
            if (currentIndex < pages.length - 1) {
                nextButton.addEventListener('click', () => {
                    window.location.href = pages[currentIndex + 1];
                });
                nextButton.disabled = false; // 다음 페이지가 존재하면 활성화
            } else {
                nextButton.disabled = true; // 마지막 페이지에서는 비활성화
            }
            
            homeButton.addEventListener('click', () => {
                window.location.href = 'index.html'; // 메인 홈페이지 URL로 설정
            });
        }

        // 페이지 로드 시 네비게이션 설정
        document.addEventListener('DOMContentLoaded', setupNavigation);

        // 맨 위로 스크롤 이동 함수
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
