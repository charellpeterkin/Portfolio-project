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
        
        let authorLinks = document.querySelector(".sidebar a")

        authorLinks.addEventListener("click", () => {
            article.innerHTML = element.author
            
        })

        let pubLinks = document.querySelector(".sidebar a:nth-child(2)")
           pubLinks.addEventListener("click", () => {
            article.innerHTML = element.source.name
           })

        let yearLink = document.querySelector(".sidebar a:nth-child(3)")

        yearLink.addEventListener("click", () => {
            article.innerHTML = element.publishedAt
            // console.log(element.publishedAt)
        })

        let locationLink = document.querySelector(".sidebar a:nth-child(4)")
        locationLink.addEventListener("click", () => {
            article.innerHTML = element.url
        })

        let formButton = document.querySelector(".form")
        console.log(formButton)
   
        let placeholder = document.querySelector("input[placeholder]")
        console.log(placeholder)
   
        formButton.addEventListener("submit", () => {
         if (placeholder = "number") {
           article.innerHTML = element.publishedAt
         } else if (placeholder != "number") {
            article.innerHTML = element.source.name
         }
        })

        
       });

    })

   
}

fetchData();


// let formEvent = document.querySelector(".form")
// let article = document.querySelector("article")
// console.log(article)

// formEvent.addEventListener("submit", () => {
// })

