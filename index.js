const listaFrases= [
    "Dois bagunceiros",
    "Dois dorminhocos",
    "Dois pasteleiros",
    "Quando não era loira",
    "A mais bonita",
    "Todas as mamães da família"



]
const listaImagens = [
    "fotos_mae/foto_1.jpeg",
    "fotos_mae/foto_2.jpeg",
    "fotos_mae/foto_4.jpeg",
    "fotos_mae/foto_12.jpeg",
    "fotos_mae/foto_13.jpeg",
    "fotos_mae/foto_8.jpeg"

]
const myAudio = new Audio('musica.mp3');
const frase = document.getElementById('frase')
const imagem = document.getElementById('imagem')
let indiceAtual = 0
let ultimoIndice = listaImagens.length - 1



frase.textContent = listaFrases[indiceAtual]
imagem.src = listaImagens[indiceAtual]



function proximaFoto(){
    // Toca a música exatamente como você colocou
    myAudio.play();
    

    // Adiciona o efeito de sumir
    imagem.classList.add("fade-out");

    // Espera o efeito de sumir para trocar os dados
    setTimeout(() => {
        // SUA LÓGICA ORIGINAL EXATA
        if (indiceAtual < ultimoIndice){
            indiceAtual++
        }
        else if(indiceAtual == ultimoIndice){
            indiceAtual = 0
        }

        frase.textContent = listaFrases[indiceAtual]
        imagem.src = listaImagens[indiceAtual]

        // Faz a imagem aparecer de novo
        imagem.classList.remove("fade-out");
    }, 500); // 500ms é o tempo da transição
}