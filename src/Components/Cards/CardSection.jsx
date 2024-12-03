import React from 'react'
import Card from '@/Components/Cards/Card'
import { IoCarOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { PiSteeringWheelLight } from "react-icons/pi";
import Link from 'next/link';


function CardSection() {
  return (
    <section className='w-[80%] mx-auto my-14 lg:h-[70vh]'>
      <h1 className='text-center font-bold text-4xl p-3'>Our Services</h1>
      <p className='text-center text-xl p-2 mb-14'>Pleased To Serve You</p>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-3 h-[50%] '>
        <Link href={"/car"}><Card icon={<IoCarOutline />} title={"Book Your Ride"} description={"Get the wheels you need, when you need them"}/></Link>
        <Link href={"/drivers"}><Card icon={<BsPerson />} title={"Hire A Driver"} color={"#fd8d14"} description={"Your personal chauffeur, anytime, anywhere"}/></Link>
        <Link href={""}><Card icon={<PiSteeringWheelLight />} title={"Driving School"} description={"Master the road with expert driving lessons"}/></Link>
      </div>
      
    </section>
  )
}

export default CardSection
