
<div align="center">
  <img src="./src/assets/logo.svg" />
</div>

<hr>

# About project

This project is a web application designed to you can simply handle your money!

## Features
- Transaction Management:
  - Add new transactions via a modal (NewTransactionModal).
  - Search for transactions using a search form (SearchForm).
  - Display a list of transactions with details like description, price, category, and date (Transactions).
    
- Context Management:
  - Manage transactions state using context (TransactionsContext).
  - Theming and Styling:

- Apply global styles and themes using styled-components (global.ts, defaultTheme).
  - Use styled-components for component-specific styles (Header/styles.ts, NewTransactionModal/styles.ts).

- Form Handling and Validation:
  - Use react-hook-form for form state management (useForm).
  - Validate forms using zod and @hookform/resolvers/zod (zodResolver).

- UI Components:
  - Use Radix UI for accessible UI components (Dialog, Dialog).
  - Use Phosphor Icons for consistent iconography (MagnifyingGlass, ArrowCircleDown, X).

- Utilities:
  - Format currency and dates using utility functions (currencyFormatter, dateFormatter).
  
- Configuration and Tooling:
  - Linting configuration using ESLint (eslint.config.js).
  - TypeScript configuration for type checking (tsconfig.json, tsconfig.app.json, tsconfig.node.json).
  - Vite configuration for development and build (vite.config.ts).

- Backend Integration:
  - Use JSON Server for a mock backend (json-server).

## Technologies Used

- Frontend: React, Vite, Styled Components, Tailwind CSS, Radix UI and Typescript
- Backend: JSON Server

# Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

```sh
git clone https://github.com/matheus/dt-money.git
```
2. Navigate to the project directory:
```sh
cd dt-money
```

3. Install dependencies:
```sh
pnpm i
```

4. Start the development server:
```sh
pnpm start
```

## Usage

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
