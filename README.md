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

ROOT (FoodApp)
├── 📁 src/
│   ├── 🏗 App.js (CartProvider)
│   ├── 🔗 index.js
│   ├── 🧺 context/
│   │   └── CartContext.js (state+logic)
│   ├── 🎣 hooks/
│   │   └── useFetch.js (→ db.json)
│   ├── 🧩 components/
│   │   ├── Header/ (→ CartModal)
│   │   ├── Items/ (→ Item)
│   │   ├── Item/ (uses ui/Card+Button)
│   │   ├── CartModal/ (→ CartModalItems)
│   │   ├── CheckoutModal/ (uses utility/validators)
│   │   └── OrderModal/ → EmptyModal
│   ├── 🖼 ui/
│   │   ├── Button.jsx (reused)
│   │   ├── Card.jsx (→ Item)
│   │   └── Modal.jsx (base for all modals)
│   └── 🛠 utility/
│       ├── formatters.js (price/date)
│       └── validators.js (form checks)
└── 🗃 db.json (mock data)


 📜 License
MIT © [Abd Elrahman Safwat]
