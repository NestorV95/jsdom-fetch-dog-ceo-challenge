document.addEventListener("DOMContentLoaded", function(){
    fetchDogImages()
})

console.log('%c HI', 'color: firebrick')


function fetchDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then (resp => resp.json()) 
    .then (dogImages => {
    dogImages.message.forEach(dogImage => console.log(dogImage))   
    });
}

function renderDogImage(dogImage){
    const dogImageContainer = document.querySelector('#dog-image-container');
    const img = document.createElement('img');
    img.rc = dogImage;
    dogImageContainer.append(img);
} 



// function renderBooks(books) {
//     const main = document.querySelector('main');
//     books.forEach(book => {
//       const h2 = document.createElement('h2');
//       h2.innerHTML = book.name;
//       main.appendChild(h2);
//     });

