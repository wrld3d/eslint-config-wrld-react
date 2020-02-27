module.exports = {
  "env": {
      "browser": true
  },
  "plugins": [
      "react"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "globals": {
      "process": true,
      "$": true,
      "L": true,
      "module": true,
      "require": true,
      "Promise": true,
      "env": true,
      "stripe": true,
      "Rails": true
  },
  "rules": {
      "indent": ["warn", 2, { "SwitchCase": 1 }],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
      "no-console": ["error", { "allow": ["warn", "error"] }],

      "no-mixed-spaces-and-tabs": "warn",
      "no-implicit-globals": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "max-lines": ["error", { "max": 200, "skipBlankLines": true }],
      "no-unneeded-ternary": "error",
      "array-callback-return": "error",
      "block-scoped-var": "error",
      "complexity": "error",
      "consistent-return": "error",
      "no-alert": "error",
      "no-empty-function": "error",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-warning-comments": "warn",
      "require-await": "error",
      "no-multi-spaces": "warn",
      "no-trailing-spaces": "error",
      "no-useless-computed-key": "error",
      "require-atomic-updates": "error",

      "react/prop-types": "off",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-closing-tag-location": "error",
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/prefer-stateless-function": "error",
  },
  "settings": {
      "react": {
        "version": "detect"
      }
  },
  "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  }
};