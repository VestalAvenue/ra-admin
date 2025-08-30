import React, { useState, useRef } from "react"
import { Pencil, Trash2, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Todolist({ className = "" }) {
  const [items, setItems] = useState([])
  const [text, setText] = useState("")
  const [editingId, setEditingId] = useState(null)
  const editRef = useRef(null)

  const addItem = () => {
    const v = text.trim()
    if (!v) return
    setItems(prev => [...prev, { id: Date.now(), text: v }])
    setText("")
  }

  const startEdit = (id) => {
    setEditingId(id)
    // slight delay to ensure input mounts
    setTimeout(() => editRef.current?.focus(), 0)
  }

  const saveEdit = (id, value) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, text: value.trim() || i.text } : i))
    setEditingId(null)
  }

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))

  const onKeyAdd = (e) => { if (e.key === "Enter") addItem() }


  
  return (
    <div className={cn("rounded-2xl bg-white p-4 shadow-sm flex flex-col h-[30px]", className)}>
      <h2 className="text-lg font-semibold text-stone-600 mb-3">Today Task</h2>

      {/* Input row */}
      <div className="flex rounded-md overflow-hidden border border-stone-200 mb-4">
        <input
          className="flex-1 px-3 py-2 text-sm outline-none"
            placeholder="Enter Your Task"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={onKeyAdd}
        />
        <button
          onClick={addItem}
          className="px-5 text-sm font-medium bg-stone-500 text-white hover:bg-stone-600 transition"
        >
          Add
        </button>
      </div>

      {/* Scroll area */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto pr-1">
        {items.length === 0 && (
          <p className="text-xs text-stone-400 italic">No tasks yet.</p>
        )}
        <ul className="divide-y divide-dashed divide-stone-200">
          {items.map(item => {
            const editing = editingId === item.id
            return (
              <li key={item.id} className="py-3 flex items-start gap-2">
                {editing ? (
                  <input
                    ref={editRef}
                    defaultValue={item.text}
                    onKeyDown={e => {
                      if (e.key === "Enter") saveEdit(item.id, e.target.value)
                      if (e.key === "Escape") setEditingId(null)
                    }}
                    className="flex-1 bg-transparent border border-stone-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-stone-400"
                  />
                ) : (
                  <p className="flex-1 text-sm text-stone-600">{item.text}</p>
                )}

                <div className="flex items-center gap-2 text-stone-500">
                  {editing ? (
                    <>
                      <button
                        onClick={() => saveEdit(item.id, editRef.current.value)}
                        className="p-1 rounded hover:bg-green-100 text-green-600"
                        aria-label="Save"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-1 rounded hover:bg-stone-100 text-stone-500"
                        aria-label="Cancel"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(item.id)}
                        className="p-1 rounded hover:bg-lime-100 text-lime-600"
                        aria-label="Edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 rounded hover:bg-rose-100 text-rose-600"
                        aria-label="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}