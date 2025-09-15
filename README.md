# 🌍 Wanderlust - Online Hotel Listing Application

Wanderlust is a full-stack web application that allows users to browse, create, and manage hotel listings. Users can add reviews, rate hotels, and upload images for their listings. The app includes secure authentication, session management, robust error handling, and form validations — inspired by platforms like Yelp and Airbnb.


## ✨ Features

- 🔐 **User Authentication & Authorization** using Passport.js and cookies (7-day session persistence).
- 🏨 **CRUD Operations**: Create, Read, Update, and Delete hotel listings and reviews.
- 🖼️ **Image Uploads**: Integrated Cloudinary for cloud storage and Multer for file handling.
- ✅ **Form Validation**: Client-side and server-side checks using Joi and custom middleware.
- ⚡ **Error Handling**: Centralized error handling middleware for clean feedback.
- 👤 **Access Control**: Only the author of a listing or review can edit or delete it.
- 📱 **Responsive Design**: Built with Bootstrap for mobile-friendly layouts.


## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- Bootstrap (for styling and responsiveness)
- EJS + EJS-Mate (for templating and layouts)

**Backend:**
- Node.js
- Express.js
- Passport.js (authentication)
- Express-session + Cookies

**Database:**
- MongoDB
- Mongoose (ODM)

**Other Tools:**
- Multer (file uploads)
- Cloudinary (image hosting)
- Joi (data validation)
- Git & GitHub (version control)
- VS Code (development)


## 🚀 Getting Started

Follow these steps to run Wanderlust locally:

```bash
1️⃣ Clone the repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in the root directory
Add the following environment variables:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

4️⃣ Run the server
npm start

Server will run on http://localhost:3000

📂 Project Structure
wanderlust/
│-- models/         # Mongoose schemas (User, Hotel, Review)
│-- public/         # Static files (CSS, JS, images)
│-- routes/         # Express routes for hotels, reviews, users
│-- views/          # EJS templates
│-- middleware/     # Custom middleware (validation, authentication, error handling)
│-- app.js          # Main Express app
│-- package.json    # Dependencies and scripts
│-- .gitignore      # Ignored files (node_modules, .env, etc.)

```

## 🔮 Future Improvements

🗺️ Integrate Mapbox or Google Maps to display hotel locations.

🔍 Add search, filters, and pagination for large datasets.

⚛️ Rebuild frontend using React for a modern SPA experience.

📧 Add email notifications for bookings or reviews.

## 👨‍💻 Author
Developed by Harshit
📌 Full Stack Developer | Passionate about building scalable web applications

## Happy Coding!
