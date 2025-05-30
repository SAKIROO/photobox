const URL = 'https://webetu.iutnc.univ-lorraine.fr';

export async function loadPicture(id) {
    const url = `${URL}/www/canals5/phox/api/photos/${id}`;
    try {
        const response = await fetch(url, { credentials: 'include' });
        if (!response.ok) throw new Error("Erreur HTTP " + response.status);
        return await response.json();
    } catch (error) {
        console.error("Erreur de chargement de l'image :", error);
        return null;
    }
}

export async function loadResource(uri) {
    const fullUrl = uri.startsWith('http') ? uri : `${URL}${uri}`;
    try {
        const response = await fetch(fullUrl, { credentials: 'include' });
        if (!response.ok) throw new Error("Erreur HTTP : " + response.status);
        return await response.json();
    } catch (error) {
        console.error("Erreur de chargement de la ressource :", error);
        return null;
    }
}
