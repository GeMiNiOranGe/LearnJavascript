import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    pluginJs.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            indent: [
                "error",
                4,
            ],
            "linebreak-style": [
                "error",
                "windows",
            ],
            semi: [
                "error",
                "always",
            ],
            quotes: [
                "error",
                "double",
            ],
            "no-unused-vars": [
                "warn",
            ],
            curly: "error",
        },
    },
];