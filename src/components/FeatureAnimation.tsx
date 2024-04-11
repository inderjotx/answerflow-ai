'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const FEATURES = 4

export const FeatureAnimation = (props: Props) => {

    const height = `h-[${FEATURES * 100}vh]`
    const [curFeatNum, setCurFeatNum] = useState<number>(0)

    const parentRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress, scrollY } = useScroll({
        container: parentRef,
        offset: ["end end", "start start"]
    })        // latestVal % size  


    useEffect(() => {

        console.log("changed vale ")

    }, [scrollYProgress])


    useMotionValueEvent(scrollYProgress, "change", (latestVal) => {

        const windowSize = 1 / FEATURES
        const curActiveFeature = latestVal % windowSize
        console.log(latestVal)
        console.log(curActiveFeature)
        // this event is not being triggered

    })

    return (
        <div ref={parentRef} className='w-full' >
            <motion.div className={`${height} w-full`} >



                <div className='border flex justify-around sticky top-[25%] w-full ' >


                    <div>features</div>
                    <div> cards </div>
                </div>
            </motion.div>

        </div>
    )
}
