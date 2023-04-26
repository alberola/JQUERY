$('<select>').appendTo('.main');
for (let i = 0; i < 5; i++) {
    const val = `${i+1} Value`;
    $('<option>').val(val).text(val).appendTo('select');
}
$('select').change(function () {
    $('.output').text($(this).val());
})

$('input[type="text"]').change(function() {
    $('.output').text($(this).val());
})

$(':input').select(function () {
    console.log('selected');
})

$('.main').submit(function (e) {
    e.preventDefault();
    console.log('form submitted');
})

//Función para hacer que el botón 1 pueda enviar el formulario también
$('#btn1').click( ()=> {
    $('.main').submit();
})