$('#btn1').click(sendDataOver);
$('<input>').attr({
    type:'text',
    value:'Laurence',
    name:'first'
}).appendTo('.ins').before('First:').after('<br>');
$('<input>').attr({
    type:'text',
    value:'Svekis',
    name:'last'
}).appendTo('.ins').before('Last:').after('<br>');

$('#btn1').text('POST data');
const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
function sendDataOver() {
    const data = {
        first:$('input[name="first"]').val(),
        last:$('input[name="last"]').val()
    }
    console.log(data);
    //Tenemos la url donde enviamos los input (objeto), objeto creado con los valores de los inputs
    //Y por último podemosa agregar una función de callback que nos va a ejecutar cuando se envía un mensaje
    $.post(url, data, (rep,status) => {
        console.log(rep);
        console.log(status);
        if (status == 'success')  {
            const p = rep.para;
            const temp = `Status : ${status}<br> ${p.first} ${p.last}`;
            $('<div>').html(temp).appendTo('.output');
        }
    });
}