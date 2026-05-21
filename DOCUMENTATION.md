# NovaBite — Project Documentation

---

## 1. Project Overview

**NovaBite** is a full-stack restaurant web application that allows users to browse a food menu, place online orders, book tables, and manage their accounts. The application follows a client-server architecture where the frontend (React.js) communicates with the backend (Node.js/Express) through RESTful API endpoints, and data is stored in a MongoDB database.

### Project Requirements Met
- ✅ 9 pages (minimum required: 9 for 3 students)
- ✅ 6 forms with input validation (minimum required: 2)
- ✅ Fully responsive on desktop, tablet, and mobile
- ✅ Consistent navigation across all pages
- ✅ Full-stack implementation (frontend + backend + database)

---

## 2. Technologies Used

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React.js | 19.x | Component-based UI framework for building interactive user interfaces |
| Vite | 8.x | Fast development server and build tool for the React project |
| React Router | v6 | Client-side routing — allows navigation between pages without full page reloads |
| Axios | 1.x | HTTP client library — sends requests from the frontend to the backend API |
| Bootstrap | 5.3 | CSS framework providing responsive grid system and pre-built UI components |
| React Icons | 5.x | Icon library providing Feather and Remix icon sets used throughout the UI |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20.x | JavaScript runtime that allows running JavaScript on the server |
| Express.js | 4.x | Web framework for Node.js — handles HTTP requests, routing, and middleware |
| Mongoose | 8.x | Object Data Modeling (ODM) library — provides schema-based validation for MongoDB |
| JSON Web Token (JWT) | 9.x | Creates secure digital tokens for user authentication |
| bcrypt.js | 2.x | Hashes user passwords before storing them in the database |
| CORS | 2.x | Middleware that allows the frontend (port 5173) to communicate with the backend (port 5000) |

### Database
| Technology | Purpose |
|-----------|---------|
| MongoDB | NoSQL document database — stores all application data (users, orders, menu items, etc.) as JSON-like documents |

---

## 3. Application Architecture

```
┌─────────────────────┐         HTTP Requests          ┌─────────────────────┐
│                     │  ───────────────────────────►   │                     │
│   React Frontend    │        (Axios / JSON)           │  Express Backend    │
│   (Port 5173)       │  ◄───────────────────────────   │  (Port 5000)        │
│                     │        JSON Responses           │                     │
└─────────────────────┘                                 └──────────┬──────────┘
                                                                   │
                                                          Mongoose Queries
                                                                   │
                                                                   ▼
                                                        ┌─────────────────────┐
                                                        │                     │
                                                        │     MongoDB         │
                                                        │  (Port 27017)       │
                                                        │                     │
                                                        └─────────────────────┘
```

### How the architecture works:
1. The **user** opens the website in their browser, which loads the React frontend
2. The **React frontend** renders the UI and sends HTTP requests to the Express backend using Axios
3. The **Express backend** receives the requests, processes them, queries the MongoDB database using Mongoose, and sends JSON responses back
4. The **React frontend** receives the responses and updates the UI accordingly

---

## 4. Project Structure

```
NovaBite/
│
├── client/                          # FRONTEND (React)
│   ├── public/
│   │   └── favicon.svg              # Browser tab icon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Top navigation bar (appears on all pages)
│   │   │   └── Footer.jsx            # Bottom footer (appears on all pages)
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Menu.jsx              # Full menu with filters
│   │   │   ├── Order.jsx             # Online ordering with cart
│   │   │   ├── Reservations.jsx      # Table booking form
│   │   │   ├── Contact.jsx           # Contact form + map
│   │   │   ├── About.jsx             # Restaurant info
│   │   │   ├── Gallery.jsx           # Photo gallery
│   │   │   ├── Register.jsx          # User registration
│   │   │   └── Login.jsx             # User login
│   │   ├── App.jsx                   # Main app — routing + global state
│   │   ├── main.jsx                  # Entry point — renders App
│   │   └── index.css                 # Global styles and design system
│   ├── index.html                    # HTML template
│   ├── package.json                  # Frontend dependencies
│   └── vite.config.js                # Vite configuration
│
├── server/                           # BACKEND (Node.js / Express)
│   ├── config/
│   │   └── db.js                     # MongoDB connection setup
│   ├── middleware/
│   │   └── auth.js                   # JWT token verification middleware
│   ├── models/
│   │   ├── MenuItem.js               # Schema for menu dishes
│   │   ├── User.js                   # Schema for user accounts
│   │   ├── Order.js                  # Schema for orders
│   │   ├── Reservation.js            # Schema for reservations
│   │   ├── Contact.js                # Schema for contact messages
│   │   └── Newsletter.js             # Schema for newsletter subscribers
│   ├── routes/
│   │   ├── menu.js                   # Menu API endpoints
│   │   ├── auth.js                   # Login/Register API endpoints
│   │   ├── orders.js                 # Order API endpoints
│   │   ├── reservations.js           # Reservation API endpoints
│   │   ├── contacts.js               # Contact form API endpoint
│   │   └── newsletter.js             # Newsletter API endpoint
│   ├── seed.js                       # Database seeder (populates menu items)
│   ├── server.js                     # Main server entry point
│   └── package.json                  # Backend dependencies
│
├── screenshots/                      # Screenshots for README
├── .gitignore                        # Files excluded from Git
└── README.md                         # Project overview
```

