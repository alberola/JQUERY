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

$('#btn1').click(adder1);
$('#btn2').click(adder2);
$('#btn3').click(adder3);
$('#btn1').text('GET with para');
$('#btn2').text('GET Script JS');
$('#btn3').text('GET JSON');


function adder1() {
    const obj1 = {
        first: $('input').first().val(),
        last: $('input').last().val()
    };
    $.get(url,obj1,call1)
}

function call1 (rep) {
    console.log(rep.para);
    $.each(rep.para,(prop,val) => {
        const html = `${prop}[${val}] ${val.first} ${val.last}`;
        $('<div>').html(html).appendTo('.output');
    })
}

function adder2(){
    $.getScript('app32a.js', () => {
        logger('test working');
        $('<button>').text('Send Message').click( () => {
            logger($('input').first().val());
        }).appendTo('.btns');
    })
}

function adder3(){
    const url1 = `${url}?id=1000`;
    $.getJSON(url1, (data) => {
        console.log(data.para.id);
    })
}