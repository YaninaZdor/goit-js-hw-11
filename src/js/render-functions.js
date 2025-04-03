import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './pixabay-api';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function imageTemplate(img) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = img;
  const markup = `<li class="photo-card"><a class="gallery-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}"/></a><div class="info"><div class="block">
  <h2 class="tittle">Likes</h2>
  <p class="amount">${likes}</p>
</div>
<div class="block">
  <h2 class="tittle">Views</h2>
  <p class="amount">${views}</p>
</div>
<div class="block">
  <h2 class="tittle">Comments</h2>
  <p class="amount">${comments}</p>
</div>
<div class="block">
  <h2 class="tittle">Downloads</h2>
  <p class="amount">${downloads}</p>
</div></div></li>`;
  return markup;
}

export function showLoader() {
  refs.gallery.classList.add('hidden');
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}

export function imagesTemplate(arr) {
  hideLoader();
  return arr.map(imageTemplate).join('');
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function imagesTemplate(arr) {
  hideLoader();
  clearGallery();
  return arr.map(imageTemplate).join('');
}
