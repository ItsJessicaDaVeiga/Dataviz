const displayClock = () => {
    // on crée un objet date
    const now = new Date();
    
    // On récupère séparément l'heure, les minutes et les secondes
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();
    
    // Ajouter un zéro devant les nombres < 10 pour une meilleure lisibilité
    currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
    
    // dire à JS de récupérer l'élément où se trouvera l'heure
    const clock = document.getElementById("clock");
    
    // on affiche/met à jour l'heure
    clock.innerText =`${currentHours}:${currentMinutes}:${currentSeconds}`;
}

// on update l'heure à chaque seconde
setInterval(displayClock, 1000);




// crérr plein de feuilles dans le document html
// chaque feuille doit avoir des coordonnées aléatoires

let htmlBody = document.querySelector('body')

// on fixe la taille du feuillage de l'arbre
let treeWidth = 400
let treeHeight = 200

//
const generateLeaf = () => {
    // on crée des coordonnéees aléatoires pour la feuille qu'on va afficher
    let leafX = Math.random() * treeWidth + 300;
    let leafY = Math.random() * treeHeight;
    // on change aléatoirement l'orientation de la feuille
    let leafDirection = Math.random() * 180;
    
    // on fait apparaître la feuille sur l'écran
    htmlBody.innerHTML += `<div style="left:${leafX}px; top:${leafY}px" class="leaf"></div>`
    // htmlBody.innerHTML += `<img src="leaf_v1.svg" alt="feuille" class="leaf" style="left:${leafX}px; top:${leafY}px; transform: rotate(${leafDirection}deg)">`
    
    // on limite le nombre de feuilles créées à 10
    if (count === 10){
        clearInterval(intervalId);
    }
    count++;
}    

// on crée un compteur (il augmente de 1 à chaque feuille créée)
let count = 1;
// on fait apparaître une nouvelle feuille toutes les secondes
const intervalId = setInterval(generateLeaf,800);

// Importe le module `fetch`
async function  getNews () {  

    //let fetch = require('fetch');
    
    // Définit l'URL de la requête
    const url = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=649cd1a3c1414df0b5122d5ce6fb6ab2';
    
    // Exécute la requête HTTP
    const response = await fetch(url);
    //console.log(response);
    // Vérifie si la réponse est valide
    //if (!response.ok) {
     // throw new Error(response.statusText);
    //}
      
    // Convertit la réponse en JSON
    let data = await response.json();
    //console.log(data.articles[0].title);
    for(let i =0; i< 5;i++){
        console.log(data.articles[i].title); 
    }}
    getNews()

    
    
    
    // Affiche les résultats
    //console.log(data);
    
    
    


    
