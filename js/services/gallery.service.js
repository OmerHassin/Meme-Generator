'use strict'

const NUM_OF_IMG = 18

const gImgs = _createImgs()
const gKeywords = _createKeywords()
const gKeywordSearchCountMap = _createKeywordSearchCountMap()

function getImgById(id) {
    return gImgs.find(img => img.id === id)
}

function getKeywords() {
    return gKeywords
}

//add filter to keyword
function getImgsForDisplay(keyword) {
    return gImgs
}

function _createImgs() {
    const imgs = []
    for (var i = 1; i <= NUM_OF_IMG; i++) {
        const img = {
            id: i,
            url: `img/squares/${i}.jpg`,
            keywords: (i % 3 === 0) ? ['funny', 'nba'] : ['funny', 'politics']
        }

        imgs[i] = img
    }
    
    return imgs.slice(1)
}

function _createKeywordSearchCountMap() {
    return gKeywords.reduce((acc, keyword) => {
        acc[keyword] = 0
        return acc}, {})
}

function _createKeywords() {
    return ['politics','nba', 'funny', 'kid']
}