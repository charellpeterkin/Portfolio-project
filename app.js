let article = document.querySelector("article")
console.log(article)


function fetchAPI(url, callback) {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        callback(res)
    })
    .catch((error) => {
        console.log(error)
    });
}

function fetchData() {
    fetchAPI(`https://newsapi.org/v2/everything?q=racism&apiKey=cd9e0494b1a144bfa4856b3e6431ea16&amount=10`, function (res) {
       let contents = res.articles.slice(0,10)
       contents.forEach(element => {
        let divContainers = document.createElement("div");
        divContainers.setAttribute("class", "container-article");
        divContainers.innerHTML = element.title
        article.append(divContainers)

        divContainers = document.querySelectorAll(".container-article");

        for(let divContainer of divContainers) {
            divContainer.addEventListener("click", () => {
             let article = document.querySelector(".news-articles")
             article.innerHTML = element.description

               })
        }
        
       });

    })
}

fetchData();


// let formEvent = document.querySelector(".form")
// let article = document.querySelector("article")
// console.log(article)

// formEvent.addEventListener("submit", () => {
// })

