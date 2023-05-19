---
id: layers-rest-apis
title: Camadas em APIs REST
tags:
  - api
  - layers-rest
  - content
  - notes
  - pt-PR
---

### Camadas de uma API Rest

- Essas nomenclaturas geralmente fazem parte de arquitetura de software usada em APIs RESTful, presentes em arquiteturas de [camadas](https://pt.wikipedia.org/wiki/Arquitetura_multicamada) ou [hexagonal](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)):

#### CONTROLLES(Controladores): 

- São responsáveis por receber as requisições HTTP e controlar o fluxo de dados dentro da aplicação. Eles são responsáveis por receber as requisições e enviar as respostas adequadas ao cliente.

#### REPOSITORIES(Repositórios): 

- São responsáveis por gerenciar o acesso e manipulação de dados. Eles são responsáveis por criar, ler, atualizar e excluir (CRUD) registros em um banco de dados ou qualquer outro tipo de armazenamento de dados.

#### DOMAIN(Domínio): 

- É a camada que contém as regras de negócio da aplicação. É aqui que as regras de validação e lógica de negócio são implementadas.

#### ENTITIES(Entidades):

- São objetos que representam os dados da aplicação, como usuários, produtos, pedidos, etc. Esses objetos são usados para transferir dados entre as camadas da aplicação.

#### MODULES (Módulos): 

- São pacotes que contêm funcionalidades relacionadas. Por exemplo, um módulo de autenticação pode conter rotas, controladores, serviços e repositórios relacionados à autenticação.

#### FACTORY(Fábrica): 

- É um padrão de projeto utilizado para criar objetos de forma dinâmica. A camada de fábrica é responsável por instanciar e configurar objetos complexos, como controladores, serviços e repositórios, e fornecê-los para outras partes da aplicação.

#### DTO(Objeto de transferência de dados):

- É uma estrutura de dados que representa os dados relevantes para transferência entre diferentes partes do sistema, ajudando a manter a coesão, desacoplamento e eficiência da comunicação entre os componentes.