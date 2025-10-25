# 🌐 Personal Portfolio Website

A fully responsive, interactive portfolio website built with **HTML**, **CSS**, and **JavaScript**.
It showcases my background, experience, technical skills, GitHub projects, and includes a functional contact form that allows visitors to leave messages directly on the site.

---

## 🚀 Features

### 🧭 Navigation

* Sticky navigation bar with smooth scrolling
* Responsive hamburger menu for smaller screens
* Internal anchor links for seamless navigation between sections

### 👤 About Section

* Brief personal introduction and professional overview
* Optional photo with accessible `alt` text

### 💼 Experience

* List of past roles or professional experience
* Structured using **CSS Grid** for responsive design

### 🧠 Skills

* Dynamically generated list of skills from a JavaScript array
* Displayed using a grid layout for visual balance

### 📂 Projects

* GitHub repositories fetched dynamically via the **GitHub API**
* Each project name links directly to its corresponding repository
* Optional details: creation date, description, and more

### 📨 Leave a Message

* Contact form with validation (Name, Email, Message)
* Submitted messages appear dynamically below the form
* Each message includes:

  * Author name (clickable email link)
  * Message text
  * “Edit” and “Remove” buttons
* The messages section hides automatically when empty

### 🌐 Connect / Contact

* Links to email and social media (GitHub, LinkedIn, etc.)
* Styled with grid/flexbox for responsive alignment

### 🕶️ Optional Enhancements

* Dark mode / light mode toggle
* Sticky header that stays visible on scroll
* Smooth transitions and hover effects for a modern look

---

## 🧩 Project Structure

```
project-root/
│
├── index.html
├── README.md
│
├── css/
│   └── index.css
│
├── js/
│   └── index.js
│
└── images/           # (Optional)
    ├── profile.jpg
    └── icons/
```

---

## ⚙️ Technologies Used

* **HTML5** – Semantic structure and accessible markup
* **CSS3** – Responsive design, grid & flexbox layouts, dark mode
* **JavaScript (ES6)** – DOM manipulation, API fetch, dynamic rendering
* **GitHub API** – For live project repository data
* **Google Fonts** – Typography styling (Space Grotesk)

---

## 💻 How to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/A-D48/Git-Deep-learning
   ```

2. **Open the project:**

   * Double-click `index.html`, or
   * Run a local server (recommended):

     ```bash
     npx live-server
     ```

3. **Explore!**

   * Scroll through sections
   * Try submitting a message
   * Check that GitHub projects load properly

---

## 🥪 JavaScript Functionality Overview

* **Footer** → Inserts your name and current year dynamically
* **Skills Section** → Builds from a JavaScript array
* **Messages Form** → Adds, edits, removes, and conditionally hides messages
* **GitHub API Fetch** → Displays repositories dynamically

---

## 🦮 Responsive Design Highlights

* Mobile-first layout with scalable typography via `clamp()`
* CSS Grid used for Experience, Skills, and Projects
* Media queries at `768px` and `1024px` for tablet and desktop views
* Accessible form controls with focus states and ARIA-friendly structure

---

## 🧮 Future Enhancements

* Add backend to persist messages (Firebase or Node.js)
* Add smooth dark/light theme toggle
* Integrate animations using GSAP or Framer Motion

---

## 🧑‍💻 Author

** AliReza Daneshpazhooh
• [LinkedIn](https://www.linkedin.com/in/a-d48/) 
• [GitHub](https://github.com/A-D48)
