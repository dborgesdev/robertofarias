import Hero from "../components/sections/Hero";
import Manifesto from "../components/sections/Manifesto";
import Works from "../components/sections/Works";
import Biography from "../components/sections/Biography";
import LifeGallery from "../components/sections/LifeGallery";
import Quote from "../components/sections/Quote";
import Video from "../components/sections/Video";
import Contact from "../components/sections/Contact";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Works />
      <Biography />
      <LifeGallery />
      <Quote />
      <Video />
      <Contact />
    </>
  );
}
