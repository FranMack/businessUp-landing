import { Hero,Solutions,AboutUs,OurServices } from "./components";

export default function Home() {
  return <main className="w-screen min-h-scree bg-[#ffff]">
    <Hero/>
    <Solutions/>
    <AboutUs/>
    <OurServices/>
  </main>;
}
