<!-- ! -->
<!-- ! PROPRIETÉS ET MÉTHODES POUR IMPLEMENTER DANS bd.service.ts -->

let lstLivres: [];
// lstLivres qui contient un tableau des jsons des tous les livres (provient
// du fichier livres.json expliqué plus haut). Cette variable sera
// initialisée avec un tableau vide.

let lstPanier: [] = {

}  
// lstPanier, un tableau qui va contenir les code produits (cpr) des
// livres ajoutés au panier.

getData(filename:string):any[] {

    };
    // reçoit en argument un nom de fichier, puis appelle le endpoint/getjson de
    // la méthode GET (de http) expliquée plus bas, pour retourner le tableau des
    // jsons contenu dans le fichier passé en argument

postData(filename:string, data:any[]):any {

    }
    // reçoit en argument un nom de fichier et un tableau des json puis appelle le
    // endpoint/postjson de la méthode POST (de http) expliquée plus bas pour
    // enregistrer les données data dans le fichier (paramètre filename) sur le serveur

updateLivres() {

    }

// met à jour le tableau lstLivres avec le tableau des jsons retourné par l’appel
// la méthode getData en passant livres.json comme nom de fichier en argument.

getLivres():any[] {

}
// appelle la méthode updateLivres() puis retourne le tableau lstLivres

getPanier():any[] {

}
// retourne un tableau des jsons des livres dont les codes produits (cpr) se
// trouvent présentement dans le tableau lstPanier.

togglePanier(cpr:string) {

}
// reçoit en argument un code produit. Si le code produit se trouve déjà dans le
// tableau lstPanier, on le supprime. Sinon, on l’ajoute dans ce tableau.

addLivre(livre:any):any {

}
// reçoit en argument un json contenant les informations d’un livre et vérifie si
// aucun livre n’a le même code produit dans lstLivres, pour l’ajouter dans ce
// tableau puis appeler la méthode postData pour enregistrer le nouveau contenu de
// lstLivres dans le fichier livres.json

delLivre(cpr:any) {

};
// reçoit en argument un code produit d’un livre puis supprime le livre correspondant
// dans les tableaux lstLivres et lstPanier s’il existe éventuellement. Par la suite,
// on appelle la méthode postData pour enregistrer le nouveau contenu de lstLivres
// dans le fichier livres.json
