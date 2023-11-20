const displayClock = () => {
    // Create a new Date object
    const now = new Date();
    
    // Get the current time components
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();
        
    // Ajouter un zéro devant les nombres < 10 pour une meilleure lisibilité
    currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

    // dire à JS de récupérer l'élément où se trouvera l'heure
    const clock = document.getElementById("clock");
    
    // Display the current time
    clock.innerText =`${currentHours}:${currentMinutes}:${currentSeconds}`;
}

setInterval(displayClock, 1000);











// .replace("HOUR :", "START");