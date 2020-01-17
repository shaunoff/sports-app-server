# Setting Up

## Prerequisites

1. `yarn` - (:beer: homebrew) NPM package manager

## Install dependencies

```console
yarn
```

## Generate GraphQL Schema output for TypeScript

Oddly enough, in order for the TS app itself to compile properly, we need to generate these GraphQL schema typeDefs for TS to consume. TypeScript in your TypeScript so you can TypeScript?

```console
yarn codegen
```

\*\* **_You will want to generate this each and any time you alter the GraphQL schema_**

## Build

```console
yarn build
```

## Run

```console
yarn start
```

# TODO / WIP

- Decide on file/folder organisation, keeping an eye on how large this could grow.
- Add a `Dockerfile` to run in a container
- Add `terraform` config to deploy infrastructure to DEV, STG, PROD
- Add a real `ENV` configuration (it's hardcoded right now)
- Fix/Improve the TypeScript types for the `getParamsForFields` function.
- Load testing?
- Apollo Schema Registry
- Get API team eyes on the schema as written. See things like `Invitation` and `Invitations`. Why?
