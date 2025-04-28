# 🍕 FoodCart

_A lightweight food ordering interface with cart functionality_


## ✨ Features

- **Menu browsing** - View available food items
- **Interactive cart** - Add/remove items with real-time updates
- **Toast notifications** - Visual feedback when modifying cart
- **Checkout form** - Simple order submission

## 🛠 Tech Stack

| Category         | Technology       |
|------------------|------------------|
| Frontend         | React 19         |
| State Management | Context API      |
| API Client       | Fetch API        |
| Mock Backend     | JSON Server      |
| Notifications    | Toasify          |
| Styling          |  CSS Modules     |

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/KaGeSafwat/FoodApp.git
   cd FoodApp
2.Start the mock API server

   npm json-server --watch db.json --port 3001
  
3.Run the React app

   npm install
   npm run dev
  
🧩 Project Structure

ROOT
├── 📄 db.json
└── src/
    ├── 🏗️ Core
    │   ├── App.js (Provider)
    │   └── index.js
    │
    ├── 🧺 Context
    │   └── CartContext.js
    │
    ├── 🎣 Hooks
    │   └── useFetch.js → db.json
    │
    ├── 🧩 Components
    │   ├── Header → CartModal
    │   ├── Items → (multiple Item)
    │   └── Modal Chain: CartModal → Checkout → Order → Empty
    │
    ├── 🖼️ UI Library
    │   ├── Button.jsx ← Item
    │   ├── Card.jsx ← Item
    │   └── Modal.jsx ← CartModal
    │
    └── 🛠️ Utilities
        ├── formatters.js → Item
        └── validators.js → CheckoutModal


 📜 License
MIT © [Abd Elrahman Safwat]
