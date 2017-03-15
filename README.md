# MeanTemplate

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.
Run `ng install -g angular-cli`

## New App
Run `ng new app-name` for a fresh app folder (Don't use in this folder). 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Adding Express
Run `ng install --save express body-parser` to install express.js and body-parser as dependencies.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Run server
Run `node server.js` to start runnning server. Navigate to `http://localhost:3000`

## Mock data (Optional)
For mock json for testing, run `npm install --save axios`

## Build angular-app and server together
Run `ng build && node server.js` or add `"scripts": { "build": "ng build && node server.js" }` in `package.json`
And then run `ng run build`

## Creating services
Run `ng generate service service-name`

## Source files
Check following for any source problems
1. server.js
2. src/app/posts
3. server/routes