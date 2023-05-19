// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href='${original}'><img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'/></a></li>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

console.log(document.querySelector('a'));

gallery.addEventListener('click', handleGetImg);

function handleGetImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const imgUrl = e.target.dataset.source;
  console.log(imgUrl);
  const modal = basicLightbox.create(
    `<img src="${imgUrl}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  modal.show();
  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    modal.close();
  }
}