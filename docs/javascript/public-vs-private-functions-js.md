---
id: public-vs-private-functions-js
title: Funções públicas x privadas em JavaScript
tags:
  - functions
  - javascript
  - content
  - pt-br
---

Em JavaScript, as funções podem ser definidas como `públicas` ou `privadas`

Uma **função pública** é aquela que pode ser acessada e chamada em qualquer lugar do seu código. As funções públicas são normalmente usadas para expor uma funcionalidade em que outras partes da aplicação precisam interagir ou expor como parte de uma biblioteca ou API. 

Ex.

```js
function greet(name) {
  console.log('Hello, ' + name + '!');
}
```

Podemos criar funções privadas dentro de um objeto por meio de `closures`. Isso significa que essas funções só podem ser acessadas dentro do escopo do objeto, não sendo possível acessá-las diretamente fora do objeto.

Ex.
> Temos um objeto `api` com uma função `get` que precisa chamar uma função privada `request` para fazer a requisição HTTP. Podemos definir a função `request` dentro do escopo da função `get`, tornando-a privada:

```js
const api = {
  get: function(url) {
    function request() {
      // código para fazer a requisição HTTP
    }
    
    request();
  }
};
```

> Dessa maneira, a função `request` só pode ser acessada dentro do escopo da função `get` e não pode ser chamada diretamente de fora do objeto `api`. Isso ajuda a manter o código mais seguro e modular, evitando que funções privadas sejam alteradas ou acessadas impropriamente.