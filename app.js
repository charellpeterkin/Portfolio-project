let api_url = "https://newsapi.org/v2/everything?q=racism&amount=10&apiKey=cd9e0494b1a144bfa4856b3e6431ea16"
let newUrl = api_url.json()
console.log(newUrl)

function fetchData() {

    fetch(api_url).then(response => {
        console.log(response);
        return response.json();
    });
}
