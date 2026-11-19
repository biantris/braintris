export default [
  {
    ignores: ['node_modules', 'dist'], // Adjust ignored paths as needed
  },
  {
    files: ['**/*.js', '**/*.ts'], // Specify file patterns
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Add your ESLint rules here
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
