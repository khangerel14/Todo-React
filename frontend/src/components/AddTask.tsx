"use client"
import { useEffect, useState } from "react";
import axios from "axios";

const AddTask = () => {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ priority, setPriority ] = useState("HIGH")
    const addPost = async () => {
        const res = await axios.post("http://localhost:8000/todo", {
            title: title,
            description: description,
            priority: priority,
        })
        // const data = await axios.get("http://localhost:8000/todo/getAllTodo")
        // console.log(data);
    }
    return (
        <div className="w-[270px] h-fit bg-white p-2">
            {/* <div className="h-screen w-screen"></div> */}
            <div className="flex flex-col gap-3 z-10">
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
                <button onClick={addPost} className="p-4 px-2 bg-gray-400 rounded-xl">Submit</button>
            </div>
        </div>
    )
}

export default AddTask