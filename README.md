# rioct-hello-word-ts

A "hello world" example with Rioct + TypeScript + Webpack + source maps.

## Features that is meant to show:

#### Rioct:
- Rioct's `@template()` decorator
- auto mounting of registered tags with `Rioct.mount()`
- use of `<style>` tag locally defined
- Riot's `observable` interface

#### Webpack:
- development / production flag (includes a different `react` and `uglify`)
- split in two bundles: application and libraries (aka vendor) for faster builds
- use of loaders `rioct-loader` and `ts-loader` for compiling `.html` and `.ts` from webpack
- source maps (under "development" flag)
- watch mode: compile only files that are changed

#### Typescript
- typings installed with npm (e.g. `npm i @types/react`)
- use TypeScript 2.0 beta from VSCode (tweaked `settings.json`)

## Installation & Run

1. Clone or unzip the repo to a directory of your choice.
2. run `npm i` to install dependencies
3. run `webpack -w` to build (put it as background task)
4. run `npm run see` to launch the web server on port 3000
5. open `localhost:3000/index.html` in a browser
6. opening `index.html` from the file system works too






