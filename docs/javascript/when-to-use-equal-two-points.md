# When to use = or :

### When to use and how to apply

I have always come across this question when entering the JavaScript world so I think it might be useful for someone else :]

Well basically the `=` (assignment symbol) and `:` work together and for a better explanation here is an example:

The use of the two dots is basically to represent an `object`

```js
var fruits = {
  banana: {
    color: 'yellow',
  },
};
```

And with an object, you can navigate between the levels of keys and values

```js
fruits.banana.color; // yellow
```

So whenever you use a key in an object, you assign a value to it, using the two dots `:`

The `=` means to assign some value to a variable. It can be an object or any value you want.

### Condicionals

There are other uses, for example in conditional variables:

```js
const color = arguments.length > 0 ? arguments[0] : 'black';
```

In the above example, assuming that this code is inside a function, you are saying: that if the number of arguments is greater than zero the variable "color" will be equal to the first argument, otherwise, it will be equal to "black"

The "if/else" is represented by the colon

See more on:

- [Conditional Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Labels

There are also labels, implemented with EcmaScript, take a look:

- [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

### References

- https://pt.stackoverflow.com/questions/108626/qual-a-utiliza%C3%A7%C3%A3o-dos-dois-pontos-em-javascript
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
