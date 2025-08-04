# Divine Mentors Booking API

A Node.js REST API built with Express.js and Sequelize ORM for managing booking appointments with mentors.

## Features

- ✅ Complete CRUD operations for bookings
- ✅ Data validation using express-validator
- ✅ MySQL database with Sequelize ORM
- ✅ Pagination and filtering
- ✅ Error handling and logging
- ✅ Security middleware (Helmet, CORS)
- ✅ Status management for bookings
- ✅ Search by mentor name

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

## Installation

1. **Clone the repository and navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `config.env` and update the database credentials:
   ```env
   PORT=3001
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=divinementors_db
   DB_USER=your_username
   DB_PASSWORD=your_password
   ```

4. **Create MySQL database:**
   ```sql
   CREATE DATABASE divinementors_db;
   ```

5. **Start the server:**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Base URL: `http://localhost:3001/api/bookings`

### 1. Create Booking
- **POST** `/api/bookings`
- **Description:** Create a new booking
- **Body:**
  ```json
  {
    "name": "John Doe",
    "date": "2024-01-15",
    "time": "14:30",
    "email": "john@example.com",
    "contact": "+1234567890",
    "message": "I need guidance on meditation",
    "mentorName": "Swami Pratik",
    "address": "123 Main Street, Apartment 4B",
    "postalCode": "12345",
    "city": "New York",
    "demo1": "Optional demo field 1",
    "demo2": "Optional demo field 2",
    "demo3": "Optional demo field 3",
    "demo4": "Optional demo field 4",
    "demo5": "Optional demo field 5"
  }
  ```

### 2. Get All Bookings
- **GET** `/api/bookings`
- **Description:** Get all bookings with pagination and filtering
- **Query Parameters:**
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 10, max: 100)
  - `status` (optional): Filter by status (pending, confirmed, cancelled, completed)
  - `mentorName` (optional): Filter by mentor name

### 3. Get Booking by ID
- **GET** `/api/bookings/:id`
- **Description:** Get a specific booking by ID

### 4. Update Booking
- **PUT** `/api/bookings/:id`
- **Description:** Update a booking (all fields optional)

### 5. Delete Booking
- **DELETE** `/api/bookings/:id`
- **Description:** Delete a booking

### 6. Update Booking Status
- **PATCH** `/api/bookings/:id/status`
- **Description:** Update booking status
- **Body:**
  ```json
  {
    "status": "confirmed"
  }
  ```

### 7. Get Bookings by Mentor
- **GET** `/api/bookings/mentor/:mentorName`
- **Description:** Get all bookings for a specific mentor

## Database Schema

### Bookings Table
| Field | Type | Constraints |
|-------|------|-------------|
| id | INT | Primary Key, Auto Increment |
| name | VARCHAR(100) | Not Null |
| date | DATE | Not Null |
| time | TIME | Not Null |
| email | VARCHAR(100) | Not Null, Email |
| contact | VARCHAR(20) | Not Null |
| message | TEXT | Nullable |
| mentorName | VARCHAR(100) | Not Null |
| address | TEXT | Not Null |
| postalCode | VARCHAR(10) | Not Null |
| city | VARCHAR(50) | Not Null |
| demo1 | VARCHAR(255) | Nullable |
| demo2 | VARCHAR(255) | Nullable |
| demo3 | VARCHAR(255) | Nullable |
| demo4 | VARCHAR(255) | Nullable |
| demo5 | VARCHAR(255) | Nullable |
| status | ENUM | Default: 'pending' |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

## Response Format

### Success Response
```json
{
  "status": "success",
  "message": "Operation completed successfully",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error description",
  "errors": [
    // Validation errors (if any)
  ]
}
```

## Validation Rules

- **Name:** 2-100 characters, required
- **Date:** Valid date format (YYYY-MM-DD), required
- **Time:** HH:MM format, required
- **Email:** Valid email format, required
- **Contact:** 10-20 characters, numbers/spaces/hyphens/parentheses only, required
- **Message:** Max 1000 characters, optional
- **Mentor Name:** 2-100 characters, required
- **Address:** 10-500 characters, required
- **Postal Code:** 5-10 characters, required
- **City:** 2-50 characters, required
- **Demo Fields:** Max 255 characters each, optional

## Status Values

- `pending` - Default status for new bookings
- `confirmed` - Booking has been confirmed
- `cancelled` - Booking has been cancelled
- `completed` - Booking session completed

## Testing the API

### Using curl:

1. **Create a booking:**
   ```bash
   curl -X POST http://localhost:3001/api/bookings \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Doe",
       "date": "2024-01-15",
       "time": "14:30",
       "email": "john@example.com",
       "contact": "+1234567890",
       "message": "I need guidance on meditation",
       "mentorName": "Swami Pratik",
       "address": "123 Main Street, Apartment 4B",
       "postalCode": "12345",
       "city": "New York"
     }'
   ```

2. **Get all bookings:**
   ```bash
   curl http://localhost:3001/api/bookings
   ```

3. **Get booking by ID:**
   ```bash
   curl http://localhost:3001/api/bookings/1
   ```

### Using Postman:
Import the following collection or create requests manually using the endpoints listed above.

## Health Check

- **GET** `/health`
- Returns server status and timestamp

## Error Handling

The API includes comprehensive error handling for:
- Database connection errors
- Validation errors
- Not found errors
- Server errors

## Security Features

- Helmet.js for security headers
- CORS configuration
- Input validation and sanitization
- SQL injection prevention (Sequelize ORM)

## Development

### Project Structure
```
backend/
├── config/
│   └── database.js
├── controllers/
│   └── bookingController.js
├── middleware/
│   └── validation.js
├── models/
│   └── Booking.js
├── routes/
│   └── bookingRoutes.js
├── config.env
├── package.json
├── server.js
└── README.md
```

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (to be implemented)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details 