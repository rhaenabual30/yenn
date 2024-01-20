document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a');
    var popup = document.getElementById("popup-1");
    var popupContent = document.querySelector('.popup .content');
    var header = document.getElementById("home");

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var isSocialIcon = link.classList.contains('social-icon');
            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            setTimeout(function () {
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('current');
                });
                link.classList.add('current');
            }, 200);

            if (isSocialIcon) {
                window.open(link.href, '_blank');
            }
        });
    });

    document.querySelector('.popup-btn').addEventListener('click', function () {
        togglePopup();
    });

    function togglePopup() {
        popup.classList.toggle("active");

        if (popup.classList.contains('active')) {
            showPopupContent();
        } else {
            hidePopupContent();
        }
    }

    document.querySelector('.close-btn').addEventListener('click', function () {
        togglePopup();
    });

    document.querySelector('.overlay').addEventListener('click', function () {
        togglePopup();
    });

    window.addEventListener('scroll', function () {
        var headerHeight = header.offsetHeight;

        if (popup.classList.contains('active') && window.scrollY > headerHeight) {
            hidePopupContent();
        } else {
            showPopupContent();
        }
    });

    function showPopupContent() {
        popupContent.style.display = 'block';
    }

    function hidePopupContent() {
        popupContent.style.display = 'none';
    }

    // Additional code for FAQs
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('open');
            question.classList.toggle('active');

            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
});
