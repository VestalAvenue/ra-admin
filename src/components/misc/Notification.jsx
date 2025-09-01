import React, { useState } from "react";
import { X } from "lucide-react";

const initialNotifications = [
  { id: 1, content: "Delivered", time: "2m ago" },
  { id: 2, content: "Shared a file", time: "10m ago" },
  { id: 3, content: "Added a comment", time: "15m ago" },
  { id: 4, content: "Mentioned you in a post", time: "20m ago" },
  { id: 5, content: "Sent a message", time: "25m ago" },
  { id: 6, content: "Updated profile picture", time: "30m ago" },
  { id: 7, content: "Joined your group", time: "35m ago" },
  { id: 8, content: "Liked your post", time: "40m ago" },
  { id: 9, content: "Started following you", time: "45m ago" },
  { id: 10, content: "Uploaded a document", time: "50m ago" },
  { id: 11, content: "Changed password", time: "55m ago" },
  { id: 12, content: "Logged in from new device", time: "1h ago" },
  { id: 13, content: "Completed a task", time: "2h ago" },
];

export  function Notification() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col w-full pt-2 ">
        <h1 className="text-lg font-bold text-gray-700 pl-3">Notifications</h1>

      <div className = "flex flex-col overflow-y-auto max-h-[300px]">
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
    </div>
  );
}
