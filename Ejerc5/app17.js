let counter  = 0;
let temp =  '';
$('input').val('Laurance Skevis');
$('.main div').click(function () {
    $(this).data('past', $(this).text());
    counter++;
    const temp = $('input').val();
    const html = `${temp} Counter : ${counter}`;
    $(this).html(html);
})

$('#btn1').click( () => {
    const val = $('.div1').data('past');
    $('.div1').text(val);

    console.log(val);
})
$('#btn2').click( () => {
    const val = $('.div2').data('past');
    $('.div2').text(val);

    console.log(val);
})
$('#btn3').click( () => {
    const val = $('.div3').data('past');
    $('.div3').text(val);

    console.log(val);
})
$('#btn4').click( () => {
    const val = $('.div4').data('past');
    $('.div4').text(val);

    console.log(val);
})
