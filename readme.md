# Seção de introdução com React utilizando módulos CSS e hooks personalizados | Desafio do Frontend Mentor

Sendo este um projeto simples da plataforma Frontend Mentor, o mesmo ainda continha funcionalidades e uma estrutura interessante para **compor componentes React** e até utilizar **hooks personalizados**.

![Captura de tela do projeto](https://user-images.githubusercontent.com/72027449/210087631-f2d609c6-3c3d-47c8-b178-b7e9f393df21.png)

## 🔗 Acesse o projeto

* [Site ao vivo](https://leo-henrique.github.io/intro-section//)
* [Desafio no Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5)

## 🚀 Execute em sua máquina

### 👨‍💻 Instale as dependências:
```bash
npm install
```

### 👨‍💻 Veja o projeto em seu navegador:
```bash
npm run preview
```

## 💡 Destaques do projeto e meus aprendizados

Optei por criar o meu ambiente de desenvolvimento utilizando o [Vite.js](https://vitejs.dev/).

Confira meus principais aprendizados em relação ao React:

### 👨‍💻 Composição de componentes

Visando reutilização e organização, este é um projeto que apesar de simples, permitiu fragmentar bem a interface em componentes, pois continha funcionalidades (como um menu dropdown) que poderia ser reutilizado em diversas outras partes do site.

Para exemplificar, veja a execução de meu componente a seguir. Bastava especificar somente as características peculiares de cada item que a função do componente fazia todo o resto do trabalho para criar meu dropdown.

```js
<li className={styles.navItem}>
    <Dropdown name="Empresa">
        <DropdownItem text="História" />
        <DropdownItem text="Nosso time" />
        <DropdownItem text="Blog" />
    </Dropdown>
</li>
```

### 👨‍💻 Módulos CSS e estrutura de pastas

Assim como o Create React App, Vite também permite importações de arquivos CSS no JavaScript e a utilização de arquivos CSS como módulos CSS.

Com isso, criei uma pasta chamada "SCSS" que continha estilos globais que eu importava no meu componente principal, chamado App. Estilos relacionados a um componente específico se mantinha em uma pasta específica do componente, onde o mesmo era importado como módulo no arquivo JSX para aproveitar os nomes de classes únicas fornecidas pelos módulos CSS.

Mesmo sendo uma estrutura de pastas desnecessária para o tamanho do projeto, eu quis chegar o mais próximo possível de como um projeto real e comum realmente seria estruturado:

![Estrutura de pastas em React utilizando módulos CSS](https://user-images.githubusercontent.com/72027449/210089483-2c6b47a6-0289-4b07-abd3-4eab82a8cb06.png)


### 👨‍💻 Hooks personalizados (useAnimation)

O projeto continha uma funcionalidade bem comum que, em partes, seria utilizado de forma igual em diferentes componentes na minha página. Seria essa funcionalidade abrir ou fechar um elemento que por padrão é oculto (como um menu mobile e um menu dropdown).

Como havia várias semelhanças, pude criar um hook personalizado chamado *useAnimation*, onde eu passava o elemento que seria aberto ou fechado como argumento obrigatório. O hook retornava pra mim uma função que eu poderia atrelar exatamente no botão que eu gostaria que abrisse ou fechasse o botão.

```js
const content = React.useRef();
const { visibility, open } = useAnimation({
    element: content,
    styles,
});

return (
    <>
        <button className={styles.dropdownBtn}
        onClick={open}
        aria-expanded={visibility}>
    {/* ... */}
```

O mesmo hook continha diversas características que são iguais em diversas funcionalidades que exibam e ocultam um elemento, poupando assim muita repetição desnecessária.