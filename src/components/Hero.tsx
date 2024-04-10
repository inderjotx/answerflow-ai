'use client'
import React from 'react'
import { Carousel } from './Carousel'
import { HeroButton } from './HeroButton'
import { Variant, Variants, motion } from 'framer-motion'

const revealAnimation = (y: number, duration: number) => ({
    initial: { y, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration },
} as Variants);

export const Hero = () => {
    return (
        <div className='w-full bg-[url("/bg-1.png")] ' >
            <Carousel />


            <div className="flex flex-col justify-center gap-8 w-full mt-36 px-10 text-center">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl font-semibold mx-auto" >Just Chat with your Data</motion.h1>
                <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl" > Affordable way to build CustomGPT Bots, trained on your Data. <span className="text-orange-500 font-medium" > Using your own OpenAI API Key! </span>  </motion.h3>

                <motion.div
                    className="flex items-center flex-col "
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <HeroButton />
                    <span className="text-sm text-muted-foreground mt-3">Cancel Anytime</span>
                    <span className="text-sm text-muted-foreground"  >100+ Customers are saving on AI Bots</span>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 text-sm mt-6" >
                    <h2
                        className=" p-3 w-[300px] md:w-[250px] bg-muted rounded-full" >✅  Unlimited Chats</h2>

                    <h2 className="p-3 w-[300px]  md:w-[250px] bg-muted rounded-full" >🔐  Secure</h2>

                    <h2 className="p-3 w-[300px] md:w-[250px]  bg-muted rounded-full" >🧩 Biggest Library of Connectors</h2>
                </div>
            </div>
        </div>
    )
}