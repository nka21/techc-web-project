import { FirstView } from "./_components/FirstView";
import { About } from "./_components/About";
import { Enjoy } from "./_components/Enjoy";
import { EventMap } from "./_components/EventMap";
import { ArtistSchedule } from "./_components/ArtistSchedule";
import DrinkFood from "./_components/DrinkFood";
import { Active } from "./_components/Active";
import { Rental } from "./_components/Rental";
import { Firework } from "./_components/Firework";
import { Faq } from "./_components/FAQ";
import { Notes } from "./_components/Notes";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <FirstView />
      <About />
      <Enjoy />
      <EventMap />
      <ArtistSchedule />
      <DrinkFood />
      <Active />
      <Rental />
      <Firework />
      <Faq />
      <Notes />
      <Footer />
    </div>
  );
}
