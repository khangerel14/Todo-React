import React from 'react'
import { SwitchTab, InProgress, Completed, Todo } from './index'
export const Drawstack = () => {
  return (
    <div className='flex flex-col p-5 px-5 bg-gray-50 w-full gap-4 h-screen'>
        <SwitchTab />
        <div className='flex justify-between'>
          <Todo />
          <InProgress />
          <Completed />
        </div>
    </div>
  )
}