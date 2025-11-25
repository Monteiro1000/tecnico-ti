// 1. Número aleatório

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatório:", numeroAleatorio);


// 2. Frase para maiúsculas e contagem de palavras

const fraseOriginal = "Aprendendo JavaScript é muito divertido";
const fraseMaiuscula = fraseOriginal.toUpperCase();
const quantidadePalavras = fraseOriginal.split(" ").length;

console.log("Frase em maiúsculas:", fraseMaiuscula);
console.log("Número de palavras:", quantidadePalavras);


// 3. Objeto → JSON → Objeto

const pessoa = {
  nome: "Carlos",
  idade: 25,
  profissao: "Desenvolvedor"
};

const json = JSON.stringify(pessoa);
console.log("JSON:", json);

const objetoNovamente = JSON.parse(json);
console.log("Objeto novamente:", objetoNovamente);


// 4. Somar números com reduce()

const numeros = [10, 5, 20, 15];
const soma = numeros.reduce((total, num) => total + num, 0);
console.log("Soma dos números:", soma);


// 5. Criar frase com reduce()

const palavras = ["Joga", "De", "Ladinho", "da melhor", "forma"];
const frase = palavras.reduce((ac, palavra) => ac + " " + palavra);
console.log("Frase criada com reduce():", frase);


// 6. Média de notas com reduce()

const notas = [8, 9.5, 7, 10];
const media = notas.reduce((ac, n) => ac + n, 0) / notas.length;
console.log("Média das notas:", media);


// 7. Transformar array de pares em objeto com reduce()

const pares = [
  ["nome", "Ana"],
  ["idade", 22],
  ["cidade", "São Paulo"]
];

const objeto = pares.reduce((ac, [chave, valor]) => {
  ac[chave] = valor;
  return ac;
}, {});

console.log("Objeto transformado:", objeto);