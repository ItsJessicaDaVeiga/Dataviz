let country = 'de'
let category = "general";

getNews(country, category)

// Importe le module `fetch`
async function  getNews (country, category) {
    // Définit l'URL de la requête
    // const url = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=649cd1a3c1414df0b5122d5ce6fb6ab2';
    let url = `https://newsapi.org/v2/top-headlines?`
    
    // adapter la requête API en fonction de l'input de l'utilisateur
    url += `country=${country}&`
    if (category !== 'general'){
        url += `category=${category}&`
    }
    url += `apiKey=23ae4e8637224dbbb71b47ae3402dd65`;

    // Exécute la requête HTTP
    const response = await fetch(url);

    console.log(response)
    // Convertit la réponse en JSON
    let data = await response.json();
    console.log(data);
    console.log(data.articles);
    
    // afficher dans le HTML
    displayList(data.articles)

}

// afficher ça dans le HTML
function displayList(listArticles){
    // sélectionner la liste
    let articlesHTML = document.getElementById("articlesList")

    // supprime les résultats des recherches précédentes
    articlesHTML.innerHTML = "";

    // pour chaque article, on affiche son titre sur une nouvelle ligne de la liste des résultats
    for(let i =0; i< 5;i++){
        articlesHTML.innerHTML += `<li> TITRE : ${listArticles[i].title.split(" - ")[0]} <br> SOURCE : ${listArticles[i].author} </li>`;
        // articlesHTML.innerHTML += `<li> LIEN : ${listArticles[i].url} </li>`;
        }
}

// récupérer le bouton
const searchButton = document.getElementById('searchBtn');


searchButton.addEventListener('click', function() {
    // récupérer l'input "pays"
    const countryInput = document.getElementById('countries').value;
    // récupérer l'input "catégorie"
    const categoryInput = document.getElementById('categories').value;

    // on vérifie que l'élément a bien été récupéré
    console.log(countryInput);
    console.log(categoryInput);

    // afficher la liste des résultats en fonction de ces données
    getNews(countryInput, categoryInput);
    
});