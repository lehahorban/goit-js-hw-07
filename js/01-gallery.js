import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery")
console.log(galleryList);
console.log(galleryItems);

function renderItem(galleryArray) {
const markup = galleryArray.map(({preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
    .join("")
console.log(markup);
galleryList.insertAdjacentHTML("afterbegin", markup)
}
renderItem(galleryItems)

galleryList.addEventListener("click", showModal)

function showModal(e) {
  e.preventDefault()
  const imageItem = e.target.classList.contains('gallery__image')
  if (!imageItem) {
    return
  }
  else {
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}"/>
`)

instance.show()
  }
  console.log(e.target);
}