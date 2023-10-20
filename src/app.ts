

// const soma = (a:number,b:number) => {
//     console.log(a+b);
// }

// soma(2,3);

//var a = "A"; // Não recomendado
//const c = "C";

// let b: string = "B";
// let n: number = 2;
// let x : boolean = true;

// let m: string | number = 2;

// m = "André"
// //m = false; // Erro

// console.log(m);


// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao?: string
// }

// const pessoa: Pessoa = {
//     nome: "André",
//     idade: 30,


// }

// const outraPessoa: Pessoa = {
//     nome: "Joaquim",
//     idade: 25,
//     profissao: "Professor"
// }

// const arrayPessoa: Array<Pessoa> = [
//     pessoa,
//     outraPessoa
// ];

// const arrayNum: number[] = [
//     1,2,3
// ]

// const arrayString: Array<string> = [
//     "A", "B", "C"
// ]


// const num: number = 14

// if(num > 15){
//     console.log("Maior que 15");
// } else if( num == 15){
//     console.log("Igual a 15");
// }else {
//     console.log("Menor que 15");
// }

// const typeUser = {
//     admin:'Seja bem vindo admin',
//     student:'Você é um estudante',
//     viewer:'Você pode visualizar'
// }

// function validateUser(user:string){
//     console.log(typeUser[user]);
// }

// const usuario = 'admin';

// const num : number = 16

// if(num > 15){
//     console.log("Maior que 15");

// } else if (num == 15){
//     console.log("Igual a 15");
// } else {
//     console.log("Menor que 15");
// }

// const typeUser = {
//     admin:'Seja bem vindo admin',
//     student:'Sou estudante',
//     viewer:'Você pode visualizar'
// }


// function validateUser(user:string){
//     console.log(typeUser[user as keyof typeof typeUser]);
// }

// const usuario = 'admin';

// validateUser(usuario);
// validateUser('viewer');
// validateUser('student');


//for

// for(let i = 0; i < 10; i+=2){
//     console.log(i);
// }

let n = 0;
while (n < 10){
    console.log(n);
    n++;
}