import React, { useState } from "react";
import { X } from "lucide-react";

const initialItems = [
  { id: 1, content: "Denim Jacket", time: "2m ago", rating: 5, price: 100, size: "medium", color: "blue" },
  { id: 2, content: "Graphic T-Shirt", time: "10m ago", rating: 4, price: 40, size: "large", color: "white" },
  { id: 3, content: "Sneakers", time: "15m ago", rating: 3, price: 150, size: "42", color: "black" },
  { id: 4, content: "Hoodie", time: "30m ago", rating: 5, price: 80, size: "small", color: "gray" },
  { id: 5, content: "Cargo Pants", time: "1h ago", rating: 2, price: 60, size: "medium", color: "green" },
  { id: 6, content: "Baseball Cap", time: "2h ago", rating: 4, price: 25, size: "one size", color: "red" },
  { id: 7, content: "Leather Belt", time: "3h ago", rating: 5, price: 35, size: "large", color: "brown" },
];

import {cn} from "@/lib/utils"

export  function Shoppingcart() {
  const [items, setItems] = useState(initialItems);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col w-full pt-2">
        <div className = "flex flex-row justify-between">
        <h1 className="text-lg font-bold text-gray-700 pl-3">Cart</h1>
        <button >
             <X className=""/>
        </button>
        </div>
      <div className = "flex flex-col overflow-y-auto max-h-[300px]">
      {items.map((item,idx) => (
        <div
          key={item.id}
          className={cn(`relative flex flex-col p-3 border-b border-dashed border-gray-300 w-full min-h-[60px]`, {
            "border-0": idx === items.length - 1,
          })}
        >
          {/* Delete button */}
          <button
            onClick={() => handleDelete(item.id)}
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200"
            aria-label="Delete item"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          {/* Item content */}
          <p className="text-sm text-gray-700">{item.content}</p>
          <span className="text-xs text-gray-400">{item.time}</span>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-gray-400 italic p-2">No items in cart</p>
      )}
      </div>
    </div>
  );
}
