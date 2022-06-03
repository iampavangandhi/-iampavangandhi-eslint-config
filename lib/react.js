module.exports = {
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["hrefLeft", "hrefRight"],
      aspects: ["invalidHref", "preferButton"],
    },
  ],
  "jsx-a11y/label-has-associated-control": "error",
  "react/react-in-jsx-scope": "off",
  "react/no-danger": "off",
  "react/no-array-index-key": "error",
  "react/no-unescaped-entities": "error",
  "react/jsx-filename-extension": [
    "error",
    {
      extensions: [".js"],
    },
  ],
  "react/jsx-props-no-spreading": "warn", // TODO: change warn to error
  "react/require-default-props": "error",
  "react/prop-types": "warn",
  "react-hooks/exhaustive-deps": "warn",
  "react-hooks/rules-of-hooks": "error",
};
