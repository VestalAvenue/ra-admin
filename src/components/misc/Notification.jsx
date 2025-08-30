import React, { useState } from "react";
import { X } from "lucide-react";

const initialNotifications = [
  { id: 1, content: "Notification 1", time: "2m ago" },
  { id: 2, content: "Notification 2", time: "10m ago" },
];

export  function Notification() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col w-full pt-2 ">
        <h1 className="text-lg font-bold text-gray-700 pl-3">Notifications</h1>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="relative flex flex-col p-3 border-b border-dashed border-gray-300 w-full min-h-[60px]"
        >
          {/* Delete button */}
          <button
            onClick={() => handleDelete(notification.id)}
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200"
            aria-label="Delete notification"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          {/* Notification content */}
          <p className="text-sm text-gray-700">{notification.content}</p>
          <span className="text-xs text-gray-400">{notification.time}</span>
        </div>
      ))}

      {notifications.length === 0 && (
        <p className="text-sm text-gray-400 italic p-2">No notifications</p>
      )}
    </div>
  );
}
