jQuery(document).ready(function() {
    svg4everybody({});
    jQuery('.slider__cat.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            769: {
                items: 2,
                nav: true,
                dots: false
            },
            1171: {
                items: 3,
                nav: true,
                dots: false
            }
        }
    });
    jQuery('.slider__popup.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            640: {
                items: 2,
                dots: true
            },
            769: {
                items: 2,
                dots: true,
                nav: true
            },
            1230: {
                items: 3,
                dots: true,
                nav: true
            }
        }
    });
    jQuery('.slider__see.owl-carousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            640: {
                items: 2,
                dots: true
            },
            769: {
                items: 2,
                dots: true,
                nav: true
            },
            1230: {
                items: 3,
                dots: true,
                nav: true
            }
        }
    });
    jQuery('.slider__work.owl-carousel').owlCarousel({
        loop: false,
        margin: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            640: {
                items: 2,
                dots: true
            },
            769: {
                items: 2,
                dots: true,
                nav: true
            },
            1230: {
                items: 3,
                dots: true,
                nav: true
            }
        }
    });

    // ************************************ BEGIN Галерея для страницы записи рубрики Проекты

    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                adaptiveHeight: true
            }
        }]
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        variableWidth: true,
        focusOnSelect: true
    });

    jQuery().fancybox({
        selector: '.slider-for .item:not(.cloned) a',
        hash: false,
        loop: true,
        thumbs: false,
        backFocus: false,
        buttons: ['zoom', 'download', 'close'],
        /* Руссификация */
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
                NEXT: "Следующий",
                PREV: "Предыдущий",
                ERROR: "Контент не может быть загружен. <br/> Попробуйте позже.",
                PLAY_START: "Начать слайдшоу",
                PLAY_STOP: "Остановить слайдшоу",
                FULL_SCREEN: "Полный экран",
                THUMBS: "Эскизы",
                DOWNLOAD: "Скачать",
                SHARE: "Поделиться",
                ZOOM: "Увеличить"
            }
        }
    });
    // END Галерея для страницы записи рубрики Проекты ************************************

    // Модальные окна -кнопка закрыть своя 
    jQuery(".modalbox").fancybox({
        btnTpl: {
            smallBtn: '<button data-fancybox-close class="fancybox-custom-close"><div class="cl-btn-7"></div></button>'
        }
    });

    // menu
    jQuery('.header-menu').click(function(event) {
        jQuery('.header__gumburg,.menu-toggle,.fon').toggleClass('active');
        jQuery('body').toggleClass('lock');
        if (jQuery(".form__search").hasClass('active')) {
            jQuery('.form__search').removeClass('active')
        }
    });
    jQuery('.fon').click(function(event) {
        jQuery('.header__gumburg,.menu-toggle,.fon').toggleClass('active');
        jQuery('body').toggleClass('lock');
        // if (jQuery(".form__search").hasClass('active')) {
        //     jQuery('.form__search').removeClass('active')
        // }
    });

    // поиск
    jQuery('.header-box').click(function(event) {
        jQuery('.form__search').toggleClass('active');
        jQuery('body').toggleClass('lock');
    })

    // кнопка наверх
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() != 0) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    });
    jQuery('#toTop').click(function() {
        jQuery('body,html').animate({ scrollTop: 0 }, 800);
    });

    // кнопка перемещения к форме обратной связи 
    jQuery('a[href="#f_zakaz"]').click(function() {
        var target = jQuery('.box_gl');
        jQuery('html, body').animate({ scrollTop: jQuery(target).offset().top - 80 }, 800);
        return false;
    });
    // кнопка перемещения к фотоотчетам  
    jQuery('a[href="#f_foto"]').click(function() {
        var target = jQuery('.box_proect__photo');
        jQuery('html, body').animate({ scrollTop: jQuery(target).offset().top - 80 }, 800);
        return false;
    });

    // Убрать title в ngg
    jQuery('.ngg-gallery-singlepic-image img').prop('title', '');

    // Калькулятор
    jQuery('#modal-calc__second').click(function() {
        jQuery('#modal-calc-2').addClass('on');
        jQuery('#modal-calc-2').removeClass('off');
        jQuery('#modal-calc-1').addClass('off');
        jQuery('#modal-calc-1').removeClass('on');
    });
});

// Полифилы
// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');

    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
} // closest IE 11

(function() {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }

            return null;
        };
    }
})(); // matches IE 11

(function() {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }
})(); //Array.form IE 11

if (!Array.from) {
    Array.from = function(object) {
        'use strict';

        return [].slice.call(object);
    };
}