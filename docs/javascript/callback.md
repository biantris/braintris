# Callback

A function that is passed to another function as an argument to another function, which is called within an external function to complete some kind of routine or action.

ex.: https://replit.com/@beatrizoliveiir/ex-callback-ts

```tsx
interface definitionInterface{
     (message:string):void;
 }

const greeting = (message:string) => console.log(`Hello ${message}`);

const sayHello = (callback: definitionInterface)  => {
   callback('World!')
 }
sayHello(greeting);
```

The example above is of a **synchronous callback**, since it is executed immediately. 

<div align="center" id="top"> 
    <img width="500" src="https://raw.githubusercontent.com/biantris/braintris/main/static/img/callback.png" />
</div>