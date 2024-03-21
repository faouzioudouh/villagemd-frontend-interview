# Village Medical - Frontend Interview

![Village Medical](https://www.villagemd.com/hs-fs/hubfs/villagemd-logo-1.png?width=297&height=73&name=villagemd-logo-1.png)

## Introduction

This is a simple application that allows patients to search for providers in their area. The application is built using React and Typescript.

## Features

- Search for doctors by gender and nationality
  - Fetch providers using this mock API: https://randomuser.me/api/
  - Display the results in a list

## Api Documentation

#### Requesting Multiple Providers

[https://randomuser.me/api/?results=5](https://randomuser.me/api/?results=5)

#### Filter by nationality

[https://randomuser.me/api/?nat=us,gb](https://randomuser.me/api/?nat=us,gb)

#### Filter by gender

[https://randomuser.me/api/?gender=female](https://randomuser.me/api/?gender=female)

#### Pagination

[https://randomuser.me/api/?page=3&results=10&seed=abc](https://randomuser.me/api/?page=3&results=10&seed=abc)

#### API Errors

```json
{
  "error": "There was an error"
}
```

### Install packages

```bash
yarn
```

### Run the app

```bash
yarn dev
```

### Run the tests

```bash
yarn test
```

### Screenshots

![Providers list](./providers-list.png)
