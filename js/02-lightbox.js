import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const imgGallery = document.querySelector(".gallery");
const imgMarkup = galleryItems
  .map(
    (item) => `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
  )
  .join("");

imgGallery.insertAdjacentHTML("beforeend", imgMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  captionType: "alt",
});
