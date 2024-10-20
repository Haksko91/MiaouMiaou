let img = document.getElementById('clignotant');
let visible = false;

setInterval(() => {
    visible = !visible;
    img.style.display = visible ? 'block' : 'none';
}, 1000); // Changez la durée ici (en millisecondes)