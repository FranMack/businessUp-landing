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
    <main className="w-screen min-h-scree ">
      <Hero />
      <Solutions />
      <OurServices />
      <AboutUs />
      <OurClients />
      <Contact />
    </main>
  );
}
