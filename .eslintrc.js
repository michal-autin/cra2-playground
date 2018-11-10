module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "16.6", // React version, default to the latest React stable release
      flowVersion: "0.53" // Flow version
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },
  rules: {}
};
