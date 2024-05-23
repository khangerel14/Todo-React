'use client';

import { useEffect } from "react";
import Plus from "@/images/Plus";
import { useState } from "react";
import { AddTask } from "./index"

type Todo = {
    id: string
    title: string
    description: string
    priority: 'HIGH' | 'MEDIUM' | 'LOW'
    status: string
}
export const Completed = ({ todoData }: any) => {
    const [ modal, setModal ] = useState(false);
    const pickUp = () => {
        setModal(!modal)
    }
    const getNumberOfCompleted = () => {
        if (!Array.isArray(todoData)) {
            return 0
        }
        return todoData?.filter((e: any) => e.status === 'Completed').length
    }
    const deleteItem = async (id: string) => {
        try {
            const res = await fetch(`http://localhost:8000/todo/deleteById/${id}`, { method: 'DELETE' })
            if (res.ok) {

                console.log('success');
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getNumberOfCompleted()
    }, [])
    return (
        <div className="flex flex-col w-[325px] p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">Completed</h1>
                {getNumberOfCompleted()}
            </div>
            { todoData && todoData.filter((e: Todo) => e.status === 'Completed').map((e: Todo, index: number) => {
                return (
                    <div className="flex justify-between items-start border bg-white rounded-lg p-2 px-4" key={index}>
                        <div className="flex flex-col">
                            <h1 className="font-semibold">title: {e.title}</h1>
                            <p>description: {e.description}</p>
                            <div className="flex items-center gap-2 font-semibold">priority:
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