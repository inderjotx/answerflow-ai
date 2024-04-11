import { Card } from "@/components/Card";
import { FeatureAnimation } from "@/components/FeatureAnimation";
import { Hero } from "@/components/Hero";


export enum StarLocation {
  Start,
  Middle,
  End
}

export default function Home() {
  return (
    <div className="w-full h-full mt-40 bg-[url('/bg-1.png')] bg-repeat-y bg-cover " >

      <Hero />

      {/* features cards */}
      <div className="w-full mb-28 gap-20 flex flex-col items-center px-10 mt-8" >
        <Card starLocation={StarLocation.End} />
        <Card starLocation={StarLocation.Middle} />
        <Card starLocation={StarLocation.Start} />
      </div>



      {/* <div className="flex justify-center mt-40 px-20" > */}
      <FeatureAnimation />
      {/* </div> */}
    </div>
  );
}
