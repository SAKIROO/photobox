// ui.js
export function displayPicture(photo) {
    const container = document.querySelector("#la_photo");
    const templateSource = document.querySelector("#photoTemplate").innerHTML;
    const template = Handlebars.compile(templateSource);

    // Corriger les chemins
    const fullImageUrl = "https://webetu.iutnc.univ-lorraine.fr" + photo.photo.url.href;

    const html = template({
        titre: photo.photo.titre,
        categorie: photo.photo.categorie,
        description: photo.photo.descr,
        type: photo.photo.type,
        largeur: photo.photo.width,
        hauteur: photo.photo.height,
        url: fullImageUrl
    });

    container.innerHTML = html;
}
