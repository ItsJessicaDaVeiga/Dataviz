
// Importe le module `fetch`
async function  getNews () {
    // Définit l'URL de la requête
    const url = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=649cd1a3c1414df0b5122d5ce6fb6ab2';

    // Exécute la requête HTTP
    const response = await fetch(url);

    // Convertit la réponse en JSON
    let data = await response.json();
    //console.log(data.articles[0].title);

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

getNews()

    // Affiche les résultats
    //console.log(data);