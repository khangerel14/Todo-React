'use client';

import Icon from "@/images/Icon";

export const Navbar = () => {
  return (
    <div className="flex max-w-screen-xl justify-between items-center h-14 mx-auto">
      <div className="flex gap-5 items-center">
        <Icon />
        <h1 className='text-2xl font-semibold'>Todo app</h1>
      </div>
      <div className="flex gap-6 items-center text-2xl font-semibold">
        <button className="hover:scale-125 transition ease-in">Post</button>
        <button className="hover:scale-125 transition ease-in">Archived</button>
        <button className="hover:scale-125 transition ease-in">Update</button>
      </div>
    </div>
  )
}