'use client'

import { useState, useEffect } from 'react';
import { SwitchTab, InProgress, Completed, Todo } from './index'

export const Drawstack = () => {
  const [ todoData, setTodoData ] = useState('');

  const getTodo = async () => {
    try {
        const response = await fetch('http://localhost:8000/todo/getAllTodo', { method: 'GET' })
        if ( !response.ok ) {
            throw new Error('fetch data is failed')
        }
        const data = await response.json();
        setTodoData(data);
        console.log(data);
    } catch (error) {
        throw new Error('error')
    }
  }
  useEffect(() => {
      getTodo()
  }, [])
  return (
    <div className='flex flex-col p-5 px-5 bg-gray-50 w-full gap-4 h-screen'>
        <SwitchTab />
        <div className='flex justify-between'>
          <Todo todoData={todoData}/>
          <InProgress todoData={todoData}/>
          <Completed todoData={todoData}/>
        </div>
    </div>
  )
}