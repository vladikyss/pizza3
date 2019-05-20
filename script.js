$(document).ready(function() {
$('.arrow').on('click', () => {
    $('html, body').animate({
        scrollTop: $('.wrapper-products').offset().top
    }, 750)
})

$('.add').on('click', function() {
    var val = parseInt($(this).closest('.order-bar').find('.counter').val());
    $(this).closest('.order-bar').find('.counter').val(++val);
        
});

$('.remove').on('click', function() {
    var val = parseInt($(this).closest('.order-bar').find('.counter').val());
    if ( val != 1 ) {
    $(this).closest('.order-bar').find('.counter').val(--val);
        }
});


// counter of pizza orders
var pizza_amount = 0;
$('.order-bar button').click(function() {
    var add_pizza = parseInt($(this).closest('.order-bar').find('.counter').val());
    pizza_amount += add_pizza;
    $('.trolley-counter p').html(pizza_amount).css('display', 'block');
 })

//menu change on scrolll
$(window).on('scroll touchmove', function(e){
    var st = $(this).scrollTop();
    if ( $('.menu-desktop').css('z-index') != '100' && st > $('.wrapper-products').offset().top ) {
        $('.mobile-menu').addClass('mobile-menu-scroll');
        $('.trolley img').attr('src', 'img/trolley-black.svg');
        $('.logo-mobile').addClass('logo-click');

    } else {
       $('.mobile-menu').removeClass('mobile-menu-scroll'); 
       $('.trolley img').attr('src', 'img/trolley-white.svg');
       $('.logo-mobile').removeClass('logo-click');
    }
    });

  
//Click menu icon
$('.menu-hamburger').click(function() {
    
    $('.menu-toggle-phone').toggleClass('menu-toggle-phone-active');
    $('.menu-list').toggleClass('menu-list-active');
    
    
    var src = $('img', this).attr('src');
    if(src === 'img/pizza.svg') {
        src = 'img/pizza-menu-active.svg';
        $('img', this).css('transform', 'rotate(45deg)');
    } else {
        src = 'img/pizza.svg';
        $('img', this).css('transform', 'none' );
        $('.menu-text').removeClass('menu-text-vis');

    }
    $('img', this).attr('src', src);
    
    var trolleySrc = $('.trolley img').attr('src');
    if (trolleySrc === 'img/trolley-black.svg') {
        trolleySrc = 'img/trolley-white.svg';
    } else {
        trolleySrc = 'img/trolley-black.svg';
    } 
    
    var st = $(window).scrollTop();
    var wrapOffset = $('.wrapper-products').offset().top;
    if (st > wrapOffset) {
        $('.mobile-menu-scroll').toggleClass('mms-click');
        $('.logo-mobile').toggleClass('logo-click');
        $('.trolley img').attr('src', trolleySrc);
    }
    

});

  // paragraphs in menu
$('.menu-list').children().click(function() {
    $(this).closest('.text-par').find('.menu-text').toggleClass('menu-text-vis');
});


  //desktop menu 
function desktop() {
    var menuDesktop = $('.menu-desktop');
    if (menuDesktop.css('z-index') === '100') {
    $('.menu-list').children().appendTo($('.menu-desktop'));
    $('.trolley').appendTo(menuDesktop);
    $('.menu-desktop h1').show();
    $('.mobile-menu').hide();
    $('body').not('.menu-list').css('padding-left', '176px');
    } 
  else if((menuDesktop.css('display') === 'none') && ($('body').css('padding-left') === '176px' )) {
      $('.trolley').prependTo($('.mobile-menu'));
      $('.menu-desktop h1').hide();
      menuDesktop.children().appendTo($('.menu-list'));
      $('.mobile-menu').show();
      $('body').css('padding-left', '0');
      }
    }
   
desktop();
$(window).resize(desktop);

//Logo pizza eye move  


  $($('.main')).on('mousemove', function(e) {
      var X = e.pageX;
      var Y = e.pageY;
      var eyeTop = $('.eye').css('top');
    
      $('.eye').css('left', X/20+105);
      if (X > 1230) {
      $('.eye').css('left', 166);  
      }
      else if (X < 423) {
      $('.eye').css('left', 126);
      }
      
      $('.eye').css('top', Y/40+85);
      if (Y < 192 ) {
        $('.eye').css('top', 90)
      }
  });
  
  
   function vegAnimate() {
     
     $('.gr1').animate({
      top: '+=10px',
      left: '+=8px'
    }, 1700, function() {
      $(this).animate({
        top: '-=10px',
        left: '-=8px'

      },1700)
    });
     
     $('.gr2').animate({
      top: '-=10px',
      right: '+=4px'
    }, 1500, function() {
      $(this).animate({
        top: '+=10px',
        right: '-=4px'

      },1500)
    });
     
      $('.gr3').animate({
      top: '+=12px',
      left: '+=2px'
    }, 1200, function() {
      $(this).animate({
        top: '-=12px',
        left: '-=2px'

      },1200)
    });
    
    
     
   }
    
  vegAnimate();
  setInterval(vegAnimate, 3401); 
 



});





  

  
  
  













