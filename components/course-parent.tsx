import React from 'react'
import { Button } from './ui/button'

export const CourseParent = () => {
  return (
    <div className='flex justify-between flex-col p-3 border rounded-xl w-[300px] gap-3'>
        <div className='flex items-center p-2 border-b-2 '>
            <div className='flex items-center justify-center flex-col gap-1'>
                <img className='rounded-full h-12 w-12' src='https://picsum.photos/200/300'/>
                <p>Name</p>
            </div>
            <p className='text-5xl flex-1 text-center'>Title</p>
        </div>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, non iste quos voluptatum fuga dolorem similique doloremque, harum animi in debitis dolores ipsa suscipit, corrupti illum eos aliquid quisquam adipisci?</p>
        </div>
        <Button variant="default">Click for more...</Button>
    </div>
  )
}
