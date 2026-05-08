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
const frase = document.getElementById('frase')
const imagem = document.getElementById('imagem')
let indiceAtual = 0
let ultimoIndice = listaImagens.length - 1

frase.textContent = listaFrases[indiceAtual]
imagem.src = listaImagens[indiceAtual]



function proximaFoto(){

    if (indiceAtual < ultimoIndice){
        //Podeir para próximo
        indiceAtual++
    }
    else if(indiceAtual == ultimoIndice){
        indiceAtual = 0
    }

    frase.textContent = listaFrases[indiceAtual]
    imagem.src = listaImagens[indiceAtual]
    

    
}