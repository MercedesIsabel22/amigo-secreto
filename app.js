// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim(); 

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    amigos.push(nombreAmigo); 
    input.value = ""; 
    actualizarListaAmigos(); 
    document.getElementById("resultado").innerHTML = "";
}


function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    amigos = [];
    actualizarListaAmigos(); 
}


