import { HiArrowRight } from "react-icons/hi";
import { NavBar } from "@/components/NavBar";

const EventInfo = () => (
  <div className="bg-white text-[#212121] w-[1250px] h-[180px] rounded-[20px] flex justify-between items-center px-[50px]">
    <div className="font-semibold leading-[60px]">
      <p className="text-[38px]">8.15 10:00 START - 21:00 END</p>
      <p className="text-[34px]">お台場海浜公園（東京都港区台場）</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <button
        type="button"
        className="h-[80px] w-[80px] bg-primary rounded-full text-[50px] flex items-center justify-center text-white"
        aria-label="アクセス情報"
      >
        <HiArrowRight />
      </button>
      <p className="text-[18px] font-semibold">アクセス情報</p>
    </div>
  </div>
);

export const FirstView = () => {
  return (
    <div className="bg-primary text-white h-[1024px]">
      <header className="pt-[50px] px-[50px]">
        <NavBar />
      </header>

      <main className="mt-[230px] flex justify-center">
        <div className="space-y-[122px]">
          <div className="font-bold space-y-4 tracking-[15%]">
            <h2 className="text-6xl">2024.08.15</h2>
            <h1 className="text-7xl">SEA FIREWORKS FESTIVAL</h1>
          </div>
          <EventInfo />
        </div>
      </main>
    </div>
  );
};