---

## 5. Pages Description

### 5.1 Home Page (`/`)
**Developer:** Omar Elhadidi

The landing page of the website. It fetches featured dishes from the backend API and displays them in a card grid. Contains a hero banner, restaurant statistics (12+ years, 50+ dishes, 15K+ guests), a "Why Choose NovaBite" section with four feature highlights, customer testimonials with star ratings, and call-to-action buttons linking to the Menu and Reservations pages.

### 5.2 Menu Page (`/menu`)
**Developer:** Omar Elhadidi

Displays the full restaurant menu fetched from the MongoDB database. Users can filter dishes by category (All, Appetizers, Mains, Desserts, Drinks) using filter tab buttons. Each dish is displayed as a card with an image, name, description, price, category badge, and an "Add to Cart" button. The cart state is managed globally through React Context API.

### 5.3 Reservations Page (`/reservations`)
**Developer:** Omar Elhadidi

A table booking page with a seven-field reservation form (name, email, phone, party size, date, time, special requests). The left panel shows dining hours and party size limits. All fields include client-side validation (e.g., date must be in the future, phone must match a valid pattern). On submission, data is sent to the backend API and stored in MongoDB.

### 5.4 Contact Page (`/contact`)
**Developer:** Kenzy Baher

A contact page with a message form (name, email, subject, message) and an embedded Google Maps iframe showing the restaurant location (Arab Academy for Science, Technology & Maritime Transport). Contact information cards display the phone number, email, address, and business hours. Form submissions are validated and stored in the database.

### 5.5 About Page (`/about`)
**Developer:** Kenzy Baher

An informational page telling the story of NovaBite. Includes the restaurant's history, a mission statement, animated statistics counters, and a section showcasing the head chef and culinary team. Uses glassmorphism-styled cards for visual appeal.

### 5.6 Gallery Page (`/gallery`)
**Developer:** Kenzy Baher

A photo gallery displaying 12 images of food, restaurant interiors, cocktails, and the outdoor terrace. Images are arranged in a responsive CSS Grid layout. Hovering over an image reveals a label with a zoom effect. Clicking an image opens it in a full-screen lightbox overlay with a close button.

### 5.7 Order Online Page (`/order`)
**Developer:** Hana Hazem

The online ordering system. The left section displays menu items (with category filters) in compact horizontal cards with "Add" buttons. The right section is a sticky cart sidebar showing all added items with quantity controls (+/−), individual remove buttons, and a running total. Users must log in to proceed to checkout. The checkout modal collects delivery details and submits the order to the backend with a JWT token for authentication.

### 5.8 Register Page (`/register`)
**Developer:** Hana Hazem

A user registration form with four fields: full name, email, phone, and password. Client-side validation checks for empty fields, valid email format, and minimum password length (6 characters). On submission, the backend hashes the password using bcrypt, creates the user in MongoDB, generates a JWT token, and automatically logs the user in.

### 5.9 Login Page (`/login`)
**Developer:** Hana Hazem

A user login form with email and password fields. Client-side validation ensures fields are not empty and email is in a valid format. On submission, the backend finds the user by email, compares the password hash using bcrypt, and returns a JWT token. The token and user data are stored in localStorage for session persistence across page refreshes.

---

## 6. Forms and Validation

The application includes 6 forms, all with **dual-layer validation** (client-side + server-side):

