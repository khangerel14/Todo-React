import Dot from "@/images/Dot";
import Plus from "@/images/Plus";
import { useState } from "react";
import { AddTask } from "./AddTask"

export const Todo = ({ todoData }: any ) => {
    const [ modal, setModal ] = useState(false);
    const pickUp = () => {
        setModal(!modal)
    }
    return (
        <div className="flex flex-col w-[325px] p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">To do</h1>
                {todoData.length}
            </div>
            { todoData && todoData.map((e: any) => {
                return (
                    <div className="border bg-white rounded-lg p-2 px-4">
                        <h1>title: {e.title}</h1>
                        <p>description: {e.description}</p>
                    </div>
                )
            })}
            <button className="flex items-center p-1 w-full bg-white gap-3 justify-center rounded-md" onClick={pickUp}>Add Task <Plus /></button>
            {modal && (<AddTask />)}
        </div>
    )
}