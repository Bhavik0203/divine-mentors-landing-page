# Divine Mentors Dashboard

A premium dashboard for managing bookings and contacts for the Divine Mentors platform.

## Features

### 🏠 Main Dashboard
- **Overview Statistics**: View total bookings, contacts, pending bookings, new contacts, revenue, and conversion rates
- **Quick Actions**: Easy navigation to booking and contact management
- **Real-time Data**: Live statistics from your backend API

### 📅 Booking Management
- **Complete Booking List**: View all bookings with detailed information
- **Advanced Filtering**: Filter by status (pending, confirmed, cancelled, completed)
- **Search Functionality**: Search by client name, email, or mentor name
- **Bulk Operations**: Select multiple bookings for bulk deletion
- **Individual Actions**: View, edit, or delete individual bookings
- **Status Badges**: Visual status indicators with icons
- **Payment Information**: Display payment amounts and status

### 👥 Contact Management
- **Contact Database**: View all contacts with complete information
- **Multi-level Filtering**: Filter by status and package type
- **Advanced Search**: Search by name, email, or phone number
- **Bulk Operations**: Select multiple contacts for bulk deletion
- **Individual Actions**: View, edit, or delete individual contacts
- **Status Tracking**: Track contact status (new, contacted, converted, closed)
- **Package Information**: Display package types (seeker, disciple, divine)

### 🔐 Authentication System
- **User Registration**: Complete registration form with validation
- **Secure Login**: Email and password authentication
- **Protected Routes**: Automatic redirect for unauthenticated users
- **Session Management**: Persistent authentication state
- **Logout Functionality**: Secure logout with session cleanup
- **Demo Credentials**: Pre-configured admin account for testing

### 🎨 Premium Design
- **Modern UI**: Clean, professional design with premium aesthetics
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Sidebar Navigation**: Easy navigation between dashboard sections
- **Color-coded Status**: Visual status indicators for better UX
- **Loading States**: Smooth loading animations
- **Confirmation Modals**: Safe deletion with confirmation dialogs

## Technical Features

### Frontend
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Responsive Design**: Mobile-first approach

### Backend Integration
- **RESTful API**: Full CRUD operations for bookings and contacts
- **Real-time Updates**: Live data synchronization
- **Error Handling**: Comprehensive error management
- **Loading States**: User-friendly loading indicators

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Backend server running on `http://localhost:3001`

### Installation

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access Dashboard**
   - Open your browser and navigate to `http://localhost:3000/dashboard/login`
   - You'll be redirected to login if not authenticated
   - Use the demo credentials or register a new account

### Authentication

The dashboard includes a complete authentication system:

#### Demo Credentials
- **Email:** admin@divinementors.com
- **Password:** admin123

#### Registration
- Users can register new accounts at `/dashboard/register`
- Registration includes validation for email, password strength, and password confirmation
- New users are automatically redirected to login after successful registration

#### Login
- Users can login with demo credentials or registered accounts
- Successful login redirects to the main dashboard
- Authentication state is persisted in localStorage

#### Protected Routes
- All dashboard pages (except login/register) require authentication
- Unauthenticated users are automatically redirected to login
- Logout functionality is available in the sidebar

### Backend Setup

Ensure your backend server is running with the following endpoints:

- `GET /api/bookings` - Fetch all bookings
- `DELETE /api/bookings/:id` - Delete a booking
- `GET /api/contacts` - Fetch all contacts  
- `DELETE /api/contacts/:id` - Delete a contact

## Usage Guide

### Dashboard Navigation
1. **Sidebar Menu**: Use the left sidebar to navigate between sections
2. **Quick Stats**: View key metrics on the main dashboard
3. **Quick Actions**: Click buttons to access specific management pages

### Managing Bookings
1. **View All Bookings**: Navigate to "Bookings" in the sidebar
2. **Search & Filter**: Use the search bar and status filter to find specific bookings
3. **Select Items**: Use checkboxes to select multiple bookings
4. **Bulk Delete**: Click "Delete Selected" to remove multiple bookings
5. **Individual Actions**: Use the action buttons (view, edit, delete) for individual bookings

### Managing Contacts
1. **View All Contacts**: Navigate to "Contacts" in the sidebar
2. **Advanced Filtering**: Filter by status and package type
3. **Search Contacts**: Use the search bar to find specific contacts
4. **Bulk Operations**: Select and delete multiple contacts
5. **Individual Management**: Use action buttons for individual contact management

### Data Management
- **Real-time Updates**: Data updates automatically when changes are made
- **Safe Deletion**: Confirmation modals prevent accidental deletions
- **Error Handling**: Clear error messages for failed operations
- **Loading States**: Visual feedback during data operations

## Customization

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update component styles in individual page files
- Customize the layout in `dashboard/layout.tsx`

### Functionality
- Add new features by extending the existing components
- Modify API endpoints in `config/api.ts`
- Add new data fields by updating TypeScript interfaces

### Backend Integration
- Update API URLs in `config/api.ts` for different environments
- Modify data structure handling in component files
- Add new API endpoints as needed

## Troubleshooting

### Common Issues

1. **Data Not Loading**
   - Check if backend server is running on port 3001
   - Verify API endpoints are accessible
   - Check browser console for error messages

2. **Delete Operations Failing**
   - Ensure backend DELETE endpoints are working
   - Check network tab for API errors
   - Verify CORS settings on backend

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for missing CSS classes
   - Verify responsive breakpoints

### Performance Optimization
- Implement pagination for large datasets
- Add caching for frequently accessed data
- Optimize API calls with debouncing
- Use React.memo for expensive components

## Support

For technical support or feature requests, please refer to the main project documentation or contact the development team.

---

**Divine Mentors Dashboard** - Premium booking and contact management system 