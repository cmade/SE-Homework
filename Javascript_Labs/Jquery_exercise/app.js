const list = [];
$('form').on('submit', (e) => {
  console.log($('#input-box').val());

  list.push($('#input-box').val());

  e.preventDefault();
  $(e.currentTarget).trigger('reset');
  render();
});

const render = () => {
  console.log('list: ', list);
  $('ul').append('<li>' + list[list.length - 1] + '</li>');
  $('li').on('click', (e) => {
    $(e.currentTarget).css('text-decoration', 'line-through');
    $(e.currentTarget).effect('shake', 'slow');
  });
};
