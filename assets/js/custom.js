$(document).ready(function() {
    $('.slider-box').slick({
        dots: true,
        appendArrows: '.first-screen-nav',

        responsive: [{
            breakpoint: 992,
            settings: {
                appendArrows: false,
                dots: true,
            }
        }, ]
    });
});

mobileOnlySlider("#slider-box_min1", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint){
    var slider = $($slidername);
    var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
            {
                breakpoint: $breakpoint,
                settings: "unslick",
            }
        ]
    }

    slider.slick(settings);
};

const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function() {
    //burger.classList.add('is-active')
    //burger.classList.remove('hamburger')
    //burger.classList.replace('hamburger', 'is-active')

    burger.classList.toggle('is-active')
})




const checkButton = document.querySelectorAll('[type="checkbox"]');

checkButton.forEach((item, index) => {
    index === 0 ? item.closest('.form-parent').classList.add("check-box_calculation") : null;
});


document.getElementById('file-1').onchange = function() {
    //short name
    document.getElementById('file-name').innerHTML = this.files[0].name;

    //long name
    //document.getElementById('file-name').innerHTML = this.value;
};



// const checkButtons = document.querySelectorAll('.check-button');
// console.log(checkButtons);

// checkButtons.forEach((item, index) => {
//   const colParent = item.closest('.col-lg-6');
//    colParent ? colParent.classList.add('padding-bottom') : null;

//    index === 5 ? item.classList.add("bg-warning") : null;
// });

// document.querySelectorAll('.check-button')[1].classList.add("this-is-legasy-code")



$('.template-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('.arows-card'),
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          }
        },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
});