import Calendar from '@/images/Calendar'
import Clock from '@/images/Clock'
import Icon from '@/images/Icon'
import Inbox from '@/images/Inbox'
import Today from '@/images/Today'
import Trash from '@/images/Trash'
import User from '@/images/User'
import Users from '@/images/Users'
import Works from '@/images/Work'
import React from 'react'
import Person from '@/images/Person'
import Plus from '@/images/Plus'
import Menu from '@/images/Menu'

const Aside = () => {
  return (
    <div className='flex flex-col w-[256px] p-3 gap-12'>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
                <Icon />
                <h1 className='text-2xl font-semibold'>Todo app</h1>
            </div>
            <hr />
            <div className='flex gap-3 items-center'>
                <User />
                <div className='flex flex-col gap'>
                    <p>Khangerel Be-ochir</p>
                    <p className='text-gray-400 text-sm'>Premium account</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 items-start'>
                <button className='flex gap-3 items-center'><Inbox /> Inbox</button>
                <button className='flex gap-3 items-center'><Today />Today</button>
                <button className='flex gap-3 items-center'><Calendar />Upcoming</button>
                <button className='flex gap-3 items-center'><Clock />Anytime</button>
                <button className='flex gap-3 items-center'><Inbox /> Someday</button>
                <button className='flex gap-3 items-center'><Trash /> Trash</button>
            </div>
        </div>
        <div className='flex flex-col gap-6 items-start'>
            <h1>Your Projects</h1>
            <div className='flex flex-col items-start gap-5'>
                <button className='flex gap-3 items-center'><Person />Personal</button>
                <button className='flex gap-3 items-center'><Works />Works</button>
                <button className='flex gap-3 items-center'><Users />Drawstack</button>
            </div>
            <div className='flex justify-between w-full items-center'>
                <button className='flex gap-3 items-center'><Plus /> New list</button>
                <button><Menu /></button>
            </div>
        </div>
    </div>
  )
}

export default Aside