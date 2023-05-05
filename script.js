$(document).on('click', '.cardapio-img', function () {
    $(this).toggleClass('cardapio-img-zoomed');
    $('.cardapio-modal').toggleClass('cardapio-modal-scrollable');
    $(this).toggleClass('cardapio-img-scrollable');
});
  
$(document).on('click', '.cardapio-img-close', function () {
    $('.cardapio-img').removeClass('cardapio-img-zoomed cardapio-img-scrollable');
    $('.cardapio-modal').removeClass('cardapio-modal-scrollable');
});
  
  