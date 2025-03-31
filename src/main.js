import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions';

const form = document.querySelector('.search-form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.info({
      title: 'Інформація',
      message: 'Будь ласка, введіть пошуковий запит.',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const images = await getImagesByQuery(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'Помилка',
        message: 'Не знайдено зображень за вашим запитом.',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Сталася помилка при отриманні зображень.',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});
