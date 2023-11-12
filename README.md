### Dependencies

#### NodeJS v20.9.0+
1. Install nvm ([Windows](https://github.com/coreybutler/nvm-windows) / [Linux](https://github.com/nvm-sh/nvm)), 
2. Open `terminal/konsole/powershell/cmd` (for windows as admin), type: `nvm install 20.9.0 && nvm use 20.9.0`
3. Restart terminal (in common it's redundant but just in case) and check installation `node -v && npm -v`

####  Init development environement
<h6 style="color: red; font-weight:400">**WARNING!** You can skip this step to prevent global installation of **ANGULAR CLI**. 
Just install all dependencies for projects with command: `npm run install:deps`</h6>

For init developement environement with **angular cli**, run script `npm i init:dev`. This will install `@angular/cli` globally and install all project dependencies

### Scripts
***
### `npm run dev:react` 
#### URL: http://localhost:5173
Build angular components and move related files to `react-app/src/angular-components` folder, if you change something in `angular-app`, you should to restart project to apply changes
***
### `npm run dev:angular` 
#### URL: http://localhost:4200
Start angular application in dev mode, just link to default angular app: `package.json -> scripts.start`
***
### `npm run bootstrap` 
Bootstrap applications without starting. Can be used for hot-reload of react-app
***
### `npm run build:angular`
Build angular files without copying and removing
***
### `npm run install:deps`
Install dependencies for `react-app` and `angular-app`
***
### `npm run init:dev`
Same as `npm run install:deps` but with global installation of `@angular/cli`

### Abstractions levels
`component` - minimal "brick" of application, used for widgets building  
`widget` - independent part of application that can be used in any page. Mostly not accept props but can do for better customization for different pages  
`page` - top level view abstraction consisting of widgets

## Structures

#### Component:
view.tsx - component's code 
index.ts - re-export for better path when using in other components/widgets 
types.ts - component's types 
styles.module.scss - scoped styles for current component
assets - for files that can be used only in current component

#### Widget
Extending `Component structure` but with extra sub-folders:  
`components` - parts of current widget (sub-widgets) used only inside current widget
`hooks` - hooks with logic
`helpers` - helpers, used only inside current widgets, like normalizations, etc

#### Page
`sigle file` with name `*.page.tsx`

### Store

#### Root
`index.ts` - root store with combined reducers  
`types.ts` - types for root store  
`hooks.ts` - typed hooks `useDispatch` and `useSelector` (do not use same hooks from `react-redux` as you will miss types)

#### Entities
`constants.ts` - initial  state (check DefaultStateType) and helpers constants  
`slice.ts` - part of store
`thunks.ts` - functions for async store operations
`types.ts`- types for initial state and action.payload


### Utils
Global hooks and helpers

### Api
Functions for api calls, resolvers and main `apiFetcher` wrapper

`api-config.ts` - configuration file for api
`index.ts` - container for API entities
`types.ts` - common types can be used in different entities

#### apiFetcher
Wrapper for make requests, that accepts `resolver`, `baseURL` and `apiKey`

#### resolvers
Function wrappers that accepts ApiFetcherMethodOptions and returns ApiFetcherResolver (example in file: `resolvers/fetch-resolver`).
The main idea -  easy change request library, for example, from native `fetch` to `axios` or old styled `XMLHttpRequest` by swapping resolvers in `apiFetcher` initializers


### Dev-scripts
`pack-angular.dist.js` - cross-platform automation script for managing angular files and moving it into react-app
