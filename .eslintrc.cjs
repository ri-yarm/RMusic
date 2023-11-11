module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs',],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', "simple-import-sort",
    '@typescript-eslint'],
  rules: {
    "prettier/prettier": "error",
    "no-console": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",

    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          ["^\\u0000"],
          ["^@app?\\w"],
          ["^@app/components?\\w"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    //! END - eslint-plugin-simple-import-sort ?//
  },
}
