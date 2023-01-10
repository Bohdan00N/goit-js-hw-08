import { galleryItems } from './gallery-items';
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRefs = document.querySelector('.gallery');
galleryRefs.addEventListener('click', onShowBigImage);

(function createGalleryMarkup() {
  const elementCreateGallery = galleryItems
    .map(({ original, preview, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery--original" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })

    .join('');
  galleryRefs.insertAdjacentHTML('beforeend', elementCreateGallery);
})();

function onShowBigImage(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
}
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
