# Virtual University Events Guide 🎓

Welcome to the **Virtual University Events Guide**, a responsive, multi-page web application designed to help university students and staff discover, filter, and track upcoming university events seamlessly.

---

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Key Features & Services](#key-features--services)
- [Project Pages & Navigation](#project-pages--navigation)
- [Technologies Used](#technologies-used)
- [How to Run the Project](#how-to-run-the-project)
- [Folder Structure](#folder-structure)

---

## 🎯 About the Project
The **Virtual University Events Guide** aims to centralize all university event information. Whether it's a Career Clinic, a Design Sprint, or a Sunrise Fitness session, users can browse categorized events, read specific details, and contact the platform organizers easily. Built purely with front-end technologies, the interface is fully responsive, interactive, and beautifully designed.

---

## ✨ Key Features & Services

### What You Can Do:
1. **Browse Upcoming Events:** Easily view featured & latest events directly from the home page using interactive sliders and grids.
2. **Filter & Search:** Jump to the Events Catalog to filter events based on Categories (e.g., Culture, Sports, Music, Innovation), Dates, and Locations.
3. **Deep Dive into Details:** Click "View Details" on any event to see its full description, location maps, image galleries, and related events.
4. **Interactive UI Actions:** 
   - Simulate "Add to Calendar" functionalities.
   - "Share" events with peers.
5. **Contact Organizers:** Securely reach out using the Contact page form, which features real-time client-side validation to ensure correct data formatting.

---

## 🗺️ Project Pages & Navigation

Here is how you can jump into and navigate through the platform:

*   🏠 **Home (`index.html`)**
    *   **Purpose:** The landing portal.
    *   **Highlights:** Features a dynamic event slider, quick-access category buttons, and a grid of the latest university activities.
*   📅 **All Events (`events.html`)**
    *   **Purpose:** The main catalog.
    *   **Highlights:** Displays all events as stylized cards. Offers a robust JavaScript-powered filtering system (by category, date, and location).
*   🔍 **Event Details (`event-*.html` & `event.html`)**
    *   **Purpose:** Specific details for every distinct event.
    *   **Highlights:** Includes titles, dates, locations, maps, full descriptions, and related events. (e.g., `event-career-clinic.html`, `event-night-run.html`, etc.)
*   ℹ️ **About Us (`about.html`)**
    *   **Purpose:** Learn about the team and mission.
    *   **Highlights:** Discusses the platform's vision, introduces the team behind it, and outlines event publishing policies.
*   ✉️ **Contact (`contact.html`)**
    *   **Purpose:** Get in touch.
    *   **Highlights:** A validated form (Name, Email, Message) providing instant success/error feedback, plus direct email and social media links.

> **Navigation Tip:** Every page contains a global responsive **Navbar** at the top allowing instant jumps to Home, Events, About, and Contact. A globally consistent **Footer** resides at the bottom of every page with quick links and contact info.

---

## 💻 Technologies Used
- **HTML5:** Semantic structure.
- **CSS3:** Custom styling and animations.
- **JavaScript (Vanilla):** Dynamic features (Sliders, filtering logic, and form validation).
- **Bootstrap 5 (via CDN):** Grid system, responsive Navbars, Cards, Forms, Badges, and Alerts.

---

## 🚀 How to Run the Project

Since this is a front-end only static website, running it is incredibly simple:

1. **Clone or Download** the repository to your local machine.
2. Navigate to the root directory `Virtual-University-Events-Guide`.
3. Quick start:
   - Simply double-click on `index.html` to open it in your default web browser.
4. For the best experience (to avoid CORS issues with certain assets):
   - Use a local development server like VS Code's **Live Server** extension.
   - Right-click `index.html` and select **"Open with Live Server"**.

---

## 📂 Folder Structure

```text
├── 📄 index.html                # Home Page
├── 📄 events.html               # Main Events Catalog Directory
├── 📄 event.html                # Base Event Details Template
├── 📄 event-*.html              # Specific Event Pages (e.g., event-night-run.html)
├── 📄 about.html                # About the platform & team
├── 📄 contact.html              # Contact Form Submissions
├── 📄 PRD.md                    # Product Requirements Document
├── 📄 TASKS.md                  # Project task tracking
└── 📁 assets/                   # Static Assets
    ├── 📁 css/
    │   └── styles.css           # Global Custom Stylesheets
    ├── 📁 img/                  # Images and graphics
    └── 📁 js/
        └── main.js              # Global JavaScript logic (Filtering, Validation)
```

---
*Created with ❤️ for University Students and Faculty.*