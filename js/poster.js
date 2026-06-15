const posters = [
    "imagens/The_Boys1.jpg",
    "imagens/The_Boys2.jpg",
    "imagens/The_Boys3.jpg",
    "imagens/The_Boys4.jpg",
    "imagens/The_Boys5.jpg"
];

let posterAtual = 0;

function trocarPoster() {
    posterAtual = (posterAtual + 1) % posters.length;

    document.getElementById("poster-1").src = posters[posterAtual];
}