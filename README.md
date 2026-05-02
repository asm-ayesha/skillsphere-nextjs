# SkillSphere – Online Learning Platform

**Live Site:** https://skillsphere-nextjs.vercel.app  

---

## Project Overview

**SkillSphere** is a modern online learning platform built with Next.js. It allows users to explore courses, view detailed information, and manage their profiles with authentication support. The platform focuses on a smooth user experience with protected routes, dynamic routing, and responsive design.

---

## Purpose

The purpose of this project is to:

- Build a full-featured course platform using Next.js App Router
- Implement authentication (Email/Password + Google)
- Practice protected routes and user-based navigation
- Create a clean and scalable UI structure
- Handle real-world features like search, profile updates and routing

---

## Key Features

### Layout & Navigation
- Persistent Navbar & Footer
- Conditional UI (Logged in / Logged out)
- Clean App Router structure

### Home Page
-  Hero Section with banner
-  Popular Courses (Top 3 rated)
-  Learning Tips Section
-  Top Instructors Section
-  Trending Courses (Extra section)

### Courses
- All Courses Page with dynamic data
- Search functionality (by course title)
- Course Details Page ( Protected Route)
- Static curriculum display

### Authentication
- Email & Password Login/Register
- Google Login Integration
- Error handling and toast notifications
- Redirect after login

### Trending Courses (Extra Section)
- Displays currently trending courses  
- Helps users discover in-demand skills

### My Profile
- View user profile information
- Update Name & Photo URL
- Separate update route with form

### Additional Features
- Loading spinner during data fetch
- No crash on reload
- Custom 404 Not Found page
- Fully responsive design

---

## JSON Data Example

```json
[
  {
    "id": 1,
    "title": "Complete Web Development Bootcamp",
    "instructor": "John Doe",
    "duration": "20 hours",
    "rating": 4.8,
    "level": "Beginner",
    "description": "Learn full-stack web development from scratch.",
    "image": "https://i.postimg.cc/example-course1.png",
    "category": "Development"
  }
]
```

---

## Challenges Implemented

### Search Functionality
- Search courses by title in All Courses page

### Profile System
- My Profile page
- Update user information (Name & Image URL)

### Update Feature
- Dedicated route for updating profile
- Form-based update system

---

## NPM Packages Used

### Core
- next  
- react  
- react-dom  

### Authentication & Database
- better-auth  
- @better-auth/mongo-adapter  
- mongodb  

### UI & Styling
- tailwindcss  
- daisyui  
- @heroui/react  
- @heroui/styles  

### Icons & UI Enhancements
- react-icons  
- @gravity-ui/icons  

### Notifications
- react-toastify  

### Loaders & Spinners
- react-loader-spinner  
- react-spinners  

### Slider
- swiper

---

## 🛠️ Tech Stack

- Next.js (App Router)  
- React 19  
- MongoDB  
- Better Auth  
- Tailwind CSS + DaisyUI  
- Vercel  

---

## Getting Started

```bash
git clone https://github.com/asm-ayesha/skillsphere-nextjs
cd skillsphere
npm install
npm run dev
```

---

## Notes

- Protected routes ensure only logged-in users can access course details
- Google authentication improves user experience
- Clean folder structure maintained using App Router