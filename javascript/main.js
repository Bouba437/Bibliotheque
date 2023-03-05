const table = document.querySelector("#tableauLivres");

var l1 = {
    nom: "L'algorithmique selon Boubadev",
    auteur: "Boubacar Diarra",
    pages: 200
}
var l2 = {
    nom: "La France du 19e siècle",
    auteur: "Albert Patrick",
    pages: 500
}
var l3 = {
    nom: "Le monde des animaux",
    auteur: "Marc Merlin",
    pages: 250
}
var l4 = {
    nom: "Le virus d'Asie",
    auteur: "Milo Tya",
    pages: 120
}

var biblio = [l1, l2, l3, l4];

afficherLivres();

function afficherLivres() {
    var tableauLivres = document.querySelector("#tableauLivres tbody");
    var livres = "";
    for(var i = 0; i < biblio.length; i++) {
        livres += `<tr>
                    <td>${biblio[i].nom}</td>
                    <td>${biblio[i].auteur}</td>
                    <td>${biblio[i].pages}</td>
                    <td><button type="button" class="btn bg-warning" onClick="afficherFormModification(${i})">Modifier</button></td>
                    <td><button type="button" class="btn bg-danger" onClick="supprimerLivre(${i})">Supprimer</button></td>
                </tr>`;
    }
    tableauLivres.innerHTML = livres;
}

function ajoutFormulaire() {
    document.querySelector("#ajoutForm").removeAttribute("class");
    document.querySelector("#modifLivre").className = "d-none";
}

document.querySelector("#validationAjoutForm").addEventListener("click", function(event) {
    event.preventDefault()
    var titre = document.querySelector("#ajoutForm #titre").value;
    var auteur = document.querySelector("#ajoutForm #auteur").value;
    var pages = parseInt(document.querySelector("#ajoutForm #pages").value);

    ajoutLivre(titre, auteur, pages);
    document.querySelector("#ajoutForm").reset();
    document.querySelector("#ajoutForm").className = "d-none";
})

function ajoutLivre(titre, auteur, pages) {
    var livre = {
        nom: titre,
        auteur: auteur,
        pages: pages
    }

    biblio.push(livre);
   afficherLivres();
}

function supprimerLivre(positionLivre) {
    if(confirm("Voulez-vous vraiment supprimer ?")) {
        biblio.splice(positionLivre, 1);
        afficherLivres();
        alert("Suppression effectuée")
    } else {
        alert("Action annulée");
    }
}

function afficherFormModification(positionLivre) {
    document.querySelector("#ajoutForm").className = "d-none";

    var livre = biblio[positionLivre];
    document.querySelector("#modifLivre").removeAttribute("class");
    document.querySelector("#modifLivre #titre").value = livre.nom;
    document.querySelector("#modifLivre #auteur").value = livre.auteur;
    document.querySelector("#modifLivre #pages").value = livre.pages;
    document.querySelector("#modifLivre #identifiant").value = positionLivre;

}

document.querySelector("#validationModification").addEventListener("click", function(event) {
    event.preventDefault();
    var positionLivre = document.querySelector("#modifLivre #identifiant").value;
    var titre = document.querySelector("#modifLivre #titre").value;
    var auteur = document.querySelector("#modifLivre #auteur").value;
    var pages = parseInt(document.querySelector("#modifLivre #pages").value);

    biblio[positionLivre].nom = titre;
    biblio[positionLivre].auteur = auteur;
    biblio[positionLivre].pages = pages;

    afficherLivres();
    document.querySelector("#modifLivre").className = "d-none";
})
