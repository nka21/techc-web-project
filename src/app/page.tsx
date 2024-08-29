import { About } from "./_components/About";
import Active from "./_components/Active";
import ArtistSchedule from "./_components/ArtistSchedule";
import DrinkFood from "./_components/DrinkFood";
import { Enjoy } from "./_components/Enjoy";
import { EventMap } from "./_components/EventMap";
import { FirstView } from "./_components/FirstView";

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
    </div>
  );
}
