import { galleryItems } from "./gallery-items.js";

const basicLightbox = window.basicLightbox;
let instance = null;
const containerEl = document.querySelector(".gallery");

const cardsMarcup = createImageEl(galleryItems);

containerEl.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageEl(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a     class="gallery__link"     href ='${original}'>
    <img 
    class='gallery__image' 
    src='${preview}' 
    alt='${description}' 
    data-source='${original}'>
    </a>
    </li>
    `;
    })
    .join("");
}

containerEl.addEventListener("click", openImgClick);

function openImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  document.addEventListener("keydown", closeEsc);

  const modal = event.target.dataset.source;

  instance = basicLightbox.create(
    `<img src="${modal}" width="800" height="600">`
  );

  instance.show();
}

function closeEsc(event) {
  if (event.code === "Escape" && instance.visible()) {
    instance.close();
    document.removeEventListener("keydown", closeEsc);
  }
}
