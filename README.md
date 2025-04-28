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
  │   ├── Items/           # Food item listing
  │   ├── CartModal/           # Cart management
  │   └── Checkout/       # Order form
  ├── context/
  |   |__showCartModal.js # state management
  │   └── CartContext.js  # State management
  ├── App.js              # Main component
 db.json             # Mock database


 📜 License
MIT © [Abd Elrahman Safwat]
