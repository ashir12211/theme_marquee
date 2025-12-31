$('.counter-number').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// ---------------------------

$('#hamburger').click(function () {

    $('#hamburger').toggleClass('show');
    $('#overlay').toggleClass('show');
    $('.nav1').toggleClass('show');

});



// ---------------------------

let imgs = document.querySelectorAll('.change-img');
let imgsrc = document.querySelector('.set-img');
let atds = document.querySelectorAll('.atd');

function changeImg(imgs) {
    imgs.forEach(img => {
        img.addEventListener('click', () => {

            let imgname = img.querySelector('img').getAttribute('name')


            imgs.forEach(el => el.classList.remove('img-overlay'))
            img.classList.add('img-overlay')

            document.querySelectorAll(`.atd`).forEach(el => el.classList.add('d-none'))
            document.querySelector(`.atd[name="${imgname}"]`).classList.remove('d-none')

            imgsrc.setAttribute('src', img.querySelector('img').getAttribute('src'))

        });
    })
}


changeImg(imgs);

// ---------------------------

(function () {
    function initMarquees() {
        // 1. JS Controlled (Interactive Speed) Marquee
        const track = document.getElementById('js-track');
        const container = document.getElementById('js-marquee');

        if (track && container) {
            let scrollAmount = 0;
            let speed = 2; // Base speed

            // Clone content to ensure it fills the width for scrolling
            const content = track.innerHTML;
            track.innerHTML = content + content + content;

            // Animation Loop
            function animate() {
                scrollAmount -= speed;

                // Reset check (Seamless loop logic)
                const totalWidth = track.scrollWidth;
                const oneSetWidth = totalWidth / 3;

                if (scrollAmount <= -oneSetWidth) {
                    scrollAmount = 0;
                } else if (scrollAmount > 0) {
                    scrollAmount = -oneSetWidth;
                }

                track.style.transform = `translateX(${scrollAmount}px)`;
                requestAnimationFrame(animate);
            }

            // Mouse interaction
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const center = rect.width / 2;

                const val = (mouseX - center) / center; // -1 to 1
                speed = val * 15; // Max speed 15
            });

            container.addEventListener('mouseleave', () => {
                speed = 2; // Reset to default speed
            });

            animate();
        }

    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMarquees);
    } else {
        initMarquees();
    }
})();
