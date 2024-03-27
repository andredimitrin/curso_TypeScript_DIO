
class User {
    name:string = 'John'
    age:number = 30


    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
        
    }
}

const user = new User('André', 30)
user.showName()

const otherUser = new User('Samara', 32)
otherUser.showName()