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

src/
├── components/
│ ├── CartModal/ # Main cart overlay
│ ├── CartModalItems/ # Individual cart items
│ ├── CheckoutModal/ # Order form
│ ├── EmptyModal/ # Empty state UI
│ ├── Header/ # Navigation bar
│ ├── Item/ # Single menu item
│ └── Items/ # Menu listing
├── context/ # Cart state
├── hooks/
│ └── useFetch.js # Custom fetch hook
├── ui/
│ ├── Button.jsx # Reusable buttons
│ ├── Card.jsx # Food item cards
│ └── Modal.jsx # Base modal component
├── utility/
│ ├── formatters.js # Price formatting
│ └── validators.js # Form validation
├── App.js
└── index.js
db.json # Mock database (root)


 📜 License
MIT © [Abd Elrahman Safwat]
