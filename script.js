//DO NOT DELETE
$('.pet').hover(function(e) {
  let imgSelector = $(this).find('img');
  let divSelector = $(this).find('div');
  $(imgSelector).toggle();
  $(divSelector).toggle();
});
