// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//Funcion para agregar amigos
function agregarAmigo() {
    let nombreObtenido = document.getElementById("amigo").value; //value obtiene el valor del input
    nombres.push(nombreObtenido);
    mostrarAmigos();
} 

    

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); //no se usa value porque ul solo es un contenedor de sub elementos como li 
    lista.innerHTML = ""

    for (let nombre of nombres) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }

}

function sortearAmigo() {
    let lista = document.getElementById("listaAmigos");
    let amigos = lista.getElementsByTagName("li");
    let sorteo = Math.floor(Math.random() * amigos.length);
    let amigoElegido = amigos[sorteo].textContent;
    document.getElementById("amigoElegido").textContent = `Tu amigo secreto es: ${ amigoElegido }`; 
}

