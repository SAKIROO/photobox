import { loadResource } from './lib/photoloader.js';

let currentGallery = null;

export async function loadGallery(url = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos") {
    try {
        const data = await loadResource(url);
        if (data && data.photos) {
            currentGallery = data;
            return data;
        }
        console.error("Erreur lors du chargement de la galerie.");
        return null;
    } catch (error) {
        console.error("Erreur lors du chargement de la galerie :", error);
        return null;
    }
}

export function getNextPage() {
    return currentGallery?.links?.next?.href;
}

export function getPrevPage() {
    return currentGallery?.links?.prev?.href;
}

export function getFirstPage() {
    return currentGallery?.links?.first?.href;
}

export function getLastPage() {
    return currentGallery?.links?.last?.href;
}
