import { getPicture } from './index.js';

const URL = 'https://webetu.iutnc.univ-lorraine.fr';

export function display_galerie(gallery) {
    const container = document.querySelector('#la_galerie');
    container.innerHTML = '';

    gallery.photos.forEach(photo => {
        const vignette = document.createElement('div');
        vignette.className = "vignette";
        vignette.dataset.photoId = photo.id;

        const img = document.createElement('img');
        img.src = `${URL}${photo.photo.thumbnail.href}`;
        img.alt = photo.titre;

        const titre = document.createElement('p');
        titre.textContent = photo.titre;

        vignette.appendChild(img);
        vignette.appendChild(titre);
        container.appendChild(vignette);

        vignette.addEventListener('click', () => {
            getPicture(photo.photo.id);
            vignette.addEventListener('click', () => {
                getPicture(photo.id);
            });

        });
    });
}
