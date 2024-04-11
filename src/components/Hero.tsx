'use client'
import React from 'react'
import { Carousel } from './Carousel'
import { HeroButton } from './HeroButton'
import { Variant, Variants, motion } from 'framer-motion'


const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};


export const Hero = () => {
    return (
        <div className='w-full  ' >
            <Carousel />


            <div className="flex flex-col justify-center gap-8 w-full mt-36 px-10 text-center">
                <motion.h1
                    variants={revealVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1, ease: "linear" }}
                    className="text-6xl font-semibold mx-auto" >Just Chat with your Data</motion.h1>
                <motion.h3
                    variants={revealVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, ease: "linear" }}
                    className="text-xl" > Affordable way to build CustomGPT Bots, trained on your Data. <span className="text-orange-500 font-medium" > Using your own OpenAI API Key! </span>  </motion.h3>

                <motion.div
                    className="flex items-center flex-col "
                    variants={revealVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4, ease: "linear" }}
                >
                    <HeroButton />
                    <span className="text-sm text-muted-foreground mt-3">Cancel Anytime</span>
                    <span className="text-sm text-muted-foreground"  >100+ Customers are saving on AI Bots</span>
                </motion.div>

                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6, ease: "linear" }}
                    className="flex flex-col md:flex-row items-center md:justify-center gap-4 text-sm mt-6" >
                    <h2
                        className=" p-3 w-[300px] md:w-[250px] bg-muted rounded-full" >✅  Unlimited Chats</h2>

                    <h2 className="p-3 w-[300px]  md:w-[250px] bg-muted rounded-full" >🔐  Secure</h2>

                    <h2 className="p-3 w-[300px] md:w-[250px]  bg-muted rounded-full" >🧩 Biggest Library of Connectors</h2>
                </motion.div>
            </div>
        </div>
    )
}