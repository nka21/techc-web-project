import React from "react";
import Image from "next/image";

// 画像のインポート
import firework from "@/assets/firework/firework.jpg";

export const Firework = () => {
  return (
    <section className="relative h-screen w-full">
      <Image
        src={firework}
        alt="Firework background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative container mx-auto z-10 px-4 md:px-16 py-24 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="items-end gap-4 flex bg-white px-10 lg:px-12 xl:px-14 py-3 lg:py-4 xl:py-5 rounded-full">
            <h1 className="font-bold text-3xl text-primary tracking-widest lg:text-4xl xl:text-5xl">
              FIREWORK
            </h1>
            <h2 className="hidden lg:block font-semibold text-primary text-xl tracking-widest md:text-2xl">
              海上花火
            </h2>
          </div>
          <div className="flex-col items-start justify-between hidden md:block gap-4">
            <h2 className="text-white text-xl lg:text-2xl xl:text-3xl font-semibold tracking-widest">
              2024.8.15
            </h2>
            <h2 className="text-white text-xl lg:text-2xl xl:text-3xl font-semibold tracking-widest">
              20:00 - 20:30（雨天時中止）
            </h2>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest">
            水中花火が海上で扇状に花開く
          </h2>
        </div>
      </div>
    </section>
  );
};
