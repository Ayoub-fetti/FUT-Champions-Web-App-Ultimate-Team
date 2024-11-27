document.addEventListener('DOMContentLoaded', function() {
   
    const formationSelect = document.getElementById('formation');
    
    function updatePositions(formation) {

        // Gk (meme position)
        const goalkeeper = document.querySelector('.goalkeeper');

        // positin du GK
        goalkeeper.style.cssText = 'bottom: -30%; left: 50%;';

        // CB (meme position)
        const def1 = document.querySelector('.def1');
        const def2 = document.querySelector('.def2');
        const def3 = document.querySelector('.def3');
        const def4 = document.querySelector('.def4');

        // Position des CB
        def1.style.cssText = 'bottom: -2%; left: 20%;';  // BL
        def2.style.cssText = 'bottom: -5%; left: 40%;';  // CB
        def3.style.cssText = 'bottom: -5%; left: 60%;';  // CB
        def4.style.cssText = 'bottom: -2%; left: 80%;';  // BR

        // CM et ST 
        const mid1 = document.querySelector('.mid1');
        const mid2 = document.querySelector('.mid2');
        const mid3 = document.querySelector('.mid3');
        const mid4 = document.querySelector('.mid4');
        const fw1 = document.querySelector('.st1');
        const fw2 = document.querySelector('.st2');
        const fw3 = document.querySelector('.st3');

        if (formation === '1-4-4-2') {

            // 4-4-2 Formation ***************************************
            // ******************************************************

            // CM
            mid1.style.cssText = 'bottom: 30%; left: 20%;';
            mid2.style.cssText = 'bottom: 30%; left: 40%;';
            mid3.style.cssText = 'bottom: 30%; left: 60%;';
            mid4.style.cssText = 'bottom: 30%; left: 80%;';
            mid4.style.display = 'block';
            
            // ST
            fw1.style.cssText = 'bottom: 60%; left: 35%;';
            fw2.style.cssText = 'bottom: 60%; left: 65%;';
            fw3.style.display = 'none';  // Cacher le 3 ST

        } else if (formation === '1-4-3-3') {

            // 4-3-3 Formation***********************************
            // **************************************************

            // CM
            mid1.style.cssText = 'bottom: 25%; left: 30%;';
            mid2.style.cssText = 'bottom: 20%; left: 50%;';
            mid3.style.cssText = 'bottom: 25%; left: 70%;';
            mid4.style.display = 'none';  // Cacher le 4 CM
            
            // ST
            fw1.style.cssText = 'bottom: 55%; left: 25%;';
            fw2.style.cssText = 'bottom: 60%; left: 50%;';
            fw3.style.cssText = 'bottom: 55%; left: 75%;';
            fw3.style.display = 'block';  // Montrer le 3 ST
        }
    }

    // ecouteur d'evenement pour le changement de formation
    formationSelect.addEventListener('change', function() {
        updatePositions(this.value);
    });

    // Initialisation avec la formation par défaut
    updatePositions('1-4-3-3');
});







        
// fonction pour afficher les cartes de joueur apres la creation du form (f.principale)
// ************************************************************************************
function displayPlayers() {
    const banqueSection = document.querySelector('.banque');
    banqueSection.innerHTML = '<h1 class="reserve_text">Réserve de joueurs :</h1>'; 

    const joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];

    joueurs.forEach((joueur, index) => {
        const joueurCard = document.createElement('div');
        joueurCard.classList.add('joueur-card');

        joueurCard.innerHTML = `
            <div class="card-container">
                <div class="card-background">
                    <img src="img/card_normal.webp" alt="card background" class="card-bg">
                    <div class="card-content">
                        <div class="card-top">
                            <span class="rating">${joueur.note}</span>
                            <span class="position">${joueur.position}</span>
                            <img src="img/flag/${joueur.nationalite}.png" alt="${joueur.nationalite}" class="nation-flag">
                            <img src="img/clubs/${joueur.club}.png" alt="${joueur.club}" class="club-logo">
                        </div>
                        
                        <div class="player-image-container">
                            <img src="${joueur.image}" alt="${joueur.joueurNom}" class="player-image">
                        </div>
                        
                        <div class="player-name">${joueur.joueurNom}</div>
                        
                        <div class="stats-container">
                            <div class="stats-left">
                                <div class="stat"><span>${joueur.stats.PAC}</span> PAC</div>
                                <div class="stat"><span>${joueur.stats.SHO}</span> SHO</div>
                                <div class="stat"><span>${joueur.stats.PAS}</span> PAS</div>
                            </div>
                            <div class="stats-right">
                                <div class="stat"><span>${joueur.stats.DRI}</span> DRI</div>
                                <div class="stat"><span>${joueur.stats.DEF}</span> DEF</div>
                                <div class="stat"><span>${joueur.stats.PHY}</span> PHY</div>
                            </div>
                        
                        <button class="btn_delete" data-index="${index}">X</button>
                        <button class="btn_edit" data-index="${index}"><i class="fa-solid fa-pen-to-square fa-lg edit" style="color: #DFBE6F;"></i></button>
                    </div>
                </div>
            </div>
        `;
        banqueSection.appendChild(joueurCard);
    });


        // Ajouter l'ecouteur d'evenements pour les boutons de suppression
        const deleteButtons = document.querySelectorAll('.btn_delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deletePlayer(index);
            });
        });
                // Ajouter l'ecouteur d'evenements pour les boutons de modification
                const editButtons = document.querySelectorAll('.btn_edit');
                editButtons.forEach(button => {
                button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                editPlayer(index);
                    });
                });
    }







