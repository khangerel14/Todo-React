import React from 'react'
import SwitchTab from './SwitchTab'
import Todo from './Todo'
import InProgress from './InProgress'
import Completed from './Completed'

const Drawstack = () => {
  return (
    <div className='flex flex-col p-3 px-5 bg-gray-50 w-full gap-4 h-screen'>
        <SwitchTab />
        <div className='flex justify-between'>
          <Todo />
          <InProgress />
          <Completed />
        </div>
    </div>
  )
}

export default Drawstack

