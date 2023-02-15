const user = {
    name: "Javi",
    surname: "Romero",
    courses: ["introduccion a react", "react intermedio", "react avanzado"],
}

console.log(user);

// extraer los datos de un objeto y formatearlos

const getFullName = ({ name, surname })  => `${name} ${surname}`
console.log('getFullName(): ', getFullName(user))


// DESTRUCTURACIÓN

//Las dos variables cojen el valor del objeso pasado
const { name, surname } = user
console.log(name, surname);

// destructuracion de objeto en otro
const newUser = {
    ...user, //coloca todos los atributos del objeto user separados por coma aqui
    name: 'Raquel' //el objeto va a tener todos los atributos del anterior sobreescribiendo name
}
console.log('newUser: ', newUser)

//extraer variable name del objeto y renombrarla a newName
const { name: newName } = newUser
console.log('newName:', newName)

//extraer items de los arrays
const [firstCourse, ...otherCourse] = newUser.courses
console.log('firstCourse:', firstCourse);
console.log('otherCourse:', otherCourse);

//crear objetos de manera compacta, el nombre de la variables es igual al nombre de las propiedades del objeto
const newObject = { newName, firstCourse }
console.log('newObject', newObject);

//destructuracion de lo parametros de la funcion, ...nums puede recibir 1 o más numeros, se inicializa como array, se recorre con la funcion nativa .reduce y se suman
//da igual los numeros que nos llegen vamos a sumar todos ellos

const sum = (...nums) => nums.reduce((total, num) => total + num, 0)
console.log('sum:', sum(1, 2, 3, 4, 5, 6, 7, 8, 9))