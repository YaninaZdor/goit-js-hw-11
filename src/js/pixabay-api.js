import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Замініть на свій ключ API

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
    throw error;
  }
}
