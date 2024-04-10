import React from 'react'
import { Carousel } from './Carousel'
import { HeroButton } from './HeroButton'


export const Hero = () => {
    return (
        <div className='w-full bg-[url("/bg-1.png")] ' >
            <Carousel />


            <div className="flex flex-col justify-center gap-8 w-full mt-36 px-10 text-center">
                <h1 className="text-6xl font-semibold mx-auto" >Just Chat with your Data</h1>
                <h3 className="text-xl" > Affordable way to build CustomGPT Bots, trained on your Data. <span className="text-orange-500 font-medium" > Using your own OpenAI API Key! </span>  </h3>

                <div className="flex items-center flex-col  " >
                    <HeroButton />
                    <span className="text-sm text-muted-foreground mt-3">Cancel Anytime</span>
                    <span className="text-sm text-muted-foreground"  >100+ Customers are saving on AI Bots</span>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 text-sm mt-6" >
                    <h2 className=" p-3 w-[300px] md:w-[250px] bg-muted rounded-full" >✅  Unlimited Chats</h2>

                    <h2 className="p-3 w-[300px]  md:w-[250px] bg-muted rounded-full" >🔐  Secure</h2>

                    <h2 className="p-3 w-[300px] md:w-[250px]  bg-muted rounded-full" >🧩 Biggest Library of Connectors</h2>
                </div>
            </div>
        </div>
    )
}