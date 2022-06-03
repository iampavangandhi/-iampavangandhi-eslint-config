const base = require("./lib/base.js");
const react = require("./lib/react.js");

module.exports = {
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["simple-import-sort", "import", "react-hooks"],
  rules: {
    ...base,
    ...react,
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "./"],
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/"],
};
