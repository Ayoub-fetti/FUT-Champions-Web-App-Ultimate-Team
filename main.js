const clubLogos = {
    'real-madrid': 'https://media-4.api-sports.io/football/teams/541.png',
    'barcelona': 'https://media-4.api-sports.io/football/teams/529.png',
    'atletico-madrid': 'https://media-4.api-sports.io/football/teams/530.png',
    'sevilla': 'https://media-4.api-sports.io/football/teams/536.png',
    'manchester-united': 'https://media-4.api-sports.io/football/teams/33.png',
    'liverpool': 'https://media-4.api-sports.io/football/teams/40.png',
    'chelsea': 'https://media-4.api-sports.io/football/teams/49.png',
    'manchester-city': 'https://media-4.api-sports.io/football/teams/50.png',
    'arsenal': 'https://media-4.api-sports.io/football/teams/42.png',
    'tottenham-hotspur': 'https://media-4.api-sports.io/football/teams/47.png',
    'inter_miami': 'https://seeklogo.com/images/I/inter-miami-cf-logo-70CC7D9F44-seeklogo.com.png',
    'newcastle-united': 'https://media-4.api-sports.io/football/teams/34.png',
    'bayern-munich': 'https://media-4.api-sports.io/football/teams/157.png',
    'borussia-dortmund': 'https://media-4.api-sports.io/football/teams/165.png',
    'juventus': 'https://media-4.api-sports.io/football/teams/496.png',
    'ac-milan': 'https://media-4.api-sports.io/football/teams/489.png',
    'inter-milan': 'https://media-4.api-sports.io/football/teams/505.png',
    'napoli': 'https://media-4.api-sports.io/football/teams/492.png',
    'roma': 'https://media-4.api-sports.io/football/teams/497.png',
    'paris-saint-germain': 'https://media-4.api-sports.io/football/teams/85.png',
    'ajax': 'https://media-4.api-sports.io/football/teams/194.png',
    'galatasaray': 'https://media-4.api-sports.io/football/teams/645.png',
    'fenerbahce': 'https://media-4.api-sports.io/football/teams/611.png',
    'celtic': 'https://media-4.api-sports.io/football/teams/247.png',
    'rangers': 'https://media-4.api-sports.io/football/teams/248.png',
    'flamengo': 'https://media-4.api-sports.io/football/teams/127.png',
    'river-plate': 'https://media-4.api-sports.io/football/teams/435.png',
    'boca-juniors': 'https://media-4.api-sports.io/football/teams/451.png',
    'al-ahly': 'https://media-4.api-sports.io/football/teams/1039.png',
    'zamalek': 'https://media-4.api-sports.io/football/teams/1040.png'
};

const countryFlags = {
    'argentina': 'https://media-4.api-sports.io/flags/ar.svg',
    'belgium': 'https://media-4.api-sports.io/flags/be.svg',
    'brazil': 'https://media-4.api-sports.io/flags/br.svg',
    'canada': 'https://media-4.api-sports.io/flags/ca.svg',
    'croatia': 'https://media-4.api-sports.io/flags/hr.svg',
    'danemark': 'https://media-4.api-sports.io/flags/dk.svg',
    'egypt': 'https://media-4.api-sports.io/flags/eg.svg',
    'england': 'https://media-4.api-sports.io/flags/gb.svg',
    'france': 'https://media-4.api-sports.io/flags/fr.svg',
    'germany': 'https://media-4.api-sports.io/flags/de.svg',
    'italy': 'https://media-4.api-sports.io/flags/it.svg',
    'mexique': 'https://media-4.api-sports.io/flags/mx.svg',
    'morocco': 'https://media-4.api-sports.io/flags/ma.svg',
    'netherlands': 'https://media-4.api-sports.io/flags/nl.svg',
    'norway': 'https://media-4.api-sports.io/flags/no.svg',
    'portugal': 'https://media-4.api-sports.io/flags/pt.svg',
    'slovenia': 'https://media-4.api-sports.io/flags/si.svg',
    'spain': 'https://media-4.api-sports.io/flags/es.svg',
    'uruguay': 'https://media-4.api-sports.io/flags/uy.svg',
    'usa': 'https://media-4.api-sports.io/flags/us.svg'
};


