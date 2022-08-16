**String:** cadeia de caracteres, tipo de text
ex: 
```js
console.log("Aoba")
```
ex: 
console.log aceita vários argumentos
```javascript
let name = prompt("what is your name?");
console.log("story " + name + " story");
```
também podemos utilizar interpolação
```js
let name = prompt("what is your name?");
console.log(`story ${name} story`);
```

**Number**: números
```js
33 //inteiros
12.5 // reais - float
NaN // Not a Number
Infinity // infinito

console.log(1+1)
// 2
```

**Boolean**: booleano, 2 valores `true` ou `false`
```js
console.log(true)
console.log(false)
```

**Underfined vs Null**
Null: nulo, objeto que não possuí nada dentro, diferente de indefinido
Underfined: indefinido

**Object:** objeto, propriedades/atributos, funcionalidades/métodos
```js
{propriedade: "valor"}
```

```js
console.log({ // obj
	name: "bia", //property: value
	age: 20 // property: value
}) // obj
```

```js
console.log({
	name: "bia".
	age: 20,
	walk: () = { // funcionalidade, logo é um método, pois está dentro de um objeto
		console.log ("walk")
	}
})
```

**Array:** (vetores)
- uma lista
- um agrupamento de dados

```js
console.log([
	"milk",
	"eggs",
	2,
	3,
	...
])
```