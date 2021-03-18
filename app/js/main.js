const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-menu');
const menuClose = document.querySelector('.menu__close');

burgerMenu.addEventListener('click', () => {
    headerMenu.classList.add('show');
});

menuClose.addEventListener('click', () => {
    headerMenu.classList.remove('show');
});

const btn = document.querySelectorAll('.blick');

function blickAnim() {
  btn.forEach(btn => {
    btn.classList.add('blink-active');
    
    setTimeout(removeAnim, 1000);
    
    function removeAnim() {
      btn.classList.remove('blink-active');
    }
  });  
}

setInterval(blickAnim, 3000);


const downloadpdfBtn = document.querySelectorAll('.download-pdf-btn');
const inputNumber = document.querySelectorAll('.input-number');
const inputNumb = document.querySelector('.input-number');

$(function(){	 
	$('.mask').mask('+7 (999) 999-99-99');
});
	
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
};
$('.mask').click(function(){
  $(this).setCursorPosition(4);  // set position number
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

const blick = document.querySelectorAll('.blick');
const smallBlick = document.querySelectorAll('.small-blick');

function showVibrate(btn) {
    btn.classList.add('move');
  
    function hideVibrate() {
        btn.classList.remove('move');
    }
    setTimeout(hideVibrate, 500);
}

blick.forEach(btn => {
    btn.addEventListener('click', () => showVibrate(btn));
});

smallBlick.forEach(btn => {
    btn.addEventListener('click', () => showVibrate(btn));
});

$('.slider-block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToSckroll: 1,
    centerMode: true,
    speed: 800,
    variableWidth: true,
    prevArrow: `<button class="slider-control btn-prew">
                    <div class="slider__btn prew-slide"></div>
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`,
    nextArrow: `<button class="slider-control btn-next">
                    <div class="slider__btn next-slide"></div>
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`,
});

$('.finished-goods__slider').slick({
    centerMode: true,
    centerPadding: '11.979vw',
    slidesToShow: 1,
    dots: true,
    speed: 1200,
    infinite: true,
    prevArrow: `<button class="slider-control btn-prew">
                    <div class="slider__btn prew-slide"></div>
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`,
    nextArrow: `<button class="slider-control btn-next">
                    <div class="slider__btn next-slide"></div>
                    <img src="../images/arrow.svg" alt="arrow">
                </button>`, 
});


const slide = document.querySelectorAll('.slide');

slide.forEach(slide => {
    slide.addEventListener('click', function(e) {
        const target = e.target;
        const smalImg = target.closest('.small-image');
        const bigImg = this.querySelector('.big-img');
        const smallImages = this.querySelectorAll('.small-image');
        
        if(target.classList.value == 'small-img') {
            bigImg.src = target.src;

            smallImages.forEach(img => {
                img.classList.remove('small-image_active');
            });

            if(smalImg.classList.contains('small-image_active')) {
                smalImg.classList.remove('small-image_active');
            } else {
                smalImg.classList.add('small-image_active');
            }
        }
    });
});