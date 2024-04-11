import { Card, StarLocation } from "@/components/Card";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full mt-40 " >

      <Hero />
      <Card starLocation={StarLocation.End} />

    </div>
  );
}
