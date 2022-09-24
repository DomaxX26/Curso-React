window.onload = main;

function main() {
    carregarDades();
}



function carregarDades() {

    fetch("https://api.themoviedb.org/3/movie/550?api_key=aa598cd98fcc4b891e89ddd16811693e", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadPicture(data.poster_path);

        })
        .catch((error) => {
            console.log("Error => ", error);
        })
}

function loadPicture(data) {

    const p = document.querySelector('#p');

    const img = document.createElement('img');

    img.setAttribute("src","https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + data);
    p.appendChild(img);



};  