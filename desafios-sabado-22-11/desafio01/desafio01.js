
//Esse código vai gerar um número aleatório de 1 a 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

//Esse aqui vai converter a frase para maiúsculas e contar palavras
const frase = "Já ouviu falar do artista asiático Jalin purrei?";
const fraseMaiuscula = frase.toUpperCase();
const quantidadePalavras = frase.split(" ").length;

console.log(fraseMaiuscula);
console.log("Número de palavras:", quantidadePalavras);

//E por último, o que vai transformar em Json e retornar um object da melhor forma
const pessoa = {
  nome: "Carlos",
  idade: 25,
  profissao: "Desenvolvedor"
};

// Objeto para JSON
const json = JSON.stringify(pessoa);
console.log(json);

// JSON para objeto
const objetoNovamente = JSON.parse(json);
console.log(objetoNovamente);