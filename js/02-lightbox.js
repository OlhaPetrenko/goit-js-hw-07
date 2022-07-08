import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

const GalleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", GalleryItemsMarkup);

function creatGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description } = {}) => {
      return `
      <li class="gallery__item">
        <a  href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `;
    })
    .join("");
  console.log(markup);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
