# WhatsApp Popup Component - Usage Guide

## Overview
The WhatsApp popup component has been updated to be fully configurable and suitable for different types of companies and pages. It now supports multiple themes, customizable messaging, and flexible positioning.

## Features

### 🎨 **Multiple Themes**
- **Spiritual**: Brown/orange colors with spiritual messaging
- **Corporate**: Blue colors with professional messaging
- **Default**: Green colors with general messaging

### 📱 **Customizable Properties**
- Company name
- Phone number
- Default message
- Position (left/right)
- Theme selection

### 🎯 **Smart Messaging**
- Context-aware welcome messages based on theme
- Customizable placeholder text
- Pre-filled default messages

## Basic Usage

### 1. Import the Component
```tsx
import WhatsAppPopup from './components/whatsapp';
```

### 2. Use with Default Settings
```tsx
<WhatsAppPopup />
```

### 3. Customize for Your Company
```tsx
<WhatsAppPopup 
  companyName="Your Company Name"
  phoneNumber="+1 555-0123"
  defaultMessage="Hello! I'm interested in your services."
  position="left"
  theme="corporate"
/>
```

## Theme Examples

### Spiritual/Wellness Company
```tsx
<WhatsAppPopup 
  companyName="Divine Mentors"
  phoneNumber="+91 9156123575"
  defaultMessage="Namaste! I'm interested in your spiritual guidance services."
  position="left"
  theme="spiritual"
/>
```

### Corporate/Business Company
```tsx
<WhatsAppPopup 
  companyName="Tech Solutions Inc."
  phoneNumber="+1 555-0123"
  defaultMessage="Hello! I'd like to discuss your business solutions."
  position="right"
  theme="corporate"
/>
```

### Real Estate Company
```tsx
<WhatsAppPopup 
  companyName="Property Drone Realty"
  phoneNumber="+1 555-0456"
  defaultMessage="Hi! I'm interested in your real estate services."
  position="right"
  theme="default"
/>
```

## Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `companyName` | string | "Divine Mentors" | Name displayed in the popup header |
| `phoneNumber` | string | "+91 9156123575" | WhatsApp number to contact |
| `defaultMessage` | string | "Hello! I'm interested..." | Pre-filled message in the input |
| `position` | 'left' \| 'right' | 'left' | Position of the floating button |
| `theme` | 'spiritual' \| 'corporate' \| 'default' | 'spiritual' | Color scheme and messaging style |

## Theme Details

### Spiritual Theme
- **Colors**: Brown/orange palette
- **Welcome Message**: "Namaste! 🙏 How can I assist you on your spiritual journey today?"
- **Placeholder**: "Share your spiritual questions..."
- **Best For**: Wellness centers, spiritual organizations, meditation apps

### Corporate Theme
- **Colors**: Blue palette
- **Welcome Message**: "Hello! 👋 How can we help you with your business needs?"
- **Placeholder**: "Enter your message"
- **Best For**: Tech companies, consulting firms, professional services

### Default Theme
- **Colors**: Green palette (classic WhatsApp)
- **Welcome Message**: "Hey! 👋 How can we help you today?"
- **Placeholder**: "Enter your message"
- **Best For**: General businesses, e-commerce, restaurants

## Implementation Examples

### In Layout (Global)
```tsx
// src/app/layout.tsx
import WhatsAppPopup from './components/whatsapp';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <WhatsAppPopup 
          companyName="Your Company"
          phoneNumber="+1 555-0123"
          theme="corporate"
        />
        {children}
      </body>
    </html>
  );
}
```

### In Specific Pages
```tsx
// src/app/contact/page.tsx
import WhatsAppPopup from '../components/whatsapp';

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with our team</p>
      
      <WhatsAppPopup 
        companyName="Contact Support"
        phoneNumber="+1 555-0123"
        defaultMessage="Hi! I need help with..."
        theme="corporate"
        position="right"
      />
    </div>
  );
}
```

### Using Pre-configured Examples
```tsx
// Import from examples file
import { SpiritualWhatsApp, CorporateWhatsApp } from './components/whatsapp-examples';

// Use in your component
export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <SpiritualWhatsApp />
    </div>
  );
}
```

## Styling Customization

The component uses inline styles for easy customization. You can modify the theme colors by editing the `themes` object in the component:

```tsx
const themes = {
  spiritual: {
    buttonColor: "rgb(139, 69, 19)",
    buttonHoverColor: "rgb(101, 67, 33)",
    headerColor: "#8B4513",
    sendButtonColor: "#D2691E"
  },
  // ... other themes
};
```

## Best Practices

1. **Choose the Right Theme**: Match your company's branding and industry
2. **Position Strategically**: Use 'left' for most cases, 'right' if you have other floating elements
3. **Customize Messages**: Make default messages relevant to your services
4. **Test on Mobile**: Ensure the popup works well on all screen sizes
5. **Update Phone Numbers**: Always use the correct WhatsApp number for your business

## Troubleshooting

### Common Issues

1. **Popup not appearing**: Check if the component is properly imported and rendered
2. **Wrong phone number**: Verify the phone number format (should include country code)
3. **Styling conflicts**: The component uses inline styles to avoid conflicts
4. **Mobile responsiveness**: The component is designed to work on all screen sizes

### Support

For issues or customization requests, check the component source code or create a new issue in your project repository.

## Migration from Old Version

If you were using the old hardcoded version:

1. **Remove old props**: The old version didn't accept any props
2. **Add new props**: Configure the component with your company details
3. **Update imports**: Make sure you're importing the updated component
4. **Test functionality**: Verify that WhatsApp integration still works correctly

The new version is backward compatible and will work with the same functionality as before, just with more customization options. 