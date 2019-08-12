# openmrs-owa-boilerplate

[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

Boilerplate application for building OpenMRS OWA applications.

## Pre Requisites

`Node v12.7.0`

`Docker Desktop > 2`

## Features Added

- Linting - ESLint, Prettier, StyleLint
- Packaging & Bundling - WebPack, Babel, PostCSS
- Progressive Web Application - Workbox
- Inbuild OpenMRS Runtime
- Unit Testing - Jest, enzyme
- E2E Testing - Cypress

## How to setup?

- Start OpenMRS application.

  `npm run openmrs-start`

- Wait for application to come up & show healthy status. use `docker ps` to check the status of the containers.

- Browse `http://localhost:8080/openMRS` to ensure openMRS reference application is loading correctly.

- Change application name, description, folder name & other required details in `manifest.webapp` file.

- Install node package dependencies.

  `npm install`

- Build application.

  `npm run build`

- Browse to `http://localhost:8080/openmrs/owa/{application-name}/index.html` to view our OWA's home page.

- Run `npm run dev` to run application in dev mode. Dev mode watch the source files & builds whenever there is a change.
