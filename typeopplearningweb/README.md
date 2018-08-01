# typeopp-learning skeleton  - built with Angular5 + Redux pattern + TypeScript + Webpack + Angular Material Design.
by [@kiranchowdhury](https://www.facebook.com/kiran.s.chowdhury)
This repository provides the skeleton for typeopplearning UI using [Angular5], It also uses [Angular Material Design] for various UI components, [NPM](https://github.com/npm/npm) as package manager, [TypeScript](https://github.com/Microsoft/TypeScript) and [Webpack](https://github.com/webpack/webpack) as module loader.

## Features - Technical
- [x] TypeScript
- [x] TSLint
- [x] @types
- [x] Webpack 3
- [x] Styling using SASS
- [x] NPM
- [x] Code Coverage
- [x] Angular 6
- [x] Lazy-loading
- [x] Lazy reducers
- [x] LocalStorage ui state persistence
- [x] `@ngrx/effects` for API requests
- [x] Time travel debigging capability
- [x] Production build containing chunks

## Features - Functional
- [x] Fully responsive design



## Table of Content

  * [Getting Started](#getting-started)
  * [Useful Commands](#useful-commands)
  * [Learning Materials](#learning-materials)
  

## Getting started
```bash
1. Install node from - https://nodejs.org/en/download/
(Make sure the version of node is 8.9.x or later)

2. Install Google Chorome if not installed already

3. Time Travel Debugging -
Download the [Redux Devtools Extension](http://zalmoxisus.github.io/redux-devtools-extension/)

4. IDE => I prefer to use Visual Studio Code.. but any IDE of your choice will be ok. You can install
the Visual Studio Code from here (https://code.visualstudio.com/download).

5. Clone the project from git -
git clone https://github.com/kiranchowdhury/typeopp-learning.git

6. Installing the app -
npm install
cd typeopplearning

7. Steps to run while you are in development mode -
(The Frond end will be served from http-server and the node BFF will be served from Node HTTP Server.
A ng cli proxy has been configured to resolve the cross domeanin security issue.
When you run the app development mode, your change will automatically be published and
browser will be reloaded.)
 - to start the node backend:
Open a terminal/cmd promt and then run => "npm run node:start"
 - to start the ePricer frontend app:
Open another terminal and then run => "npm run ng:serve"
 - Chrome Browser will automatically open and application will be launched

8. Running the app in production mode
(Both the front end and Backend will be serverd from Express Server)
 - npm run start:prod
```

## Useful Commands
  * `npm start` - starts a dev server and opens browser with running app
  * `npm run test` - runs lint and tests
  * `npm run watch` - runs tests in watch mode
  * `npm run prod` - runs full prod build and serves prod bundle
  * `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`) 
  * `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application) 


## Learning Materials

  * [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project

#### Theming 

  * [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)


### Acknowledgements

Built with and uses [Angular CLI](https://github.com/angular/angular-cli)
