# ESGI Rendu CI/CD 2025

## Introduction

Voici le repo du rendu pour la matière de CI/CD contenant une app minimaliste et des workflows de CI/CD
## Groupe
Notre groupe est constitué de : 
- Ruddy Morel
- Jules Poissonnet

# Application dummy

L'application est une bête page web qui à un bouton faisant appel à une API qui mettra X ms à nous répondre.
En se rendant sur `localhost:3000/0`, l'API répondra instantanément alors que sur l'url `localhost:3000/12000` l'API mettra 12s à répondre.

## Installation

Pour installer et faire fonctionner l'app, il faut Node > 21.
On utilise `pnpm` comme package manager, il est installé de base dans Node, on peut l'activer en faisant `corepack enable pnpm`

```bash
pnpm i
pnpm dev
```

L'application est disponible sur le port 3000 de votre machine

## Continuous Integration

Le CI est fait avec Github Actions, il est déclenché à chaque push sur la branche main et sur chaque PR.

Le workflow est le suivant :
- Lint
- Build
- Test

### Lint

Le linter utilisé est oxlint, on peut le lancer avec `pnpm lint`.
Le workflow de lint est reproductible en local en faisant:
```bash
pnpm install
pnpm lint
```

### Build

Le "build" est en fait une transpilation des fichiers typescript en fichiers javascript, on peut le lancer avec `pnpm build`.
Le workflow de build est reproductible en local en faisant:
```bash
pnpm install
pnpm build
```

### Test

Les tests sont fait avec vitest, on peut les lancer avec `pnpm test`.
Le test est bidon, il vérifie qu'une valeur qu'on passe dans l'url se retrouve dans le template.

Le workflow de test est reproductible en local en faisant:
```bash
pnpm install
pnpm test
```

## Continuous Deployment

Le CD est fait avec Github Actions, il est déclenché à chaque push sur la branche main et à la création d'un tag.

Le workflow permet de build l'image docker et de la push sur DockerHub avec un tag "latest" ou "nom du tag".

L'idée est que le workflow tourne sur master, donc à chaque fois qu'on merge une PR et pousse sur le [dockerhub](https://hub.docker.com/repository/docker/jpoissonnet/esgi-ci-cd/tags) avec le tag "latest".
Si, on pousse un tag sur github, il se déclenche également en poussant sur dockerhub une image avec le tag docker du même nom que le tag github.

## TODO:
 - [x] Présence de tags
 - [x] [Sur chaque PR] Workflow avec lint, build et test + require green CI to merge a PR
 - [x] [Sur main] Workflow de deploiement qui build et pousse l'image docker sur dockerhub avec un tag "latest" ou "<tag>"
