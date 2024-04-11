'use client'

import { cn } from '@/lib/utils'
import { Variants, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Props = {}

const FEATURES = 4

const data = {
    "Data Analysis": "/analytics.jpg",
    "Customer Support": "/support.jpg",
    "Sales Analysis": "/sales.jpg",
    "Product": "/mvp.jpg"
}

const variants = {
    "enter": {
        opacity: [0, 1],
        y: [30, 0],
        z: [2, 0],
        transition: { duration: 0.5 }
    },
    "exit": {
        opacity: [1, 0],
        y: [0, 30],
        z: [0, 2],
        transition: { duration: 0.5 }
    }

} satisfies Variants

export const FeatureAnimation = (props: Props) => {

    const height = `h-[${100 * FEATURES}vh]`
    const ref = useRef<HTMLDivElement | null>(null)



    const [activeNum, setActiveNum] = useState<number>(0)
    const [activeVariant, setActiveVariant] = useState<"enter" | "exit">("enter")

    const keys = Object.keys(data)
    process
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]

    })



    useMotionValueEvent(scrollYProgress, "change", (val) => {

        const eachSlide = 1 / FEATURES
        const activeIndex = Math.ceil(val / eachSlide) - 1
        console.log(activeIndex)

        if (activeIndex != activeNum && activeIndex != -1) {
            setActiveNum(activeIndex)
        }
    })

    return (
        <motion.div ref={ref} className={`h-[400vh] border  `} >

            <div className='sticky border flex top-[130px] w-4/5 mx-auto h-[450px]  '>
                <div className='flex flex-col h-full'>
                    <motion.div className='relative w-1 h-full bg-yellow-400 rounded-b-full' style={{ scaleY: scrollYProgress, transformOrigin: "top" }} >
                    </motion.div>
                </div>

                <div className='flex flex-col my-10 mx-8 text-muted-foreground justify-between'>
                    {
                        keys.map((key) => (
                            <div className={cn('text-3xl', key === keys[activeNum] && "text-white")} key={key}>{key}</div>
                        ))
                    }
                </div>

                <div className='flex items-center ml-auto pr-28' >
                    <motion.div
                        variants={variants}
                        animate={activeVariant}
                        className='relative w-[450px] h-[300px] overflow-hidden rounded-md '>
                        <Image
                            className='absolute inset-0 object-cover'
                            src={data[keys[activeNum] as keyof typeof data]} fill sizes='100' alt='image-showing-information' />
                    </motion.div>

                </div>
            </div>

        </motion.div>
    )
}
