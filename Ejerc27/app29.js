$('#btn1').click( () => {
    $('.output').load('file29.html', (rep, status, xhr) => {
        if ( status == 'success') {
            console.log(rep,status);
            console.log('SUCCESS!!!!');
        } else {
            console.log(rep,status);
            console.log('Help!!!');
        }

        console.log(xhr);
    });
})
$('#btn2').click( () => {
    $('.output').load('file29a.txt', (rep, status, xhr) => {
        if ( status == 'success') {
            console.log(rep,status);
            console.log('SUCCESS!!!!');
        } else {
            console.log(rep,status);
            console.log('Help!!!!');
        }

        console.log(xhr);
    });
})
$('#btn3').click( () => {
    $('.output').load('file29b.txt', (rep, status, xhr) => {
        if ( status == 'success') {
            console.log(rep,status);
            console.log('SUCCESS!!!!');
        } else {
            console.log(rep,status);
            console.log('Help!!!!');
        }

        console.log(xhr);
    });
})