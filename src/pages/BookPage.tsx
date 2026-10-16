import BookHero from "../components/sections/BookHero";
import WritingOrigin from "../components/sections/WritingOrigin";
import ReadingIdeas from "../components/sections/ReadingIdeas";
import PersonalMotivation from "../components/sections/PersonalMotivation";
import Video from "../components/sections/Video";
import BookAcquisition from "../components/sections/BookAcquisition";
import OtherBook from "../components/sections/OtherBook";
import Quote from "../components/sections/Quote";
export default function BookPage() {
  return (
    <>
      <BookHero />
      <WritingOrigin />
      <ReadingIdeas />
      <Video bookPage />
      <PersonalMotivation />
      <Quote compact />
      <BookAcquisition />
      <OtherBook />
    </>
  );
}
