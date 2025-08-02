import React from 'react';
import WhatsAppPopup from './whatsapp';

// Example 1: Spiritual/Wellness Company
export const SpiritualWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Divine Mentors"
    phoneNumber="+91 9156123575"
    defaultMessage="Namaste! I'm interested in your spiritual guidance services."
    position="left"
    theme="spiritual"
  />
);

// Example 2: Corporate/Business Company
export const CorporateWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Tech Solutions Inc."
    phoneNumber="+1 555-0123"
    defaultMessage="Hello! I'd like to discuss your business solutions."
    position="right"
    theme="corporate"
  />
);

// Example 3: Real Estate Company
export const RealEstateWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Property Drone Realty"
    phoneNumber="+1 555-0456"
    defaultMessage="Hi! I'm interested in your real estate services."
    position="right"
    theme="default"
  />
);

// Example 4: E-commerce Company
export const EcommerceWhatsApp = () => (
  <WhatsAppPopup 
    companyName="ShopSmart"
    phoneNumber="+1 555-0789"
    defaultMessage="Hello! I have a question about your products."
    position="left"
    theme="corporate"
  />
);

// Example 5: Healthcare Company
export const HealthcareWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Wellness Clinic"
    phoneNumber="+1 555-0321"
    defaultMessage="Hi! I'd like to schedule a consultation."
    position="right"
    theme="default"
  />
);

// Example 6: Educational Institution
export const EducationWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Learning Academy"
    phoneNumber="+1 555-0654"
    defaultMessage="Hello! I'm interested in your courses."
    position="left"
    theme="corporate"
  />
);

// Example 7: Restaurant/Food Business
export const RestaurantWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Taste of India"
    phoneNumber="+1 555-0987"
    defaultMessage="Hi! I'd like to make a reservation."
    position="right"
    theme="default"
  />
);

// Example 8: Fitness/Wellness Center
export const FitnessWhatsApp = () => (
  <WhatsAppPopup 
    companyName="FitLife Studio"
    phoneNumber="+1 555-0123"
    defaultMessage="Hello! I'm interested in your fitness programs."
    position="left"
    theme="corporate"
  />
);

// Example 9: Legal Services
export const LegalWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Legal Associates"
    phoneNumber="+1 555-0456"
    defaultMessage="Hi! I need legal consultation."
    position="right"
    theme="corporate"
  />
);

// Example 10: Creative Agency
export const CreativeAgencyWhatsApp = () => (
  <WhatsAppPopup 
    companyName="Creative Studio"
    phoneNumber="+1 555-0789"
    defaultMessage="Hello! I'm looking for creative services."
    position="left"
    theme="corporate"
  />
);

// Usage Instructions:
/*
To use these examples in your pages:

1. Import the specific component you need:
   import { SpiritualWhatsApp } from './components/whatsapp-examples';

2. Add it to your page component:
   export default function MyPage() {
     return (
       <div>
         <h1>My Page Content</h1>
         <SpiritualWhatsApp />
       </div>
     );
   }

3. Or create your own custom configuration:
   <WhatsAppPopup 
     companyName="Your Company Name"
     phoneNumber="+1 555-0123"
     defaultMessage="Your custom message"
     position="left" // or "right"
     theme="spiritual" // or "corporate" or "default"
   />

Available themes:
- spiritual: Brown/orange colors, spiritual messaging
- corporate: Blue colors, professional messaging  
- default: Green colors, general messaging

Available positions:
- left: Positioned on the left side of the screen
- right: Positioned on the right side of the screen
*/ 