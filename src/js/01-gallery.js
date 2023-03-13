// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации

import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
    })
    .join('');
}

const lightBox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
});
