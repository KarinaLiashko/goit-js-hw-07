import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const imgCard = createImgCard(galleryItems);

function createImgCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link"
    href="${original}"><img class="gallery__image"
    src="${preview}" data-source = "${original}"
    alt = "${description}" width = "340"></img><a/></div>`
    }).join("")
};

gallery.insertAdjacentHTML("afterbegin", imgCard);

gallery.addEventListener('click', onImgOriginalCard);

function onImgOriginalCard(e) {
    e.preventDefault()
    if (!e.target.dataset.source)
        return console.log(e.target);
}

console.log(createImgCard);
