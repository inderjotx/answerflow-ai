'use client'
import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'


export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -90 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.6, ease: "linear" }}
            className='px-4 md:px-8 py-4 z-10 fixed  top-2 right-0 left-0' >
            <div className='border backdrop-blur-md bg-transparent h-16 px-4 md:px-10 rounded-sm items-center flex justify-between' >

                <h1 className='font-bold' >Logo</h1>


                <div className='hidden gap-4 md:flex translate-x-16  text-sm font-semibold'>
                    <h2>Usecases</h2>
                    <h2>Pricing</h2>
                    <h2>Blog</h2>
                </div>

                <div className='hidden md:flex gap-2 ' >
                    <Button variant={"ghost"} >Login</Button>
                    <Button variant={"secondary"} >Get Started</Button>
                </div>
                <div className=' flex md:hidden ' >
                    <Menu />
                </div>

            </div>
        </motion.nav>
    )
}