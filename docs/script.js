// Récupère le bouton de changement de thème
const themeToggleButton = document.getElementById('theme-toggle');

// Vérifie la préférence du thème stockée dans localStorage ou définit le thème par défaut
const currentTheme = localStorage.getItem('theme') || 'dark';

// Applique le thème initial
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleButton.textContent = '🌙'; // Icône du soleil pour passer en mode clair
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleButton.textContent = '🌞'; // Icône de la lune pour passer en mode foncé
}

// Ajoute un événement pour changer de thème au clic
themeToggleButton.addEventListener('click', () => {
    let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    // Applique le nouveau thème
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Enregistre la préférence du thème dans le localStorage
    localStorage.setItem('theme', newTheme);
    
    // Change l'icône du bouton en fonction du thème
    themeToggleButton.textContent = newTheme === 'dark' ? '🌞' : '🌙';
});
