/* eslint-env es6 */
const OFF = 0;
const WARN = 1;
// const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@remix-run/eslint-config/internal",
    "plugin:markdown/recommended-legacy",
  ],
  plugins: ["markdown"],
  settings: {
    "import/internal-regex": "^~/",
  },
  rules: {
    "no-restricted-imports": [
      WARN,
      {
        importNames: ["default"],
        message: "Please use named imports instead.",
        name: "react",
      },
      {
        importNames: ["FC", "VFC", "VoidFunctionComponent"],
        message: "Please use 'FunctionComponent' instead.",
        name: "react",
      },
    ],
    "prefer-let/prefer-let": OFF,
    "prefer-const": WARN,

    "import/order": [
      WARN,
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        "newlines-between": "always",
      },
    ],

    "react/jsx-no-leaked-render": [WARN, { validStrategies: ["ternary"] }],
  },
};
