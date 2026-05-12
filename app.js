if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.log('Service Worker not registered', err));
    });
}

// Add simple interaction
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        console.log('Card clicked:', card.querySelector('h3').innerText);
    });
});
