var currentPage = 0;
$(document).ready(function(){
  
$('.book')

.on('click', '.activebook', nextPage)
.on('click', '.flippedbook', prevPage);

$('.book').hammer().on("swipeleft", nextPage);
$('.book').hammer().on("swiperight", prevPage);

function prevPage() {
  
  $('.flippedbook')
    .last()
    .removeClass('flippedbook')
    .addClass('activebook')
    .siblings('.page')
    .removeClass('activebook');
}
function nextPage() {
  
  $('.activebook')
    .removeClass('activebook')
    .addClass('flippedbook')
    .next('.page')
    .addClass('activebook')
    .siblings();
    
    
}



});