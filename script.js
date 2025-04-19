function revealSecret() {
    const secrets = [
        "The truth waits in silence...",
        "There was a HOLE here. It's gone now.",
        "This town is full of monsters... how can you sit there and eat pizza?"
    ];
    
    const secretElement = document.createElement('div');
    secretElement.className = 'secret-message';
    secretElement.textContent = secrets[Math.floor(Math.random() * secrets.length)];
    
    secretElement.style.cssText = `
        color: #9a0000;
        text-align: center;
        margin: 25px 0;
        font-size: 1.3rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        animation: fadeIn 1.5s ease;
    `;
    
    document.querySelector('.content').appendChild(secretElement);
    
    // Добавляем звук клика
    const clickSound = new Audio('click.mp3');
    clickSound.play();
}