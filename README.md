# React UI Component Library

A modern, accessible, and customizable React UI component library built with TypeScript and styled-components.

## Features

- 🎨 Modern and clean design
- 📦 Lightweight and modular
- 🎯 Fully typed with TypeScript
- 🎭 Customizable theming
- 📱 Responsive components
- ♿ Accessibility built-in
- 📚 Comprehensive documentation
- 🧪 Tested with Jest and React Testing Library

## Installation

```bash
npm install @your-org/react-ui
# or
yarn add @your-org/react-ui
```

## Usage

```tsx
import { Button, ThemeProvider, theme } from '@your-org/react-ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </ThemeProvider>
  );
}
```

## Components

### Button

A versatile button component with multiple variants, sizes, and colors.

```tsx
import { Button } from '@your-org/react-ui';

// Contained button
<Button variant="contained" color="primary">
  Contained Button
</Button>

// Outlined button
<Button variant="outlined" color="secondary">
  Outlined Button
</Button>

// Text button
<Button variant="text" color="primary">
  Text Button
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'contained' \| 'outlined' \| 'text' | 'contained' | The variant to use |
| size | 'small' \| 'medium' \| 'large' | 'medium' | The size of the button |
| color | 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' | 'primary' | The color of the button |
| fullWidth | boolean | false | If true, the button will take up the full width of its container |
| disabled | boolean | false | If true, the button will be disabled |
| startIcon | ReactNode | undefined | Icon to display at the start of the button |
| endIcon | ReactNode | undefined | Icon to display at the end of the button |

## Theming

The library comes with a default theme, but you can customize it to match your brand:

```tsx
import { ThemeProvider, theme } from '@your-org/react-ui';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      main: '#your-color',
      light: '#your-light-color',
      dark: '#your-dark-color',
      contrast: '#your-contrast-color',
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

## Development

### Prerequisites

- Node.js >= 14
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/react-ui.git
cd react-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start Storybook:
```bash
npm run storybook
# or
yarn storybook
```

### Available Scripts

- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 