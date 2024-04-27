"use client"
import { useEffect, useState } from "react";
import axios from "axios";

export const AddTask = () => {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ priority, setPriority ] = useState("HIGH")
    const [ status, setStatus ] = useState('Todo')
    const addPost = async () => {
        const res = await axios.post("http://localhost:8000/todo", {
            title: title,
            description: description,
            priority: priority,
            status: status,
        })
        return res
    }
    return (
        <div className="w-full h-fit bg-white p-3 rounded-lg">
            <div className="flex flex-col gap-2 z-10">
                <h1>Title</h1>
                <input type="text" className="border p-2 rounded-md" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <h1>Description</h1>
                <input type="text" className="border p-2 rounded-md" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <h1>Priority</h1>
                <select className="border p-2 rounded-md" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                </select>
                <h1>Status</h1>
                <select className="border p-2 rounded-md" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Todo">Todo</option>
                    <option value="InProgress">InProgress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button onClick={addPost} className="p-4 px-2 bg-gray-400 rounded-xl">Submit</button>
            </div>
        </div>
    )
}