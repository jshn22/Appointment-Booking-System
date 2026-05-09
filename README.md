# Appointment Booking System API

This project is a backend-only appointment booking system built with Node.js, Express, MongoDB, and Mongoose.

## Features

- User register and login
- JWT authentication
- Full CRUD for appointments
- Filtering and sorting for appointments
- Middleware for logging, validation, auth, and error handling

## Folder Structure

```text
src/
  config/
  controllers/
  middleware/
  models/
  routes/
  utils/
  app.js
  server.js
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file from `.env.example`

3. Run the server:

```bash
npm run dev
```

## Environment Variables

- `PORT` = server port
- `MONGODB_URI` = MongoDB connection string
- `JWT_SECRET` = secret key for JWT

## API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Appointments

- `POST /api/appointments`
- `GET /api/appointments`
- `GET /api/appointments/:id`
- `PATCH /api/appointments/:id`
- `DELETE /api/appointments/:id`

## Appointment Query Options

- `status` filter
- `sortBy` like `appointmentDate` or `createdAt`
- `order` as `asc` or `desc`

## Postman Testing Flow

1. Register user
2. Login user
3. Copy token from login response
4. Add token in `Authorization: Bearer <token>`
5. Test appointment APIs

## Deployment

You can deploy this backend on Render, Heroku, or AWS.

Set these environment variables on the deployment platform:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`

After deployment, the API will be accessible using the deployed base URL.
