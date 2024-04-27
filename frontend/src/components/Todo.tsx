import Dot from "@/images/Dot";
import Plus from "@/images/Plus";
import { useEffect, useState } from "react";
import { AddTask } from "./AddTask"
import axios from "axios";

export const Todo = () => {
    const [ modal, setModal ] = useState(false);
    const pickUp = () => {
        setModal(!modal)
    }
    const getTodo = async () => {
        try {
            const data = await fetch('http://localhost:8000/todo/getAllTodo', { method: 'GET' }).then((res) => res.json())
            console.log(data);
        } catch (error) {
            throw new Error('error')
        }
    }
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <div className="flex flex-col w-[325px] p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">To do</h1>
                <Dot />
            </div>
            {}
            <button className="flex items-center p-1 w-full bg-white gap-3 justify-center rounded-md" onClick={pickUp}>Add Task <Plus /></button>
            {modal && (<AddTask />)}
        </div>
    )
}