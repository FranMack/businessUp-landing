import {
  AboutUs,
  Contact,
  Hero,
  OurClients,
  OurServices,
  Solutions,
} from "../features";

export default function Home() {
  return (
    <main className="w-screen min-h-screen overflow-x-hidden ">
      <Hero />
      <Solutions />
      <OurServices />
      <AboutUs />
      <OurClients />
      <Contact />
    </main>
  );
}
