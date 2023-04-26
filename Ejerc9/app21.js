$('.main div').addClass('box').hover(function () {
    $(this).css('background-color', 'red')},
    function () {
        $(this).css('background-color', 'white')
}).mouseenter(function (e) {
    // $(this).text(`(X:${e.pageX}, Y:${e.pageY}`);
})

$('.main div').mouseup(function () {
    $(this).text('MOUSE UP');
    $(this).css('background-color', 'blue');
}).mousedown(function () {
    $(this).text('MOUSE DOWN');
    $(this).css('background-color', 'green');
})
$('.main').mouseout( () => {
    $('.div2').text('Mouse OUT on MAIN');
})
$('.main').mouseover( () => {
    $('.div2').text('Mouse OVER on MAIN');
})
$('.main').mouseleave( () => {
    $('.div3').text('Mouse LEFT on MAIN');
})
$('.main').mouseenter( () => {
    $('.div3').text('Mouse ENTER on MAIN');
})

$('button').css('width', '100px');
$('button').mouseenter(function () {
    $(this).css('background-color', 'red');
});
$('button').mouseleave(function () {
    $(this).css('background-color', 'white');
});

$(document).mousemove(function (e) {
    $('.div1').text(`(X:${e.pageX}, Y:${e.pageY}`);
})