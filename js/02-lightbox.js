import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery")
console.log(galleryList);
console.log(galleryItems);

function renderItem(galleryArray) {
const markup = galleryArray.map(({preview, original, description }) =>
    `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
   </li>`)
    .join("")
console.log(markup);
galleryList.insertAdjacentHTML("afterbegin", markup)
}
renderItem(galleryItems)

galleryList.addEventListener("click", showModal)

function showModal(e) { 
    e.preventDefault()
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
}