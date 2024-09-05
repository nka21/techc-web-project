import { HiArrowRight } from "react-icons/hi";

export const Access = () => {
  return (
    <div className="min-h-full rounded-2xl bg-white px-12 py-8 text-[#212121]">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-3xl leading-relaxed tracking-widest">
            8.15 10:00 START - 21:00 END
          </p>
          <p className="font-semibold text-3xl leading-relaxed tracking-widest">
            お台場海浜公園（東京都港区台場）
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <a
            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-4xl text-white"
            href="/"
          >
            <HiArrowRight />
          </a>
          <p className="font-semibold text-sm sm:text-md">アクセス情報</p>
        </div>
      </div>
    </div>
  );
};
