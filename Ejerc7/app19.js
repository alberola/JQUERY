$('#btn1').click(function(){
    console.log($(this).index());
})
$('.main div').click(function () {
    const val = $(this).index();
    const temp = $(this).text();
    $(this).text(`${val} ${temp}`);
})
const $ul = $('<ul>').prependTo('nav');
for(let i = 0; i<10 ; i++){
    $('<li>').text(`${i} List Item`).appendTo($ul).click(function () {
        console.log($(this).index());
    });
}