| # | Form | Location | Fields | Validation Rules |
|---|------|----------|--------|-----------------|
| 1 | Reservation | `/reservations` | Name, Email, Phone, Party Size, Date, Time, Special Requests | All required except Special Requests; date must be future; party size 1–20; phone pattern check |
| 2 | Contact | `/contact` | Name, Email, Subject, Message | All required; email regex; message min 10 characters |
| 3 | Newsletter | Footer (all pages) | Email | Required; email regex; duplicate check on server |
| 4 | Checkout | `/order` (modal) | Name, Email, Phone, Address, Notes | All required except Notes; email regex; cart must not be empty; requires JWT token |
| 5 | Register | `/register` | Name, Email, Phone, Password | Name, email, password required; email regex; password min 6 chars; duplicate email check on server |
| 6 | Login | `/login` | Email, Password | Both required; email regex; password compared with bcrypt hash on server |

### How validation works:
1. **Client-side (React):** The `validate()` function checks all fields before the form is submitted. If any field is invalid, a red error message appears below the field and the request is NOT sent to the server.
2. **Server-side (Express):** The route handler checks the data again after receiving it. This protects against users who bypass the frontend. If validation fails, the server returns a 400 Bad Request response with an error message.

---

## 7. API Endpoints

All API endpoints are mounted under `http://localhost:5000/api/`.

### 7.1 Menu Routes (`/api/menu`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| GET | `/api/menu` | Returns all menu items. Accepts optional query `?category=appetizers` to filter | No |
| GET | `/api/menu/featured` | Returns up to 6 featured menu items (used on Home page) | No |

### 7.2 Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| POST | `/api/auth/register` | Creates a new user account, returns user data + JWT token | No |
| POST | `/api/auth/login` | Authenticates user, returns user data + JWT token | No |
| GET | `/api/auth/me` | Returns the currently logged-in user's profile | Yes |

### 7.3 Order Routes (`/api/orders`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| POST | `/api/orders` | Creates a new order with customer info and cart items | Yes |
| GET | `/api/orders` | Returns all orders (sorted by newest first) | No |

### 7.4 Reservation Routes (`/api/reservations`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| POST | `/api/reservations` | Creates a new table reservation | No |

### 7.5 Contact Routes (`/api/contacts`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| POST | `/api/contacts` | Stores a contact form submission | No |

### 7.6 Newsletter Routes (`/api/newsletter`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| POST | `/api/newsletter` | Subscribes an email to the newsletter (checks for duplicates) | No |

---

## 8. Database Schemas

### 8.1 MenuItem
```
{
  name:        String    (required)
  description: String    (required)
  price:       Number    (required, min: 0)
  category:    String    (required, enum: ['appetizers', 'mains', 'desserts', 'drinks'])
  image:       String    (URL to dish photo)
  featured:    Boolean   (default: false — marks items for the Home page)
  createdAt:   Date      (auto-generated)
  updatedAt:   Date      (auto-generated)
}
```

### 8.2 User
```
{
  name:        String    (required)
  email:       String    (required, unique, regex validated)
  password:    String    (required, min 6 chars, stored as bcrypt hash)
  phone:       String    (optional)
  createdAt:   Date      (auto-generated)
  updatedAt:   Date      (auto-generated)
}
```
**Special features:**
- `pre('save')` middleware automatically hashes the password before saving
- `matchPassword()` method compares an entered password with the stored hash

### 8.3 Order
```
{
  customerName:  String   (required)
  customerEmail: String   (required)
  customerPhone: String   (required)
  address:       String   (required)
  items: [{
    menuItem:  ObjectId   (reference to MenuItem)
    name:      String
    price:     Number
    quantity:  Number
  }]
  totalAmount:   Number   (required)
  notes:         String   (optional)
  status:        String   (enum: ['pending', 'confirmed', 'preparing', 'delivered'], default: 'pending')
  createdAt:     Date     (auto-generated)
}
```

### 8.4 Reservation
```
{
  name:            String   (required)
  email:           String   (required, regex validated)
  phone:           String   (required)
  date:            Date     (required)
  time:            String   (required)
  partySize:       Number   (required, range: 1–20)
  specialRequests: String   (optional)
  createdAt:       Date     (auto-generated)
}
```

### 8.5 Contact
```
{
  name:      String   (required)
  email:     String   (required, regex validated)
  subject:   String   (required)
  message:   String   (required)
  createdAt: Date     (auto-generated)
}
```

