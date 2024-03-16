// const pessoa: {nome: string, idade: number} = {
//     nome: 'André',
//     idade:32
// }

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa : Pessoa = {
    nome: 'André',
    idade: 32,
    profissao: 'Programador'
}


const outraPessoa : Pessoa = {
    nome:'Samara',
    idade: 32,
    
}

const arrayPessoa : Array<Pessoa> = [pessoa, outraPessoa]

const arrayNumeros : number[] = [1,2,3,4,5,6,7,8,9,10]

const arrayString: Array<string> = ['a','b','c']