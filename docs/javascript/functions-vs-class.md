---
id: functions-vs-class
title: Funções vs Classes
tags:
  - this
  - javascript
  - content
  - pt-br
---

Em JavaScript, funções e classes são duas formas diferentes de se criar estruturas de código reutilizáveis.

### Diferenças:

- **Sintaxe**: A sintaxe para criar funções e classes são diferentes. Funções são definidas usando a palavra-chave `function`, enquanto classes são definidas usando a palavra-chave `class`.

  ex.1

  ```js
  function nomeDaFuncao(parametro1, parametro2) {
    // bloco de código da função
    return resultado;
  }
  ```

  ex.2

  ```js
  class NomeDaClasse {
    constructor(parametro1, parametro2) {
      // bloco de código do construtor
    }

    metodo1() {
      // bloco de código do método
    }

    metodo2() {
      // bloco de código do método
    }
  }
  ```

- **Construtores**: As classes tem um método especial chamado `construtor`, que é chamado quando uma nova instância da classe é criada. Funções não tem um método `construtor` padrão, mas podem ter argumentos que são usados para inicializar a função.

  ex.

  ```js
  // Criando uma classe de usuário
  class Usuario {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }

    // Método para exibir informações do usuário
    exibirInfo() {
      console.log(
        `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`,
      );
    }
  }

  // Criando um objeto usuário com o construtor da classe
  const usuario1 = new Usuario('João', 30, 'joao@example.com');

  // Chamando o método para exibir informações do usuário
  usuario1.exibirInfo();
  ```

- **Heranças**: As classes permitem a criação de hierarquias de classes, onde uma classe pode ser definida como extenção de outra classe existente, e herdar seus métodos e propriedades. Funções não tem um recurso de herança integrado.

  ex.

  ```js
  // Definindo uma classe "Pessoa" como classe base
  class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }

    apresentar() {
      console.log(
        `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`,
      );
    }
  }

  // Definindo uma classe "Usuario" que herda da classe "Pessoa"
  class Usuario extends Pessoa {
    constructor(nome, idade, email, senha) {
      super(nome, idade); // Chama o construtor da classe base para definir o nome e a idade
      this.email = email;
      this.senha = senha;
    }

    logar() {
      console.log(`Usuário ${this.email} fez login.`);
    }

    // Sobrescreve o método "apresentar" da classe base
    apresentar() {
      console.log(
        `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos. Meu e-mail é ${this.email}.`,
      );
    }
  }

  // Criando um novo objeto da classe "Usuario"
  const usuario1 = new Usuario('João', 30, 'joao@mail.com', '12345');

  // Chamando o método "apresentar" do objeto
  usuario1.apresentar(); // Olá, meu nome é João e eu tenho 30 anos. Meu e-mail é joao@mail.com.

  // Chamando o método "logar" do objeto
  usuario1.logar(); // Usuário joao@mail.com fez login.
  ```

- **Instâncias**: As classes são usadas para criar instâncias de objetos, enquanto as funções geralmente são usadas como blocos de código reutilizáveis que podem ser chamados várias vezes.

  ex.

  ```js
  //Suponha que temos a classe User com as propriedades name e email, e o método sendEmail(), que envia um e-mail para o usuário:

  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    sendEmail() {
      // Código para enviar um e-mail
      console.log(`E-mail enviado para ${this.name} (${this.email})`);
    }
  }

  //Podemos criar uma instância da classe User da seguinte maneira:
  const user1 = new User('João', 'joao@email.com');

  //Neste exemplo, estamos criando uma instância da classe User chamada user1 com as propriedades name igual a "João" e email igual a "joao@email.com".

  //Para chamar o método sendEmail() da instância user1, podemos fazer o seguinte:

  user1.sendEmail(); // imprime "E-mail enviado para João (joao@email.com)"

  //Desta forma, estamos chamando o método sendEmail() na instância user1, que imprimirá a mensagem "E-mail enviado para João (joao@email.com)" no console.
  ```

- **Métodos**: As classes geralmente tem métodos que são usados para definir comportamentos específicos do objeto. As funções também podem ter métodos, mas geralmente são utilizados para definir comportamentos mais gerais e genéricos.

#### Leia mais sobre

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
