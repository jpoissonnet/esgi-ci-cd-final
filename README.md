# ESGI Rendu CI/CD 2025

## Introduction

Voici le repo du rendu pour la matière de CI/CD contenant une app minimaliste et des workflows de CI/CD
## Groupe
Notre groupe est consitué de: 
- Ruddy Morel
- Jules Poissonnet

# Application dummy

L'application est une bête page web qui à un bouton faisant appel à une API qui mettra X ms à nous répondre.
En se rendant sur `localhost:3000/0`, l'API répondra instantanément alors que sur l'url `localhost:3000/12000` l'API mettra 12s à repondre.

## Installation

Pour installer et faire fonctionner l'app, il faut Node > 21.
On utilise `pnpm` comme package manager, il est installé de base dans Node, on peut l'activer en faisant `corepack enable pnpm`

```bash
pnpm i
pnpm dev
```

L'application est disponible sur le port 3000 de votre machine

## TODO:
 - [x] Présence de tags
 - [ ] [Sur chaque PR] Workflow avec lint, build et test + require green CI to merge a PR
 - [ ] [Sur main] Workflow de deploiement qui build et pousse l'image docker sur dockerhub avec un tag "latest" ou "<tag">"