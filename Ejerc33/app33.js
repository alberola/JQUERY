//End Point
const url = 'https://script.google.com/macros/s/AKfycbzuGPGSdXCOOD9jQq4S0sx-OQxlOdL70sC_Z4AmWsRC6jnaxnwg8HGWfMBvalb-aD4U/exec';

//Inputs with the pred values sttings
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

$('#btn1').text('JSON File').click( () => {
    $.ajax({
        url : 'file30.json',
        success: (result) => {
            console.log(result);
            const html = `AJAX with file JSON data ${result.firstName} ${result.lastName}`;
            $('<div>').html(html).appendTo('.output');
        }
    });
});

$('#btn2').text('AJAX GET').click( () => {
    $.ajax({
        url:url,
        type:'GET',
        data:{
            firstName:$('input').first().val(),
            lastName:$('input').last().val()
        },
        dataType:'json'
    }).done( (data) => {
        console.log(data);
        const html = `AJAX with Data ${data.para.firstName} ${data.para.lastName}`;
        $('<div>').html(html).appendTo('.output');
    }).fail( (err) => {
        console.log(err);
    }).always ( (data) => {
        console.log(data);
    });
})

$('#btn3').text('AJAX POST').click( () => {
    $.ajax({
        url:url,
        type:'POST',
        data:{
            firstName:$('input').first().val(),
            lastName:$('input').last().val()
        },
        dataType:'json'
    }).done( (data) => {
        console.log(data);
        const html = `AJAX POST Data ${data.para.firstName} ${data.para.lastName}`;
        $('<div>').html(html).appendTo('.output');
    }).fail( (err) => {
        console.log(err);
    }).always ( (data) => {
        console.log(data);
    });
})