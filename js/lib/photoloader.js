export default function loadPicture(idPicture) {
    return fetch(`https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/${idPicture}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`erreur HTTP, status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Erreur fetch :", error);
            throw error;
        });
}  