import React from 'react'
import facebook from "../assets/facebook1.png"
import Image from "next/image"
import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import user from '../assets/guy7.jpg'

const Header = () => {
  return (
    <div className='p-4 flex items-center justify-between border-b lg:px-10'>
        {/* Leftside */}
        <div className='flex items-center mr-4'>
          <div className='w-10 h-10'>
            <Image src={facebook}></Image>
          </div>
          <div className='ml-2'>
          <input
          type="text"
          placeholder="Search Facebook"
          className='outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 hidden sm:block'>
          </input>
          </div>
        </div>
        {/* Middle */}
        <div className='flex items-center space-x-7 '>
          <MdHome className='w-8 h-9'/>
          <FiFlag className='w-7 h-9'></FiFlag>
          <FiPlayCircle className='w-7 h-9'></FiPlayCircle>
          <BsCart3 className='w-7 h-9'/>
          <GrGroup className='w-7 h-9'/>
        </div>
        {/* RightSide */}
        <div className='flex space-x-5'>
          <div className='md:flex space-x-5 hidden md:block ml-2'>
          <GrAppsRounded className='w-7 h-9'></GrAppsRounded>
          <FaBell className='w-7 h-9'></FaBell>
          <AiOutlineMessage className='w-7 h-9'></AiOutlineMessage>
          </div>
          <div className='w-10 h-10'>
            <Image src={user} className='rounded-full' />
          </div>
        </div>
    </div>
  )
}

export default Header