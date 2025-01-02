// Fonction pour afficher le modal de la bande-annonce
function playTrailer() {
    const modal = document.getElementById('trailer-modal');
    modal.classList.remove('hidden');
}

// Fonction pour fermer le modal
function closeTrailer() {
    const modal = document.getElementById('trailer-modal');
    modal.classList.add('hidden');
}
