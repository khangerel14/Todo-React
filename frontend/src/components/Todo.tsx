'use client';

import { useEffect } from "react";
import Plus from "@/images/Plus";
import { useState } from "react";
import { AddTask } from "./AddTask";

export const Todo = ({ todoData }: any ) => {
    const [ modal, setModal ] = useState(false);
    const pickUp = () => {
        setModal(!modal)
    }
    const getNumberOfTodo = () => {
        if (!Array.isArray(todoData)) {
            return 0
        }
        return todoData?.filter((e: any) => e.status === 'Todo').length
    }
    const deleteItem = async (id: string) => {
        try {
            const res = await fetch(``, { method: 'DELETE'})
            if (res.ok) {
                console.log('deleted successfully');
            }            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getNumberOfTodo()
    }, [])
    return (
        <div className="flex flex-col w-[325px] p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">To do</h1>
                {getNumberOfTodo()}
            </div>
            { todoData && todoData.filter((e: any) => e.status === 'Todo').map((e: any, index: number) => {
                return (
                    <div className="flex justify-between items-start border bg-white rounded-lg p-2 px-4" key={index}>
                        <div className="flex flex-col">
                            <h1 className="font-bold">title: {e.title}</h1>
                            <p>description: {e.description}</p>
                            <div className="flex gap-2 font-semibold items-center">priority: 
                                <h1 className="p-1 px-2 rounded-xl text-white" style={{ backgroundColor: e.priority === 'HIGH' ? '#EC0B0B' : e.priority === 'MEDIUM' ? '#FF9300' : e.priority === 'LOW' ? '#009510' : '' }}>{e.priority}</h1>
                            </div>
                        </div>
                        <button onClick={() => deleteItem(e.id)}>delete</button>
                    </div>
                )
            })}
            <button className="button-86" role="button" onClick={pickUp}>Add Task <Plus /></button>
            {modal && (<AddTask />)}
        </div>
    )
}