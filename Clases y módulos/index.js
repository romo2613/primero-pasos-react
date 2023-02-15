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
        return `${Greeter.greetWord}, I'm ${this.name}`
    }
}