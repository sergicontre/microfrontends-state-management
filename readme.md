# Micro Fronetends state management example

This is an example project to show how to manage data/state with Web Components using Micro Frontends techniques.

The application uses ES modules 📦 for development, and [Webpack](https://webpack.js.org) as
a module bundler. 

## Features

- 🚀 Use [LitElement](https://lit-element.polymer-project.org/). A simple base class for creating fast, lightweight web components
- ✏️ Use [Wired Elements](https://wiredjs.com/). A set of common UI elements with a hand-drawn, sketchy look. These can be used for wireframes, mockups, or just the fun hand-drawn look.
 Wired Elements implemented as web components, and can be used on any page and with most frameworks. 
- 🚦 [Vaadin Router](https://vaadin.com/router) configured for code splitting and lazy loading
- 🛠 [webpack 4](https://github.com/webpack/webpack) for easy development and production bundling

## State Management Patterns

- 👨‍👦‍👦 Use Mediator pattern to manage state in Micro Frontend scope.
- 🎛 Use Pub/Sub pattern to manage state in Global scope to share state between Micro Frontends.
- Use ⬆️events up and ⬇️ properties/attributes down in Web Components scope.




## Install dependencies

```sh
npm i
```

## Start the development server

Start `webpack-dev-server` on localhost:

```sh
npm run dev
```


Scaffold based on https://github.com/vaadin-learning-center/lit-element-tutorial-04-navigation-and-code-splitting.git

