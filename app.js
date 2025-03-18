// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    let nombreObtenido = document.getElementById("amigo").value;
    nombres.push(nombreObtenido);
    mostrarAmigos();
} 

console.log(nombres)
    

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.replaceChildren();

    for (let nombre of nombres) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }

}