// founction pour modifier le joueur 
function playerCardNouveaux(joueur) {
    return `
        <div class="card-container">
            <div class="card-background">
                <img src="img/card_normal.webp" alt="card background" class="card-bg">
                <div class="card-content">
                    <div class="card-top">
                        <span class="rating">${joueur.note}</span>
                        <span class="position">${joueur.position}</span>
                        <img src="${countryFlags[joueur.nationalite]}" alt="${joueur.nationalite}" class="nation-flag">
                        <img src="${clubLogos[joueur.club]}" alt="${joueur.club}" class="club-logo">
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
                    </div>
                </div>
            </div>
        </div>`;
}

// position des joueurs en fonction de la formation
// *************************************************

document.addEventListener('DOMContentLoaded', function() {
   
    const formationSelect = document.getElementById('formation');
    
    function updatePositions(formation) {

        // Gk (meme position)
        const goalkeeper = document.querySelector('.goalkeeper');

        // positin du GK
        goalkeeper.style.cssText = 'bottom: -45%; left: 49.5%;';

        // CB (meme position)
        const def1 = document.querySelector('.def1');
        const def2 = document.querySelector('.def2');
        const def3 = document.querySelector('.def3');
        const def4 = document.querySelector('.def4');

        // Position des CB
        def1.style.cssText = 'bottom: -8%; left: 20%;';  // BL
        def2.style.cssText = 'bottom: -15%; left: 40%;';  // CB
        def3.style.cssText = 'bottom: -15%; left: 60%;';  // CB
        def4.style.cssText = 'bottom: -8%; left: 80%;';  // BR

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
            fw1.style.cssText = 'bottom: 65%; left: 35%;';
            fw2.style.cssText = 'bottom: 65%; left: 65%;';
            fw3.style.display = 'none';  // Cacher le 3 ST

        } else if (formation === '1-4-3-3') {

            // 4-3-3 Formation***********************************
            // **************************************************

            // CM
            mid1.style.cssText = 'bottom: 25%; left: 30%;';
            mid2.style.cssText = 'bottom: 20%; left: 49.2%;';
            mid3.style.cssText = 'bottom: 25%; left: 70%;';
            mid4.style.display = 'none';  // Cacher le 4 CM
            
            // ST
            fw1.style.cssText = 'bottom: 60%; left: 25%;';
            fw2.style.cssText = 'bottom: 65%; left: 50%;';
            fw3.style.cssText = 'bottom: 60%; left: 75%;';
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
function montrerJoueur() {
    const banqueSection = document.querySelector('.banque');
    banqueSection.innerHTML = ''; 

    const joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];

    joueurs.forEach((joueur, index) => {
        const joueurCard = document.createElement('div');
        joueurCard.classList.add('joueur-card');
        joueurCard.dataset.position = joueur.position;


        joueurCard.innerHTML = `
            <div class="card-container">
                <div class="card-background">
                    <img src="img/card_normal.webp" alt="card background" class="card-bg">
                    <div class="card-content">
                        <div class="card-top">
                            <span class="rating">${joueur.note}</span>
                            <span class="position">${joueur.position}</span>
                            <img src="${countryFlags[joueur.nationalite]}" alt="${joueur.nationalite}" class="nation-flag">
                            <img src="${clubLogos[joueur.club]}" alt="${joueur.club}" class="club-logo">

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
                SupprimerJoueur(index);
            });
        });
                // Ajouter l'ecouteur d'evenements pour les boutons de modification
                const editButtons = document.querySelectorAll('.btn_edit');
                editButtons.forEach(button => {
                button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                modifierJoueur(index);
                    });
                });
    }







// Fonction pour supprimer un joueur
// *********************************

function SupprimerJoueur(index) {
    // Supprimer de la banque (localStorage 'joueurs')
    let joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];
    joueurs.splice(index, 1);
    localStorage.setItem('joueurs', JSON.stringify(joueurs));

    // Supprimer du terrain (localStorage 'savedPlayers')
    let savedPlayers = JSON.parse(localStorage.getItem('savedPlayers')) || [];
    const playerOnPitchIndex = savedPlayers.findIndex(player => player.playerIndex === parseInt(index));
    
    if (playerOnPitchIndex !== -1) {
        // Récupérer la position originale du joueur
        const position = savedPlayers[playerOnPitchIndex].position;
        
        // Positions originales pour chaque type de joueur
        const originalPositions = {
            'Gk': { bottom: '-45%', left: '49.5%' },
            'LB': { bottom: '-8%', left: '20%' },
            'CB': { bottom: '-15%', left: '40%' },
            'RB': { bottom: '-8%', left: '80%' },
            'CM': { bottom: '25%', left: '30%' },
            'LW': { bottom: '60%', left: '25%' },
            'ST': { bottom: '65%', left: '50%' },
            'LR': { bottom: '60%', left: '75%' }
        };

        // Supprimer le joueur des savedPlayers
        savedPlayers.splice(playerOnPitchIndex, 1);
        localStorage.setItem('savedPlayers', JSON.stringify(savedPlayers));

        // Créer et replacer une empty-card sur le terrain
        const playerOnPitch = document.querySelector(`.players .joueur-card[data-index="${index}"]`);
        if (playerOnPitch) {
            const emptyCard = document.createElement('img');
            emptyCard.src = 'img/card_empty.webp';
            emptyCard.alt = 'player';
            emptyCard.className = `player empty-card`;
            emptyCard.dataset.position = position;

            // Appliquer la position originale
            if (originalPositions[position]) {
                Object.assign(emptyCard.style, {
                    position: 'absolute',
                    ...originalPositions[position],
                    transform: 'translate(-50%, -50%)'
                });
            }

            // Ajouter l'écouteur d'événements pour la modal
            emptyCard.addEventListener('click', () => openModal(emptyCard));

            playerOnPitch.parentNode.replaceChild(emptyCard, playerOnPitch);
        }
    }

    // Rafraîchir l'affichage de la banque
    montrerJoueur();
}


// Fonction pour modifier un joueur
// ********************************

function modifierJoueur(index) {
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





// stocker tout les donnes du form dans localStorage
// *************************************************

document.querySelector('.btn_add').addEventListener('click', function(event) {
    event.preventDefault();

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

    // Verification que les champs sont remplis
    if (!joueurNom || !position || !nationalite || !club || 
        !PAC || !SHO || !PAS || !DRI || !DEF || !PHY || !note) {
        alert("Veuillez remplir tous les champs du formulaire");
        return;
    }
     // Verification des valeurs numeriques 0-100
     const stats = [PAC, SHO, PAS, DRI, DEF, PHY];
     for (let stat of stats) {
         if (isNaN(stat) || stat < 0 || stat > 100) {
             alert("Les statistiques doivent être comprises entre 0 et 99");
             return;
         }
     }
         // Verification de la note generale 0-100
    if (isNaN(note) || note < 0 || note > 100) {
        alert("La note générale doit être comprise entre 0 et 100");
        return;
    }
        // verification de l'image wach ajoute
        if (!imageInput.files || !imageInput.files[0]) {
            alert("Veuillez sélectionner une image");
            return;
        }
    

    // Si toutes les validations OK , continuer avec le code existant
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
                // Update existing player
                joueurs[index] = joueur;
                
                // Update player on the pitch if present
                const playerOnPitch = document.querySelector(`.players .joueur-card[data-index="${index}"]`);
                if (playerOnPitch) {
                    // Save the original styles
                    const originalStyles = {
                        position: playerOnPitch.style.position,
                        bottom: playerOnPitch.style.bottom,
                        left: playerOnPitch.style.left,
                        transform: playerOnPitch.style.transform
                    };
                    
                    // Update content
                    playerOnPitch.innerHTML = playerCardNouveaux(joueur);
                    
                    // Restore the original styles
                    Object.assign(playerOnPitch.style, originalStyles);
                    
                    // Update savedPlayers in localStorage while preserving position
                    const savedPlayers = JSON.parse(localStorage.getItem('savedPlayers')) || [];
                    const updatedSavedPlayers = savedPlayers.map(savedPlayer => {
                        if (savedPlayer.playerIndex === parseInt(index)) {
                            return {
                                ...savedPlayer,
                                content: playerCardNouveaux(joueur)
                            };
                        }
                        return savedPlayer;
                    });
                    localStorage.setItem('savedPlayers', JSON.stringify(updatedSavedPlayers));
                }
                
                document.querySelector('.btn_add').removeAttribute('data-index');
            } else {
                // Add new player
                joueurs.push(joueur);
            }

            localStorage.setItem('joueurs', JSON.stringify(joueurs));
            document.forms[0].reset();
            montrerJoueur();
        };

        reader.readAsDataURL(file);
});
montrerJoueur();




// quand une carte vide est cliquer 
// *******************************


document.addEventListener('DOMContentLoaded', function () {
    // stockerJoueur(); 

    const emptyCards = document.querySelectorAll('.empty-card');
    const modal = document.getElementById('joueur_modal');
    const closeBtn = modal.querySelector('.close');
    const playerCards = document.getElementById('playerCards');
    let selectedEmptyCard = null;

    function openModal(emptyCard) {
        selectedEmptyCard = emptyCard;
        const position = emptyCard.dataset.position;
        loadPlayerCards(position);
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        selectedEmptyCard = null;
    }

    function loadPlayerCards(position) {
        playerCards.innerHTML = '';
        const filteredPlayers = Array.from(document.querySelectorAll('.banque .joueur-card')).filter(card => card.dataset.position === position);
        filteredPlayers.forEach(card => {
            const cardClone = card.cloneNode(true);
            cardClone.addEventListener('click', () => selectionnerJoueur(cardClone));
            playerCards.appendChild(cardClone);
        });
    }
   
    function selectionnerJoueur(cardClone) {
        if (selectedEmptyCard) {
            const playerCardClone = cardClone.cloneNode(true);
            const playerIndex = cardClone.querySelector('.btn_delete').dataset.index;
            playerCardClone.dataset.index = playerIndex;
            
            const joueurs = JSON.parse(localStorage.getItem('joueurs')) || [];
            const joueur = joueurs[playerIndex];
            const originalPosition = joueur.position;

            if (originalPosition !== selectedEmptyCard.dataset.position) {
                alert(`Ce joueur est un ${originalPosition}. Veuillez le placer à sa position d'origine.`);
                return;
            }
            
            // Définir les positions spécifiques pour chaque emplacement
            const positions = {
                'Gk': { bottom: '-75%', left: '52%' },
                'LB': { bottom: '-35%', left: '20%' },
                'CB': { bottom: '-42%', left: '40%' },
                'CB2': { bottom: '-42%', left: '60%' },
                'RB': { bottom: '-35%', left: '80%' },
                'CM1': { bottom: '0%', left: '30%' },    // Premier CM
                'CM2': { bottom: '-5%', left: '51%' },  // Deuxième CM
                'CM3': { bottom: '0%', left: '70%' },    // Troisième CM
                'LW': { bottom: '35%', left: '25%' },
                'ST': { bottom: '38%', left: '50%' },
                'LR': { bottom: '35%', left: '75%' }
            };

            // Déterminer quelle position CM utiliser en fonction de la classe de l'empty-card
            let positionKey = originalPosition;
            if (originalPosition === 'CM') {
                if (selectedEmptyCard.classList.contains('mid1')) {
                    positionKey = 'CM1';
                } else if (selectedEmptyCard.classList.contains('mid2')) {
                    positionKey = 'CM2';
                } else if (selectedEmptyCard.classList.contains('mid3')) {
                    positionKey = 'CM3';
                }
            } else if (originalPosition === 'CB' && selectedEmptyCard.classList.contains('def3')) {
                positionKey = 'CB2';
            }

            // Appliquer les styles de position
            if (positions[positionKey]) {
                Object.assign(playerCardClone.style, {
                    position: 'absolute',
                    bottom: positions[positionKey].bottom,
                    left: positions[positionKey].left,
                    transform: 'translate(-50%, -50%)'
                });
            }

            const playerData = {
                position: originalPosition,
                content: playerCardClone.innerHTML,
                styles: {
                    position: playerCardClone.style.position,
                    bottom: playerCardClone.style.bottom,
                    left: playerCardClone.style.left,
                    transform: playerCardClone.style.transform
                },
                playerIndex: parseInt(playerIndex)
            };

            let savedPlayers = JSON.parse(localStorage.getItem('savedPlayers')) || [];
            savedPlayers.push(playerData);
            localStorage.setItem('savedPlayers', JSON.stringify(savedPlayers));

            selectedEmptyCard.parentNode.replaceChild(playerCardClone, selectedEmptyCard);
            closeModal();
        }
    }
    
    function stockerJoueur() {
        const savedPlayers = JSON.parse(localStorage.getItem('savedPlayers')) || [];
        savedPlayers.forEach(player => {
            const emptyCard = document.querySelector(`.empty-card[data-position="${player.position}"]`);
            if (emptyCard) {
                const playerCard = document.createElement('div');
                playerCard.className = 'joueur-card';
                playerCard.innerHTML = player.content;
    
                // Appliquer les styles sauvegardés
                if (player.styles) {
                    Object.assign(playerCard.style, player.styles);
                }
    
                emptyCard.parentNode.replaceChild(playerCard, emptyCard);
            }
        });
    }
  
    emptyCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});


