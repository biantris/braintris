---
id: scope-block-statement
title: Scope, Block Statement
tags:
  - scope-block-statement
  - javascript
  - content
  - notes
  - pt-BR
---

**Scope**: Escopo determina a visibilidade de alguma variável no javaScript

**Block Statement:** Declaração de bloco
```js
// vamos iniciar um bloco
{
	// aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```
-  O bloco também criará um novo **escopo** . Chamamos de **block scoped**

**var:** var é global e poderá funcionar fora de um escopo de bloco
- var é global e também local
- hoisting

**Scope let e const:** const e let são locais e só funcionam no escopo onde foi criado
```js
{ 
	let y = 0; // escopo local ( dentro das chaves )
	console.log(y)
}
```
