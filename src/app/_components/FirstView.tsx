import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { NavBar } from "@/components/NavBar";

export const FirstView = () => {
  return (
    <section className="min-h-screen w-full bg-primary">
      <NavBar />
      <main className="mt-64">
        <div className="grid place-items-center space-y-48">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl text-white tracking-widest">
              2024.08.15
            </h2>
            <h1 className="font-bold text-5xl text-white tracking-widest">
              SEA FIREWORKS FESTIVAL
            </h1>
          </div>
          <div className="container mx-auto max-w-3xl p-8">
            <div className="grid grid-cols-[1fr,auto] items-center gap-4 rounded-2xl bg-white px-8 py-4 text-[#212121]">
              <div className="font-semibold tracking-wider">
                <p className="text-xl sm:text-2xl">
                  8.15 10:00 START - 21:00 END
                </p>
                <p className="mt-1 text-lg sm:text-xl">
                  お台場海浜公園（東京都港区台場）
                </p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-white sm:h-14 sm:w-14 sm:text-3xl"
                  aria-label="アクセス情報"
                >
                  <HiArrowRight />
                </button>
                <p className="font-semibold text-xs sm:text-sm">アクセス情報</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
