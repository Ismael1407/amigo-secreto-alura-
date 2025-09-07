
let amigos = [];

function adicionar() {
    let nomeColocado = document.getElementById("nome-amigo").value;
    let nomes = nomeColocado.trim();
    let lista = document.getElementById("lista-amigos");

    if (nomes === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigos.includes(nomes)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    amigos.push(nomes);
    document.getElementById("nome-amigo").value = "";
    lista.innerHTML += `<li>${nomes}</li>`;
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    if (amigos.length % 2 !== 0) {
        alert("Número ímpar de amigos, verifique se todos receberam um amigo secreto.");
        return;
    }


    let embaralhado;
    let valido = false;

    while (!valido) {
        embaralhado = embaralhar([...amigos]);
        valido = true;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === embaralhado[i]) {
                valido = false;
                break;
            }
        }
    }


    let resultado = "";
    for (let i = 0; i < amigos.length; i++) {

        resultado += `<li>${amigos[i]} → ${embaralhado}</li>`;
    }
    document.getElementById("lista-sorteio").innerHTML = resultado;
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
}





