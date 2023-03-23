$('#btn1').click(adder1);
$('#btn2').click(adder2);
$('#btn3').click(adder3);

function adder2() {
    $.get('https://www.discoveryvip.com/shared/person.json', (data) => {
        //Importante definir ind y val porque si solo definimos val nos imprimira el nombre del atributo al que hacemos referencia
        $.each(data, (ind,val) => {
            console.log(val);
        });
    })
}
function adder3() {
    $.get('https://www.discoveryvip.com/shared/books1.json', (data) => {
        console.log(data.books);

        let val1 = JSON.stringify(data.books);

        $.each(data.books, (ind,val) => {
            val1 += `<div>${val.title}`;
            val1 += ` - ${val.author}</div>`;
        });
        $('<div>').html(val1).appendTo('.output');
    })
}

function adder1() {
    //FETCH CON DATOS SIMILAR AL JSON PROPIO
    //https://www.discoveryvip.com/shared/person.json
    $.get('file30.json', (res) => {
        console.log(res);
        let html = `${res.firstName} ${res.lastName}`;
        $('<h2>').text(html).appendTo('.output');
        const a  = res.address;
        let val1 = `${a.city}</br>${a.postalCode}<br>${a.state}<br>${a.street}`;
        $('<div>').html(val1).appendTo('.output');
        console.log(val1);
        $ul = $('<ul>');
        $ul.appendTo('.output');
        //Each equivale a un for each en lenguaje JQUERY donde definimos el indice y el valor
        $.each(res.phoneNumbers,(ind,val) => {
            console.log(val);
            const temp = `${ind+1}. ${val.number} (${val.type})`;
            $('<li>').text(temp).appendTo($ul);
        })
    })
}