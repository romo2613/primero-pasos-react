//atributos
// métodos de instancia y estáticos
// herencia

class Greeter 
{
    name = "unnamed"
    static greetWord = "hello"

    constructor({ name }) 
    {
        this.name = name
    }

    greet() 
    {
        return `${Greeter.greetWord}, soy ${this.name}`
    }
}

class User extends Greeter
{
    surname = ''
    constructor({ name, surname })
    {
        super({ name }) // super = llamar constructor de la clase padre llamada Greeter
        this.surname = surname
    }

    greet()
    {
        return `${super.greet()} ${this.surname}`
    }
}

const user = new User({ name: 'Javier', surname: 'Romero'})
console.log(user.greet());
Greeter.greetWord = 'Hola'
console.log(user.greet())