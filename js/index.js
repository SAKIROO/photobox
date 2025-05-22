// js/index.js
import loadPicture from "./lib/photoloader.js";
import { displayPicture } from "./lib/ui.js";

// Fonction principale pour charger et afficher une photo
function getPicture(id) {
    loadPicture(id)
        .then(photo => {
            displayPicture(photo);
        })
        .catch(error => {
            console.error("Erreur lors du chargement de la photo :", error);
        });
}

// Récupère l’ID dans l’URL : index.html#105
// const idFromHash = window.location.hash.substring(1) || "105";
getPicture(105);
