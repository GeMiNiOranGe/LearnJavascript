import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    ignores: ["**/*.config.js"],
    rules: {
      indent: [
        "error",
        4
      ],
      semi: [
        "error",
        "always"
      ],
      quotes: [
        "error",
        "double"
      ]
    },
  },
  pluginJs.configs.recommended,
];