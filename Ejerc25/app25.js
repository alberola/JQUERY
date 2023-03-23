let counter = 1;

$('button').click( () => {
    counter++;
    const r = Math.floor(Math.random()*200)+100;
    const c = '#'+Math.random().toString(16).substring(2, 8);
    const id = 'id'+counter;
    $('<div>').text('New Div').css('height', r+'px').attr('id', id).css('background-color', c).appendTo('body');
    //output
    $('<a>').attr('href', '#'+id).text(id+'').appendTo('.output');
})

$(window).scroll((e) => {
    console.log(e);
})
$(window).resize((e) => {
    console.log($(window).height());
    console.log($(document).height());
})