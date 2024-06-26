'use client';

import { useEffect } from "react";
import Plus from "@/images/Plus";
import { useState } from "react";
import { AddTask } from "./index"

export const InProgress = ({ todoData }: any) => {
    const [ modal, setModal ] = useState(false);
    const pickUp = () => {
        setModal(!modal)
    }
    const getNumberOfInProgress = () => {
        if (!Array.isArray(todoData)) {
            return 0
        }
        return todoData?.filter((e: any) => e.status === 'InProgress').length
    }
    const deleteItem = async (id: string) => {
        try {
            const res = await fetch(``, { method: 'DELETE' })
            if (res.ok) {
                console.log('deleted successfully');
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getNumberOfInProgress()
    }, [])
    return (
        <div className="flex flex-col w-[325px] p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">In Progress</h1>
                {getNumberOfInProgress()}
            </div>
            { todoData && todoData.filter((e: any) => e.status === 'InProgress').map((e: any, index: number) => {
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