### 8.6 Newsletter
```
{
  email:        String   (required, unique, regex validated)
  subscribedAt: Date     (default: Date.now)
}
```

---

## 9. Authentication System

### How it works:

1. **Registration:** User submits name, email, and password → backend hashes the password using bcrypt (salt rounds: 10) → saves user to MongoDB → generates a JWT token containing the user's ID → returns token + user data to frontend

2. **Login:** User submits email and password → backend finds user by email → uses `bcrypt.compare()` to check the password against the stored hash → if valid, generates a new JWT token → returns token + user data

3. **Session Persistence:** The frontend stores the token and user data in the browser's `localStorage`. When the user refreshes the page, `App.jsx` reads from `localStorage` to restore the session without requiring re-login.

4. **Protected Routes:** When accessing a protected endpoint (e.g., placing an order), the frontend sends the JWT token in the request header: `Authorization: Bearer <token>`. The `protect` middleware on the backend verifies the token, decodes the user ID, and allows the request to proceed.

5. **Logout:** The frontend removes the user data from `localStorage` and clears the React state. No server call is needed.

### Security measures:
- Passwords are **never stored in plain text** — only bcrypt hashes
- JWT tokens expire after **30 days**
- The same error message ("Invalid email or password") is returned for both wrong email and wrong password to prevent account enumeration

---

## 10. State Management

The application uses **React Context API** for global state management, avoiding the need for external libraries like Redux.

### CartContext (Shopping Cart)
Defined in `App.jsx` and accessible by all pages via `useContext(CartContext)`.

| Function | What It Does |
|----------|-------------|
| `addToCart(item)` | Adds an item to the cart, or increments quantity if already added |
| `removeFromCart(id)` | Removes an item from the cart by its ID |
| `updateQuantity(id, qty)` | Sets a specific quantity for an item (removes if qty ≤ 0) |
| `clearCart()` | Empties the entire cart (called after successful order) |
| `cartTotal` | Calculated value — sum of (price × quantity) for all items |

### AuthContext (User Session)
Defined in `App.jsx` and accessible by all pages via `useContext(AuthContext)`.

| Function | What It Does |
|----------|-------------|
| `login(userData)` | Saves user to React state and localStorage |
| `logout()` | Clears user from React state and localStorage |
| `user` | The current user object (null if not logged in) |

---

## 11. Responsive Design

The application is fully responsive across three breakpoints:

| Device | Screen Width | Layout Behavior |
|--------|-------------|----------------|
| Desktop | 1200px+ | Full layout — 3-4 columns, side-by-side sections |
| Tablet | 768px – 1199px | 2 columns, navigation collapses to hamburger menu |
| Mobile | < 768px | Single column, stacked layout, touch-friendly buttons |

Responsiveness is achieved using:
- **Bootstrap's grid system** (`col-lg-4`, `col-md-6`, etc.)
- **CSS media queries** in `index.css` for custom breakpoints
- **CSS Grid** with `auto-fill` and `minmax()` for the Gallery page

---

## 12. How to Run the Project

### Prerequisites
1. **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
2. **MongoDB** — installed and running locally on port 27017

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/Omar-Elhadidi/NovaBite.git
cd NovaBite

# 2. Install backend dependencies
cd server
npm install

# 3. Seed the database with menu items (only needed once)
node seed.js

# 4. Start the backend server
node server.js
# Output: "Server running on port 5000"

# 5. Open a NEW terminal, install frontend dependencies
cd client
npm install

# 6. Start the frontend development server
npm run dev
# Output: "Local: http://localhost:5173/"
```

### 7. Open in browser
Navigate to **http://localhost:5173**

> **Note:** Both the backend (Terminal 1) and frontend (Terminal 2) must remain running simultaneously.

---

## 13. Team Contributions

| Team Member | Pages Developed | Backend Work |
|-------------|----------------|-------------|
| **Omar Elhadidi** | Home, Menu, Reservations | Menu API routes, Reservation API routes, Database seeder, MongoDB setup |
| **Kenzy Baher** | Contact, About, Gallery | Contact API routes, Newsletter API routes |
| **Hana Hazem** | Order Online, Register, Login | Authentication API routes, Order API routes, JWT middleware, User model |

### Shared Responsibilities
- All team members contributed to testing and debugging
- Navbar and Footer components are shared across all pages
- The design system (`index.css`) provides consistent styling across all pages
