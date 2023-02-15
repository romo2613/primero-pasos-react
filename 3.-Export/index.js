import MyImportedClass, { hello } from './module-export'
import * as allImports from './module-export'

console.log(hello())
const MyClass = new MyImportedClass()
console.log(MyClass.goodbye)

console.log(allImports.hello())
const myClass2 = new allImports.default()
console.log(myClass2.goodbye());