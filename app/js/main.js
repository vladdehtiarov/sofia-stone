const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-menu');
const menuClose = document.querySelector('.menu__close');

burgerMenu.addEventListener('click', () => {
    headerMenu.classList.add('show');
});

menuClose.addEventListener('click', () => {
    headerMenu.classList.remove('show');
});



const downloadpdfBtn = document.querySelectorAll('.download-pdf-btn');
const inputNumber = document.querySelectorAll('.input-number');

const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

inputNumber.forEach(input => {
    const mask = IMask(input, maskOptions);
});


downloadpdfBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {

        inputNumber.forEach(input => {
            if (input.value.length === 16) {
                e.preventDefault();
                window.location.href="../documents/doc_1.docx";
            }
        });

    });
});

const activeBtn = document.querySelectorAll('.active-btn');

function showVibrate(btn) {
    btn.classList.add('jello-horizontal');
    
    function hideVibrate() {
        btn.classList.remove('jello-horizontal');
    }
    setTimeout(hideVibrate, 500);
}



activeBtn.forEach(btn => {
    btn.addEventListener('click', () => showVibrate(btn));
});

$('.slider-block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToSckroll: 1,
    centerMode: true,
    speed: 1200,
    variableWidth: true,
    prevArrow: `<button class="slider__btn prew-slide">
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`,
    nextArrow: `<button class="slider__btn next-slide">
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`,
});

$('.finished-goods__slider').slick({
    centerMode: true,
    centerPadding: '11.979vw',
    slidesToShow: 1,
    dots: true,
    speed: 2000,
    infinite: true,
    prevArrow: `<button class="slider-btn prew-slide">
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`,
    nextArrow: `<button class="slider-btn next-slide">
                    <img src="../images/arrow.svg" alt="arrow">
                </button>` 
});


const sliderThumbs = document.querySelectorAll('.slider-thumbs');

sliderThumbs.forEach(thumbs => {
    thumbs.addEventListener('click', function() {
        const smallImgWrapper = this.querySelector('.slider-thumbs__small-images');
        const bigImage = this.querySelector('.big-img');
        
        smallImgWrapper.addEventListener('click', (e) => {
            const smallImages = smallImgWrapper.querySelectorAll('.small-image');
            const target = e.target;
            const smallImage = target.closest('img');
            const smallImageWrapp = target.closest('.small-image');

            if(!smallImage) return;

            bigImage.src = smallImage.src;

            smallImages.forEach(img => {
                img.classList.remove('small-image_active');
            });

            smallImageWrapp.classList.add('small-image_active');

        });
    });
});