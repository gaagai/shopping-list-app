import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import OrderSummaryScreen from "./screens/OrderSummaryScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingListScreen />} />
        <Route path="/order-summary" element={<OrderSummaryScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
