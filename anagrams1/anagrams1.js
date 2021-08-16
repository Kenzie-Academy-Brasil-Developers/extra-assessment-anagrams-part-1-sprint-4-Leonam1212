const getAnagramsOf = () => {
const input = document.getElementById("boxText").value;
let output = [];

for (let i = 0; i < palavras.length; i++){
    if(sortWord(input) === sortWord(palavras[i])){
        output.push(palavras[i])
    }
}
return output
}

const sortWord = (word) => {
return word.toLowerCase().split("").sort().join("").trim()
}

// USUARIO VAI DIGITAR UMA PALAVRA
// MINHA FUNÇÃO IRÁ PEGAR ESSA PALAVRA 
// E VAI RETORNAR TODAS AS PALAVRAS QUE
// SÃO ANAGRAMAS (CONTIDAS NO ARRAY DE PALAVRAS)



const button = document.getElementById("findButton");
button.addEventListener("click", function () {
    const span = document.getElementById("result")
    span.innerText = getAnagramsOf();
    
});