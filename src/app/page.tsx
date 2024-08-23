import { About } from "./_components/About";
import ArtistSchedule from "./_components/ArtistSchedule";
import { Enjoy } from "./_components/Enjoy";
import { EventMap } from "./_components/EventMap";
import { FirstView } from "./_components/FirstView";

export default function Home() {
  return (
    <div>
      <FirstView />
      <About />
      <Enjoy />
      <EventMap />
      <ArtistSchedule />
    </div>
  );
}
