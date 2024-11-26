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