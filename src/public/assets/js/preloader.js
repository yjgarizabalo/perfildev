// var container = document.getElementById('container-loader');
// setTimeout(function() {
// 	container.classList.add('cerrar');
//   document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
// }, 20000)

$(window).on('load', function () {
    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 2000);
   
});