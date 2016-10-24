
//Almaceno lo que voy a usar 
var slider=$('#slider');
var next=$('#btn-next');
var prev=$('#btn-prev');

//Mover última imagen a primer posicion
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');


function moverRight(){
  slider.animate({
      marginLeft:'-'+200+'%'
  } ,700, function(){
      $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
      slider.css('margin-left', '-'+100+'%');
  });
}

function moverLeft(){
  slider.animate({
    marginLeft:0
} ,700, function(){
    $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
    slider.css('margin-left', '-'+100+'%');
});
}

next.on('click', function(){
  moverRight();
  clearInterval(interval);
    autoplay();
});

prev.on('click', function(){
  moverLeft();
  clearInterval(interval);
    autoplay();
});


function autoplay() {
    interval = setInterval(function(){
        moverRight();
    }, 5000);
}



autoplay();























