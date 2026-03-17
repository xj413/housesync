# HouseSync Durham 🏠💜

> **Verified Student Housing, Simplified.**  
> The all-in-one platform for Durham University students to find compatible housemates, form groups, and match with verified local properties.

---

## 🌟 Overview

HouseSync Durham solves the "dual-search" problem in student housing. Instead of searching for housemates on social media and houses on different listing sites, HouseSync integrates the two. We use a custom **Matching Engine** to connect compatible students and an **Interactive Durham Map** to find the perfect property for their specific group needs.

### **The Problem**
Durham University students often struggle with:
1. Finding housemates who share similar lifestyles, budgets, and area preferences.
2. Coordinating group viewings and communicating with landlords.
3. Understanding how a specific house fits their group's collective requirements.

### **The Solution**
- **Verified Student Profiles**: Sign up with your `@durham.ac.uk` email.
- **Housemate Discovery**: Filter potential mates by college, year, budget, and lifestyle.
- **Group Building**: Automate the group formation process with shared preference tracking.
- **Property Matching**: Our algorithm calculates a "Fit Score" for every house based on your group's profile.
- **Interactive Map**: A purpose-built map of Durham showing walk times, area vibes, and property locations.

---

## 🚀 Key Features

### 1. **Housemate Discovery & Matching**
- **Compatibility Engine**: Matches users across 9 dimensions including cleanliness, social status, and sleep schedule.
- **Match Breakdown**: View exactly *why* you matched (Match Reasons) and potential frictions (Friction Points).

### 2. **Interactive Durham Map**
- **Hyper-Local Context**: See 7 key student areas (The Viaduct, Gilesgate, Claypath, etc.) with relative distances and vibes.
- **Live Pins**: Hover over property pins to see quick details, pricing, and your group's fit percentage.
- **River Wear & Campus Integration**: Real-world geographical markers for better spatial awareness.

### 3. **Student & Group Dashboards**
- **Group Status**: Track who's in, who's out, and your collective average budget.
- **Compatibility Matrix**: A visual heat-map showing how every member of a potential group fits together.

### 4. **Landlord Portal**
- **Viewing Request System**: Groups can request viewings directly.
- **Verified Leads**: Landlords only receive requests from verified Durham student groups.
- **Listing Management**: Simple dashboard for property maintenance.

---

## 🛠 Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Premium Custom Design System)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React Context API

---

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Interactive Map, Cards)
├── context/        # Global state management (Auth, Property data, Matching logic)
├── data/           # Mock data for Durham areas, students, and properties
├── pages/          # Full page views (Discovery, Dashboard, Listings, Chat, etc.)
└── index.css       # Core Design System (Durham Purple theme, utility classes)
```

---

## 🛠 Getting Started

### **Prerequisites**
- Node.js (v16.x or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/xj413/housesync.git
   cd housesync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or your local Vite port).

---

## 📖 Usage Guide

### **For Students**
1. **Join**: Sign up with your Durham Uni email.
2. **Onboarding**: Set your budget, preferred areas, and lifestyle habits (social/clean/sleep).
3. **Discover**: Find housemates and "Invite" them to your group.
4. **House Hunt**: Use the **Split View Map** to find properties that best match your group's collective preferences.
5. **Chat**: Coordinate with your housemates in the dedicated Group Chat.
6. **Request**: Send viewing requests directly to landlords.

### **For Landlords**
1. **Manage List**: Add your Durham properties with student-focused details (bills included, furnished, etc.).
2. **Review Requests**: View incoming requests from verified student groups, including their group profile and budget.

---

## 🎨 Design Philosophy

HouseSync Durham uses a custom **Durham Purple (`#7E317B`)** primary palette combined with a modern "Startup" aesthetic:
- **Glassmorphism**: Subtle translucent backgrounds for cards and sidebars.
- **High-Contrast Dark Mode Sections**: Used for the Interactive Map and Hero section for a premium feel.
- **Rounded UI**: Custom border-radius system (`--radius-xl`) for a soft, modern touch.

---

## 📄 License

This project is open-source and available under the MIT License.

---

*Built for students, by Durham's housing experts.* 💜