// Fonction pour supprimer un joueur
// *********************************

function deletePlayer(index) {
    let joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];
    joueurs.splice(index, 1); // Supprime le joueur à l'index spécifié
    localStorage.setItem('joueurs', JSON.stringify(joueurs)); // Met à jour le localStorage
    displayPlayers(); // Réaffiche la liste des joueurs
}


// Fonction pour modifier un joueur
// ********************************

function editPlayer(index) {
    let joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];
    const joueur = joueurs[index];

    console.log("Editing player:", joueur);

    // Remplir le form avec les informations du joueur
    document.querySelector('input[placeholder="Nom du joueur"]').value = joueur.joueurNom;
    document.getElementById('position').value = joueur.position;
    document.getElementById('nationalite').value = joueur.nationalite;
    document.getElementById('club').value = joueur.club;
    document.querySelector('.PAC').value = joueur.stats.PAC;
    document.querySelector('.SHO').value = joueur.stats.SHO;
    document.querySelector('.PAS').value = joueur.stats.PAS;
    document.querySelector('.DRI').value = joueur.stats.DRI;
    document.querySelector('.DEF').value = joueur.stats.DEF;
    document.querySelector('.PHY').value = joueur.stats.PHY;
    document.querySelector('.note').value = joueur.note;

    // Ajouter un attribut data-index pour savoir quel joueur on modifie
    const addButton = document.querySelector('.btn_add');
    addButton.setAttribute('data-index', index);
}








// stocker tout les donnes du form dans local storage (localStorage)
// *****************************************************************
document.querySelector('.btn_add').addEventListener('click', function(event) {
    event.preventDefault(); // empeche le rechargement de la page

    // REcupErer l'index du joueur Modifier, s'il existe
    const index = this.getAttribute('data-index');

    // Recuperer les valeurs du form
    const formation = document.getElementById('formation').value;
    const joueurNom = document.querySelector('input[placeholder="Nom du joueur"]').value;
    const position = document.getElementById('position').value;
    const nationalite = document.getElementById('nationalite').value;
    const club = document.getElementById('club').value;
    const PAC = document.querySelector('.PAC').value;
    const SHO = document.querySelector('.SHO').value;
    const PAS = document.querySelector('.PAS').value;
    const DRI = document.querySelector('.DRI').value;
    const DEF = document.querySelector('.DEF').value;
    const PHY = document.querySelector('.PHY').value;
    const note = document.querySelector('.note').value;
    const imageInput = document.querySelector('.ajout_img');

    // check si  image est  selectionnee
    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const joueur = {
                formation,
                joueurNom,
                position,
                nationalite,
                club,
                stats: {
                    PAC,
                    SHO,
                    PAS,
                    DRI,
                    DEF,
                    PHY
                },
                note,
                image: e.target.result
            };

            let joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];

            if (index !== null && !isNaN(index)) {
                // Mis aa jour le joueur existant
                joueurs[index] = joueur;
                document.querySelector('.btn_add').removeAttribute('data-index'); 
            } else {
                // ajouter un nouveau joueur
                joueurs.push(joueur);
            }


            localStorage.setItem('joueurs', JSON.stringify(joueurs));

            // reinitialiser le formulaire
            document.forms[0].reset();
            
            // Afficher les joueurs immediatement
            displayPlayers();
        };

        reader.readAsDataURL(file);
    } else {
        alert("Veuillez sélectionner une image.");
    }
});
displayPlayers();






   




