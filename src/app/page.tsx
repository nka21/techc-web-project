import { About } from "./_components/About";
import Active from "./_components/Active";
import ArtistSchedule from "./_components/ArtistSchedule";
import DrinkFood from "./_components/DrinkFood";
import { Enjoy } from "./_components/Enjoy";
import { EventMap } from "./_components/EventMap";
import FAQ from "./_components/FAQ";
import Firework from "./_components/Firework";
import { FirstView } from "./_components/FirstView";
import Rental from "./_components/Rental";

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
      <FAQ />
    </div>
  );
}
