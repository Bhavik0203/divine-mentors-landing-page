# Divine Mentors - Internationalized Website

This is a Next.js application with full internationalization (i18n) support using i18next.

## Features

- 🌍 **Multi-language Support**: English, French, German, Hindi, Italian, and Spanish
- 🚀 **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design**
- 🔄 **Language Switcher** with flags

## Supported Languages

- 🇬🇧 English (en)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇮🇳 Hindi (hi)
- 🇮🇹 Italian (it)
- 🇪🇸 Spanish (es)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## How to Use the Language Switcher

1. **Desktop**: Click on the language flag/name in the top navigation bar
2. **Mobile**: Open the mobile menu and select your preferred language
3. **Language Selection**: Choose from the dropdown menu with flags and language names

## Adding New Languages

1. **Create a new translation file** in `src/locales/[language-code].json`
2. **Add the language to the i18n configuration** in `src/i18n.ts`
3. **Update the LanguageSwitcher component** in `src/app/components/LanguageSwitcher.tsx`

Example for adding Portuguese:

```json
// src/locales/pt.json
{
  "navigation": {
    "home": "Início",
    "about": "Sobre",
    // ... rest of translations
  }
}
```

```typescript
// src/i18n.ts
import ptTranslations from './locales/pt.json';

const resources = {
  // ... existing languages
  pt: {
    translation: ptTranslations,
  },
};
```

```typescript
// src/app/components/LanguageSwitcher.tsx
const languages = [
  // ... existing languages
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];
```

## Translation Structure

The translation files are organized by sections:

- `navigation`: Navigation menu items
- `hero`: Hero section content
- `painPoints`: Pain points/benefits
- `offerings`: What we offer section
- `mentors`: Mentor information
- `blogs`: Blog posts
- `faq`: Frequently asked questions
- `pricing`: Pricing tiers
- `common`: Common UI elements

## Technology Stack

- **Framework**: Next.js 15
- **Internationalization**: i18next + react-i18next
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language Detection**: i18next-browser-languagedetector

## Development

- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Hot Reload**: Development server with hot reload
- **Responsive**: Mobile-first design approach

## Deployment

The application can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add translations for all supported languages
5. Submit a pull request

## License

This project is licensed under the MIT License.
