export function displayPicture(photo) {
    const container = document.querySelector("#la_photo");
    const templateSource = document.querySelector("#photoTemplate").innerHTML;
    const template = Handlebars.compile(templateSource);

    const fullImageUrl = "https://webetu.iutnc.univ-lorraine.fr" + photo.photo.url.href;

    const html = template({
        titre: photo.photo.titre,
        categorie: "", // ajouter par displayCategory
        description: photo.photo.descr,
        type: photo.photo.type,
        largeur: photo.photo.width,
        hauteur: photo.photo.height,
        url: fullImageUrl
    });

    container.innerHTML = html;
}

export function displayCategory(category) {
    const categoryElem = document.createElement('p');
    categoryElem.id = 'la_categorie';
    categoryElem.textContent = `Catégorie : ${category.nom || 'Inconnue'}`;
    document.querySelector("#la_photo").appendChild(categoryElem);
}

export function displayComments(comments) {
    const ul = document.getElementById('les_commentaires');
    ul.innerHTML = '';
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = `${comment.pseudo} (${comment.date}) : ${comment.content}`;
        ul.appendChild(li);
    });
}
