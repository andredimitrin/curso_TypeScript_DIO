// const num: number = 15

// if(num > 15){
//     console.log('Num maior que 15')
// } else if(num == 15){
//     console.log('Num igual a 15')   
// } else {
//     console.log('Num menor que 15')
// }

const typeUser = {
    admin: 'Seja bem vindo Admin',
    student: 'Seja bem vindo estudante',
    guest: 'Seja bem vindo Visitante'
}

function logUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}


const usuario = 'admin'

logUser(usuario)
logUser('student')
logUser('guest')