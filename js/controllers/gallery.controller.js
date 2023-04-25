'use strict'

function onGalleryInit() {
    renderImages()
    renderKeywords()
}

function hideGallery() {
    document.querySelector('.gallery-container').classList.add('display-none')
}

function renderKeywords() {
    const keywords = getKeywords()
    const strHTMLs = keywords.map(keyword => `<a class="keyword" id="${keyword}" onclick="renderImages(this.id)">${keyword}</a>`)
    document.querySelector('.keywords-container').innerHTML = strHTMLs.join('')
}

function renderImages(keyword) {
    const imgs = getImgsForDisplay(keyword)
    const strHTMLs = imgs.map((img, idx) => `<img src="${img.url}" onclick="onImgSelect(this)" class="meme-img" id="${img.id}" alt="Image ${idx}">`)
    document.querySelector('.gallery').innerHTML = (imgs.length)? strHTMLs.join('') : msg
}

function toggleMenu() {
    
}