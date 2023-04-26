$('#btn1').click(() => {
    $('div').addClass('blue');
    $('div').css('width', '100px');
})
$('#btn2').click(() => {
    $('div').addClass('red');
    $('div').css('width', '+=50');
})


$('div').click(function () {
    console.log($(this).css('color'));
    console.log($(this).css('background-color'));
    const rc = '#'+Math.random().toString(16).substring(2,8);
    const rc2 = '#'+Math.random().toString(16).substring(2,8);
    $(this).css('background-color', rc);
    $(this).css('color', rc2);
    const temp = $(this).css(['color', 'background-color', 'height', 'font-size', 'width']);
    let elText = $(this).text();
    let html = `<h1>${elText}</h1><ul>`
    for (const prop in temp) {
        html += `<li>${prop}:${temp[prop]}</li>`;
    }
    html += '</ul>'
    outPut(html);
})

$('.div4').click( () => {
    outPut('test');
})

function outPut(val) {
    $('.div4').html(val);
}