# React + TypeScript + Vite

This template provides a minimal setup to get React working seamlessly with Vite, featuring Hot Module Replacement (HMR) and a basic ESLint configuration.

## Key Features

- **Fast Refresh**: Choose between Babel or SWC for optimized development.
- **TypeScript Support**: Fully integrated TypeScript setup for type safety.
- **Customizable ESLint Rules**: Expandable linting configuration for production-grade applications.

## Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Enhancing ESLint Configuration

For production applications, we recommend enabling type-aware linting rules. Follow these steps to expand the ESLint configuration:

1. **Update `parserOptions`**:
  ```js
  export default tseslint.config({
    languageOptions: {
     parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
     },
    },
  })
  ```

2. **Switch to Type-Checked Configurations**:
  - Replace `tseslint.configs.recommended` with:
    - `tseslint.configs.recommendedTypeChecked` or
    - `tseslint.configs.strictTypeChecked`.
  - Optionally, include `...tseslint.configs.stylisticTypeChecked` for stylistic rules.

3. **Install and Configure `eslint-plugin-react`**:
  ```js
  // eslint.config.js
  import react from 'eslint-plugin-react'

  export default tseslint.config({
    settings: { react: { version: '18.3' } },
    plugins: { react },
    rules: {
     ...react.configs.recommended.rules,
     ...react.configs['jsx-runtime'].rules,
    },
  })
  ```

## Getting Started

1. Clone the repository:
  ```bash
  git clone https://github.com/your-repo/your-project.git
  cd your-project
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run dev
  ```

4. Build for production:
  ```bash
  npm run build
  ```

5. Preview the production build:
  ```bash
  npm run preview
  ```

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)

## License

This project is licensed under the [MIT License](LICENSE).

