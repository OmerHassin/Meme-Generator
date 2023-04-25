'use strict'

const STORAGE_KEY = 'savedMemesDB';

var gMeme = null
var gCanvasHeight
var gCanvasWidth

function createMeme(selectedImgId) {
    gMeme = {
        selectedImgId,
        selectedLineIdx: 0,
        lines: [
        {
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
        }
        ]
    }
}

function getMeme() {
    return gMeme
}