import AboutHero from "../components/sections/AboutHero";
import AboutOrigins from "../components/sections/AboutOrigins";
import AboutYouth from "../components/sections/AboutYouth";
import AboutEducation from "../components/sections/AboutEducation";
import AboutCareer from "../components/sections/AboutCareer";
import AboutNewPaths from "../components/sections/AboutNewPaths";
import AboutWriting from "../components/sections/AboutWriting";
import Works from "../components/sections/Works";
import Quote from "../components/sections/Quote";
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutOrigins />
      <AboutYouth />
      <AboutEducation />
      <AboutCareer />
      <AboutNewPaths />
      <AboutWriting />
      <Works about />
      <Quote compact />
    </>
  );
}
