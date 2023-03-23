const game = {
    score:0,
    gameover:true,
    last:0,
    holes: 12,
    ender: 25
}
makeGameBoard();
$('.game').on('click', '.mole', hitMole);
$('#start').click(startGame);

function hitMole () {
    $(this).hide().parent().find('.hit').show().fadeOut(500, function () {
        $(this).parent().find('.dirt').show();
    })
    game.score++;
    mes();
}

function mes() {
    let html = `<div>Score : ${game.score}</div><div>Moles Left : ${game.ender}</div>`;
    $('.message').html(html);
}

function starter () {
    const $ele = $('.hole'+ranHole());
    showMole($ele);
}

function showMole($ele) {
    game.ender--;
    mes();
    if (game.ender <= 0) {
        game.gameover = true;
        $('#start').show();
    }
    const timer = Math.round(Math.random() *1000+200);
    $ele.find('.dirt').hide(0, () => {
        $ele.find('.mole').show();
    });
    setTimeout( () => {
        $ele.find('.dirt').show()
        $ele.find('.mole').hide()
        $ele.find('.hit').hide()
        if (!game.gameover) {
            starter();
        }
    }, timer);
}

function ranHole () {
    const val = Math.floor(Math.random()*game.holes);
    if (val == game.last) {
        return ranHole();
    }
    game.last = val;
    return val;
}

function startGame(){
    $('#start').hide();
    game.gameover = false;
    game.score = 0;
    game.ender = 25;
    starter();
}

function makeGameBoard(){
    for (let i = 0; i<game.holes; i++) {
        $div = $('<div>');
        const temp = `hole${i}`;
        $div.addClass('hole').addClass(temp).appendTo('.game');
        $('<div>').addClass('mole').html('X').appendTo($div);
        $('<div>').addClass('dirt').html('O').appendTo($div);
        $('<div>').addClass('hit').html('/').appendTo($div);
    }
}