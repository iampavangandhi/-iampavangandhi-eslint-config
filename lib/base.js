module.exports = {
  // Import Rules
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: true,
    },
  ],
  "import/prefer-default-export": "off",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "simple-import-sort/imports": [
    "error",
    {
      groups: [
        // Packages. `react` related packages come first
        ["^react", "^@?\\w"],
        // Side effect imports
        ["^\\u0000"],
        // Internal components & containers
        ["^(containers|components)(/.*|$)"],
        // Internal apis
        ["^(apis)(/.*|$)"],
        // Parent imports. Put `..` last
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        // Other relative imports. Put same-folder imports and `.` last
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        // Style imports
        ["^.+\\.s?css$"],
      ],
    },
  ],
  "simple-import-sort/exports": "error",
  // Main Rules
  "no-console": "error",
  "spaced-comment": "error",
  "no-inline-comments": "error",
  "no-nested-ternary": "off",
  "no-underscore-dangle": "off",
  "no-use-before-define": "warn", // TODO: change warn to error
  "no-unsafe-optional-chaining": "error",
  "no-shadow": [
    "error",
    {
      hoist: "all",
      allow: ["resolve", "reject", "done", "next", "err", "error"],
    },
  ],
  "prettier/prettier": "off",
};
