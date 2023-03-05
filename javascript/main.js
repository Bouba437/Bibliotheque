const table = document.querySelector("#tableauLivres");

var l1 = {
    nom: "L'algorithmique selon Boubadev",
    auteur: "Boubacar Diarra",
    page: 200
}
var l2 = {
    nom: "La France du 19e siècle",
    auteur: "Albert Patrick",
    page: 500
}
var l3 = {
    nom: "Le monde des animaux",
    auteur: "Marc Merlin",
    page: 250
}
var l4 = {
    nom: "Le virus d'Asie",
    auteur: "Milo Tya",
    page: 120
}

var livres = [l1, l2, l3, l4];

for(var i = 0; i < livres.length; i++) {
    var livre1 = document.createElement("tr");
    livre1.innerHTML = `<td>${livres[i].nom}</td>
                        <td>${livres[i].auteur}</td>
                        <td>${livres[i].page}</td>
                        <td><button type="button" class="btn bg-warning">Modifier</button></td>
                        <td><button type="button" class="btn bg-danger">Supprimer</button></td>`;
    table.appendChild(livre1);
}

function ajoutFormulaire() {
    document.querySelector("#ajoutForm").removeAttribute("class");
}
