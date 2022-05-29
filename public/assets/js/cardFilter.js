// function filterCards(){
//   const gets = document.getElementsByClassName('Manhuaçu')
//   const novo = gets.item.classList
//   console.log(novo)
  
  
  
// }

$('.filter-btn').on('click', function(){

  // let type = $(this).attr('id'); //aqui que eu estou pegando quais serão as filtragens
  // let boxes = $('project-box');

  $('.cardsSelect').each(function(){
    if(!$(this).hasClass('Manhuaçu')){
      $(this).fadeOut('slow')
      console.log('caiu aqui')
    }
    else {
      $(this).fadeIn()
      console.log('caiu aqui 2')
    }
  })

})