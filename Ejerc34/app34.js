$title = 'Learn JQuery Course';
$('<h1>').html($title).insertBefore('.buttons');

$counter = 0;
printCounter();

$('<button>').text('Click Me').click( () => {
    $counter++;
    printCounter();
}).appendTo('.buttons');

$('<button>').text('Reset').click ( () => {
    $counter = 0;
    printCounter();
}).appendTo('.buttons');


function printCounter () {
    $('.counter').text($counter);
}