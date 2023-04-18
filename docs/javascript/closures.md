---
id: closure-js
title: Closure
tags:
  - closure
  - javascript
  - content
  - pt-br
---

### Closure

A Closure é uma função que "captura" variáveis e funções definidas fora de si mesma, perimitindo que acesse e manipule esses valores mesmo que não estejam mais disponíveis no escopo atual.

ex.

```js
function outerFunction() {
  let outerVar = 'Hello';

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // logs 'Hello'
```

Neste exemplo, a função `innerFunction` é uma closure, pois ela "captura" a variável `outerVar` definida no escopo da função `outerFunction`. Quando a função `outerFunction` é chamada, ela retorna a função `innerFunction`, que pode ser atribuída a uma variável e chamada posteriormente. Mesmo que o escopo da função `outerFunction` já tenha sido destruído, a closure `innerFunction` ainda tem acesso à variável `outerVar`.

As closures são bastante utilizadas em JavaScript para criar funções com estados persistentes e compartilhar dados entre funções. Elas são particularmente úteis para criar funções de retorno de chamada [(callbacks)](https://biantris.github.io/braintris/docs/javascript/callback) e funções geradoras (generators).

Leia mais sobre
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures