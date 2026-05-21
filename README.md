# 🍽️ NovaBite — Restaurant Web Application 

A full-stack restaurant web application built with React.js, Node.js, Express, and MongoDB. NovaBite allows users to browse the menu, order food online, book tables, and manage their accounts.

## 📸 Screenshots

### Home Page
<img width="1919" height="951" alt="home" src="https://github.com/user-attachments/assets/cde4892a-fbcb-4163-8755-8ea874ddc278" />

### Menu Page
<img width="1919" height="950" alt="menu" src="https://github.com/user-attachments/assets/d1afb81a-f3b2-4e28-823b-635f28c985da" />

### Reservations Page
<img width="1919" height="954" alt="reservations" src="https://github.com/user-attachments/assets/00e6ed10-9d9e-421c-939b-aac6885db700" />

## 🛠️ Technologies Used

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite), Bootstrap 5, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt.js |

## 📄 Pages (9 Total)

| Page | Description |
|------|------------|
| Home | Landing page with featured dishes and testimonials |
| Menu | Full menu with category filters and add-to-cart |
| Order Online | Shopping cart with checkout form (login required) |
| Reservations | Table booking form with date and time selection |
| Contact | Contact form and Google Maps location |
| About | Restaurant story, stats, and team info |
| Gallery | Photo grid with lightbox viewer |
| Register | User registration with validation |
| Login | User authentication with JWT |

## 📝 Forms (6 Total)

All forms include both client-side and server-side validation:
- Reservation Form
- Contact Form
- Newsletter Signup
- Checkout / Order Form
- Registration Form
- Login Form

## ⭐ Key Features

- **JWT Authentication** — Secure login/register with hashed passwords (bcrypt) and token-based sessions
- **Shopping Cart** — Add items, adjust quantities, and checkout with a validated form
- **Protected Routes** — Users must log in before placing an order
- **Category Filtering** — Filter menu items by Appetizers, Mains, Desserts, and Drinks
- **Responsive Design** — Works on desktop, tablet, and mobile screens
- **Dark Theme UI** — Premium glassmorphism design with smooth animations
- **Google Maps** — Embedded interactive map on the Contact page
- **Gallery Lightbox** — Click-to-zoom image viewer

## 🚀 How to Run

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### 1. Clone the repository
```bash
git clone https://github.com/Omar-Elhadidi/NovaBite.git
cd NovaBite
```

### 2. Start the Backend
```bash
cd server
npm install
node seed.js        # Seeds menu items (run once)
node server.js      # Starts API on port 5000
```

### 3. Start the Frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev         # Starts React app on port 5173
```

### 4. Open in Browser
Visit: **http://localhost:5173**

## 📁 Project Structure

```
NovaBite/
├── client/                 # React Frontend
│   └── src/
│       ├── components/     # Navbar, Footer
│       ├── pages/          # 9 page components
│       └── index.css       # Design system
├── server/                 # Node.js Backend
│   ├── config/             # Database connection
│   ├── middleware/          # JWT authentication
│   ├── models/             # 6 Mongoose schemas
│   ├── routes/             # 6 API route files
│   ├── seed.js             # Database seeder
│   └── server.js           # Express entry point
└── .gitignore
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | Get all menu items (optional `?category=` filter) |
| GET | `/api/menu/featured` | Get featured menu items for Home page |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| POST | `/api/orders` | Place an order (requires authentication) |
| POST | `/api/reservations` | Create a table reservation |
| POST | `/api/contacts` | Submit contact form message |
| POST | `/api/newsletter` | Subscribe to newsletter |

## 👥 Team

| Member | Pages |
|--------|-------|
| [Omar Elhadidi](https://github.com/Omar-Elhadidi) | Home, Menu, Reservations |
| [Kenzy Baher](https://github.com/kenzybaher) | Contact, About, Gallery |
| [Hana Hazem](https://github.com/hanahazem) | Order Online, Register, Login |
