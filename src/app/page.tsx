import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";


export enum StarLocation {
  Start,
  Middle,
  End
}

export default function Home() {
  return (
    <div className="w-full h-full mt-40 bg-[url('/bg-1.png')] " >

      <Hero />

      <div className="w-full px-10 mt-8" >
        <Card starLocation={StarLocation.End} />
      </div>

    </div>
  );
}
