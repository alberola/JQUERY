$('#btn1').click(adder1);

function adder1() {
    $.get('file30.json', (res) => {
        console.log(res);
        let html = `${res.firstName} ${res.lastName}`;
        $('<h2>').text(html).appendTo('.output');
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