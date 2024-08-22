import { HiArrowRight } from "react-icons/hi";
import { NavBar } from "@/components/NavBar";

const EventInfo = () => (
  <div className="flex h-[180px] w-[1250px] items-center justify-between rounded-[20px] bg-white px-[50px] text-[#212121]">
    <div className="font-semibold leading-[60px]">
      <p className="text-[38px]">8.15 10:00 START - 21:00 END</p>
      <p className="text-[34px]">お台場海浜公園（東京都港区台場）</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <button
        type="button"
        className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary text-[50px] text-white"
        aria-label="アクセス情報"
      >
        <HiArrowRight />
      </button>
      <p className="font-semibold text-[18px]">アクセス情報</p>
    </div>
  </div>
);

export const FirstView = () => {
  return (
    <div className="h-[1024px] bg-primary text-white">
      <header className="px-[50px] pt-[50px]">
        <NavBar />
      </header>

      <main className="mt-[230px] flex justify-center">
        <div className="space-y-[122px]">
          <div className="space-y-4 font-bold tracking-[15%]">
            <h2 className="text-6xl">2024.08.15</h2>
            <h1 className="text-7xl">SEA FIREWORKS FESTIVAL</h1>
          </div>
          <EventInfo />
        </div>
      </main>
    </div>
  );
};
