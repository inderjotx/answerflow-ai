'use client'
import { motion, useAnimation } from 'framer-motion'
import React, { useRef } from 'react'


type Props = {
    starLocation: StarLocation,
}

export enum StarLocation {
    Start,
    Middle,
    End
}

const gradientLineVariants = {
    start: {
        opacity: 0,
        height: "40px",
        bottom: "0%",
    },
    final: {
        opacity: 1,
        height: "80px",
        bottom: "70%",
    },
};



export const Card: React.FC<Props> = ({ starLocation }) => {

    const controls = useAnimation()


    return (
        <div
            onMouseEnter={() => controls.start('final')}
            onMouseLeave={() => controls.start('start')}
            className='w-full relative h-[500px] bg-gradient-to-r from-transparent via-transparent rounded-md group to-purple-500 ' >

            <motion.div
                variants={gradientLineVariants}
                initial="start"
                animate={controls}
                transition={{ duration: 1 }}
                className=" bg-gradient-to-t from-transparent via-purple-500 via-50% to-transparent w-[1px] absolute left-0 bottom-3 z-10"></motion.div>

            <div className='absolute inset-[1px] rounded-md bg-background' >


            </div>

        </div>
    )
}