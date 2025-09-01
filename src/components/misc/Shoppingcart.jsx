import React, { useState } from "react";
import { X , Trash2} from "lucide-react";


import {cn} from "@/lib/utils"

export  function Shoppingcart({setOpen , items , setItems}) {

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col w-full pt-2">
        <div className = "flex flex-row justify-between">
        <h1 className="text-lg font-bold text-gray-700 pl-3">Cart</h1>
        <button onClick = {() => setOpen(false)}>
             <X className="cursor-pointer"/>
        </button>
        </div>
      <div className = "flex flex-col overflow-y-auto max-h-[600px] w-[500px] pt-8 shadow-2xl ">
      {items.map((item,idx) => (
        <div
          key={item.id}
          className={cn(`relative flex flex-col p-3 border-b border-dashed border-gray-300 w-full h-[100px] hover:bg-stone-200 cursor-pointer`, {
            "border-0": idx === items.length - 1, "border-1":idx === items.length
          })}
        >
          <div className = "flex flex-row">
            <img src={item.image} alt={item.content} className="w-20 h-20 object-cover rounded-md" />
            <div className = "flex flex-col pl-5 ">
              <p className="text-lg text-gray-700">{item.content}</p>
              
              <span className="text-md text-gray-400">Rating: {item.rating} | Size: {item.size} | Color: {item.color}</span>
            </div>
            
          </div>
          <div className="flex flex-col absolute top-3 right-3 items-end gap-2">
              <button onClick={() => handleDelete(item.id)}>
                <Trash2 className="text-md text-red-500 cursor-pointer " />
              </button>
              <span className="text-md text-gray-400">Price: ${item.price}</span>
            </div>
          
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-gray-400 italic p-2">No items in cart</p>
      )}
      <div className = "flex justify-between p-4">
        <p>Total</p>
        <p>${items.reduce((acc, item) => acc + item.price, 0)}</p>

      </div>
      </div>
    </div>
  );
}
