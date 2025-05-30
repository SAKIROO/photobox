import { loadPicture, loadResource } from './lib/photoloader.js';
import { displayPicture, displayCategory, displayComments } from './ui.js';
import { display_galerie } from './gallery_ui.js';
import { getNextPage, getPrevPage, getFirstPage, getLastPage, loadGallery } from './gallery.js';

export async function getPicture(id) {
    try {
        const picture = await loadPicture(id);
        console.log('Données photo reçues :', picture);

        if (picture) {
            displayPicture(picture);

            if (picture.links?.categorie) {
                console.log('URL catégorie :', picture.links.categorie.href);
                const categoryData = await loadResource(picture.links.categorie.href);
                console.log('Données catégorie chargées :', categoryData);
                if (categoryData?.categorie) {
                    displayCategory(categoryData.categorie);
                } else {
                    console.warn("Pas de catégorie trouvée pour cette photo.");
                }
            } else {
                console.warn("Aucun lien vers la catégorie.");
            }

            if (picture.links?.comments) {
                console.log('URL commentaires :', picture.links.comments.href);
                const commentsData = await loadResource(picture.links.comments.href);
                console.log('Données commentaires chargées :', commentsData);
                if (commentsData?.comments) {
                    displayComments(commentsData.comments);
                } else {
                    console.warn("Pas de commentaires trouvés pour cette photo.");
                }
            } else {
                console.warn("Aucun lien vers les commentaires.");
            }
        }
    } catch (error) {
        console.error("Erreur dans getPicture :", error);
    }
}

const hash = window.location.hash.substring(1) || '100';
getPicture(hash);

document.getElementById('btn_load_gallery')?.addEventListener('click', async () => {
    const gallery = await loadGallery();
    if (gallery) display_galerie(gallery);
});

document.getElementById('btn_next')?.addEventListener('click', async () => {
    const url = getNextPage();
    if (url) {
        const gallery = await loadGallery(url);
        if (gallery) display_galerie(gallery);
    }
});

document.getElementById('btn_prev')?.addEventListener('click', async () => {
    const url = getPrevPage();
    if (url) {
        const gallery = await loadGallery(url);
        if (gallery) display_galerie(gallery);
    }
});

document.getElementById('btn_first')?.addEventListener('click', async () => {
    const url = getFirstPage();
    if (url) {
        const gallery = await loadGallery(url);
        if (gallery) display_galerie(gallery);
    }
});

document.getElementById('btn_last')?.addEventListener('click', async () => {
    const url = getLastPage();
    if (url) {
        const gallery = await loadGallery(url);
        if (gallery) display_galerie(gallery);
    }
});
