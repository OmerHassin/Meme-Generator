'use strict'

// Returns a random id of letters/digits.
function getRandomId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return id;
}

// Returns a random integer between the min - max range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

/////

//modals
function flashMsg(msg) {
    $('.user-msg').text(msg)
    $('.user-msg').addClass('open')
    setTimeout(() => {
        $('.user-msg').removeClass('open')
    }, 3000)
}

// .user-msg {
//     position: fixed;
//     bottom: -100px;
//     right: 10px;
//     background-color: hsl(160, 78%, 50%);
//     padding: 10px;
//     transition: bottom 0.5s;
//   }
  
//   .user-msg.open {
//     bottom: 10px;
//   }