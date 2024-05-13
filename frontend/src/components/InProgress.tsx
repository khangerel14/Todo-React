import Dot from "@/images/Dot";
import Plus from "@/images/Plus";
import { useState } from "react";
import { AddTask } from "./index"

export const InProgress = ({ todoData }: any) => {
    const [ modal, setModal ] = useState(false);
    const pickUp = () => {
        setModal(!modal)
        console.log(modal);
    }
    return (
        <div className="flex flex-col w-[325px] p-2 bg-gray-200 rounded-md h-fit gap-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold">In Progress</h1>
                {todoData.length}
            </div>
            <button className="flex items-center p-1 w-full bg-white gap-3 justify-center rounded-md" onClick={pickUp}>Add Task <Plus /></button>
            {modal && (<AddTask />)}
        </div>
    )
}