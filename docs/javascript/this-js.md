---
id: this-js
title: This em JavaScript
tags:
  - this
  - javascript
  - content
  - pt-br
---

Em JavaScript, a palavra `this` é usada para se **referir** ao objeto atual em que o código está sendo executado. O valor de `this` pode mudar dependendo de como uma função é chamada ou como um objeto é criado.

Ex de como o `this`pode ser usado em JavaScript:

> 1. Referenciando o objeto atual em um método:

```js

const obj = {
  name: 'João',
  greet() {
    console.log(`Olá, meu nome é ${this.name}.`);
  }
};

obj.greet(); // output: Olá, meu nome é João.

```

> 2. Utilizando "this" em uma função construtora:

```js

function Pessoa(name, age) {
  this.name = name;
  this.age = age;
}

const pessoa1 = new Pessoa('Maria', 25);
console.log(pessoa1.name); // output: Maria

```

> 3. Utilizando "this" dentro de uma função anônima:

```js

const obj = {
  name: 'João',
  greet() {
    setTimeout(function() {
      console.log(`Olá, meu nome é ${this.name}.`);
    }, 1000);
  }
};

obj.greet(); // output: Olá, meu nome é undefined.

```

No exemplo acima, a função anônima que é passada para função `setTimeout` não está vinculada ao objeto `obj`, portanto, o valor de `this` é underfined. Para resolver esse problema, podemos utilizar `arrow functions` ou `bind()` para de definir o valor de `this`dentro da função. 