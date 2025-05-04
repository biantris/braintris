---
id: django
title: Django
tags:
  - django
  - content
  - notes
  - pt-BR
---

### Notas sobre o curso Django framework na prática e dúvidas pelo caminho

- link dos conteúdos: https://github.com/tchaguitos/djangoframeworknapratica?tab=readme-ov-file
- repositório: 

#### Tecnologias usadas:
- Python 3.8 
- virtualenv (https://formulae.brew.sh/formula/virtualenv)
- Django 3.0.0 

### Virtualenv x Pyenv

#### Virtualenv
- **Objetivo:** Criar ambientes virtuais isolados para projetos Python.
- **Uso:** Permite que você tenha diferentes ambientes Python, cada um com seu próprio conjunto de bibliotecas e dependências, sem interferir uns nos outros.
- **Como funciona:** Cria uma cópia de uma instalação específica do Python e permite que você instale pacotes nesse ambiente sem afetar o Python global ou outros ambientes virtuais.
- **Comando de uso:** virtualenv `<nome_do_ambiente>`

#### Pyenv
- **Objetivo:** Gerenciar múltiplas versões do Python no mesmo sistema.
- **Uso:** Permite instalar, desinstalar e alternar entre diferentes versões do Python facilmente.
- **Como funciona:** Instala diferentes versões do Python em diretórios isolados e altera as variáveis de ambiente para apontar para a versão desejada.
- **Comando de uso:** pyenv install `<versão>`, pyenv global `<versão>`, pyenv local `<versão>`


### Criação do Projeto
- Criar ambiente isolado para o projeto: `virtualenv -p python3.8 env`
- Ativar ambiente: `source env/bin/activate`
- Instalar o django: `pip install Django==3.0.0`
- Criar projeto com django: `django-admin startproject <nome-do-projeto> .`
- Rodar servidor: `python manage.py runserver`

### Estrutura do projeto