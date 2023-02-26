import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onImgOriginalCard);

function onImgOriginalCard(e) {
  e.preventDefault();

    if (!e.target.nodeName !== "IMG") {
        return;
    }

const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">`
//   {
//     onShow: () => document.addEventListener("keydown", onCloseModal),
//     onClose: () => document.addEventListener("keydown", onCloseModal),
  // }
);
  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
  
//   function onCloseModal(event) {
//     if (event.code === "Escape") {
//       instance.close();
//   }
// }
}




