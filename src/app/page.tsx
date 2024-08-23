import { About } from "./_components/About";
import { FirstView } from "./_components/FirstView";

export default function Home() {
  return (
    <div>
      <FirstView />
      <About />
      <Enjoy />
      <EventMap />
    </div>
  );
}
