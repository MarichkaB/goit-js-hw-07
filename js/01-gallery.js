import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const imgMarkup = createItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imgMarkup);

function createItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
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
}

const onClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${source}"width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEsc);
      },
    }
  );
  function onEsc(evt) {
    console.log(evt);
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
};
gallery.addEventListener("click", onClick);
