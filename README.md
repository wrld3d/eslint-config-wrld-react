# ESlint Config WRLD React

This project is an ESLint plugin that contains shared code styling rules for WRLD React projects.

## Installation

Make sure you have `eslint` >= 6 and `react` >= 16 installed. They are required as a peer dependency, so you need to install them yourself.

Install the plugin:

    npm install eslint-config-wrld-react

or

    yarn add eslint-config-wrld-react

Then configure your `.eslintrc.json` as follows:

```json
{
    "extends": ["wrld-react"],
    "rules": {
        ...custom rules
    }
}
```

## Running lint

To run eslint execute this from the root of your project:

```sh
eslint --ext .js --ext .jsx path/to/src -c .eslintrc.json
```

This can be configured as an npm/yarn script in your `package.json`:

```json
{
  ...
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx path/to/src -c .eslintrc.json"
  },
  ...
}
```

So that then you can just run:

```sh
npm run lint
```

or 

```sh
yarn run lint
```
