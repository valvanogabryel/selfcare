const navbar = document.querySelector('nav.navbar');
const searchIcon = document.getElementById('search');
let searchInput = document.createElement('input');
let searchBtn = document.createElement('button')

function searchBarAppears() {
    searchInput.type = 'text';
    searchBtn.type = 'submit';
    searchBtn.innerText = 'Pesquisar'
    searchInput.classList.add('search-input');
    searchBtn.classList.add('search-button')
    navbar.appendChild(searchInput);
    navbar.appendChild(searchBtn);
}
searchBtn.addEventListener('click', search);

function search() {
    alert(`O item pesquisado não se encontra no catálogo.`)
}

window.addEventListener('click', function () {
    navbar.removeChild(searchInput);
    navbar.removeChild(searchBtn);
})
navbar.addEventListener('click', function (event) {
    event.stopPropagation()
})