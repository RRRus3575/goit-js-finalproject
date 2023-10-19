import { galleryItems } from "./gallery-items.js";

const containerEl = document.querySelector(".gallery");

const cardsMarcup = createImageEl(galleryItems);

containerEl.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageEl(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a  href ='${original}'>
    <img class='gallery__image' src='${preview}' alt='${description}' data-source='${original}'>
    </a>
    </li>
    
    `;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
