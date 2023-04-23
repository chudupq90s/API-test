document.querySelector('button').addEventListener('click', apiRequest)
const ageSinger = document.querySelector('h2')
const songsOfSinger = document.querySelector('h3')
function apiRequest(){
    const name = document.querySelector('input').value;
    fetch(`/api/${name}`)
        .then(response => response.json())
        .then(result => {
            ageSinger.innerText = result['name'];
            songsOfSinger.innerText = result['songs'];
        })
  
        .catch(err => console.log(err))
}