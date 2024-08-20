## Trabalho Prático - Gestão de Equipes

Este projeto é um trabalho prático desenvolvido pelo Grupo 4 como parte da disciplina de Gestão de Equipes da Universidade Federal de Minas Gerais (UFMG). O MVP (Produto Mínimo Viável) foi criado para facilitar a comunicação dos alunos com a universidade, centralizando informações e utilizando inteligência artificial para otimizar a resolução de dúvidas.

### Integrantes do Grupo:
- [Chrystian Paulo Ferreira de Melo](https://github.com/ChrystianMelo)
- Gabriel Teixeira Carvalho
- Letícia Santos Bahia Silva
- [Luiza Viana Afonso](https://github.com/Luiza13lv)
- João Vítor Bicalho

## Objetivos

O projeto tem como principais objetivos:

1. **Facilitar o acesso à informação**: Permitir que os alunos obtenham respostas rápidas e precisas para suas dúvidas.
2. **Aumentar a eficiência administrativa**: Reduzir o tempo gasto pela administração da UFMG para responder perguntas frequentes dos alunos.
3. **Melhorar a experiência do aluno**: Oferecer um canal de comunicação eficaz e moderno que atenda às necessidades dos estudantes.
4. **Validar a aplicabilidade das tecnologias**: Demonstrar como a IA pode ser integrada de maneira eficiente no ambiente universitário para resolver problemas reais.

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo web.
- **CSS**: Estilização e layout das páginas.
- **Bootstrap**: Framework para desenvolvimento de interfaces web responsivas.
- **JavaScript**: Funcionalidades interativas e integração com a API.
- **Gemini API**: Plataforma de inteligência artificial utilizada para fornecer respostas automáticas e precisas às perguntas dos alunos.

## Apresentação do Projeto

O projeto inclui um [arquivo](Presentation.pdf) de apresentação em PDF, que detalha os conceitos, objetivos e o protótipo desenvolvido. Esse documento pode ser acessado no diretório do projeto para uma visão geral completa do trabalho realizado pelo grupo.

## Configuração e Execução do Projeto

### Configuração no Windows

#### Requisitos

- [Node.js](https://nodejs.org/en) instalado

No diretório raiz do projeto, você encontrará um arquivo chamado `config_and_run.bat`. Este script é responsável por configurar o ambiente e iniciar o projeto.

Para executar o script:

- Edite a linha `API_KEY=sua_chave_aqui` do arquivo com a api key fornecida pelo [Gemini](https://aistudio.google.com/app/apikey)
- Clique duas vezes no arquivo `config_and_run.bat` ou abra o Prompt de Comando, navegue até o diretório do projeto e execute o comando:

```sh
config_and_run.bat
```

Este script irá:
- Configurar as variáveis de ambiente necessárias, incluindo a API_KEY, se aplicável.
- Instalar dependências, se necessário.
- Iniciar o servidor ou aplicativo.

### Configuração em outras plataformas (Linux, macOS):
  - **Configuração da API_KEY**: Crie um arquivo `.env` no diretório raiz do projeto e adicione a linha `API_KEY=sua_chave_aqui`.
  - **Instalação de Dependências**:
    - No Linux e macOS, você pode usar um gerenciador de pacotes como `apt-get`, `brew` ou `pip` para instalar dependências necessárias.
       - @google/generative-ai
       - @google/generative-ai dotenv