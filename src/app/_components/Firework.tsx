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
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-between px-4 py-24 md:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-4 rounded-full bg-white px-10 py-3 lg:px-12 lg:py-4 xl:px-14 xl:py-5">
            <h1 className="font-bold text-3xl text-primary tracking-widest lg:text-4xl xl:text-5xl">
              FIREWORK
            </h1>
            <h2 className="hidden font-semibold text-primary text-xl tracking-widest md:text-2xl lg:block">
              海上花火
            </h2>
          </div>
          <div className="hidden flex-col items-start justify-between gap-4 md:block">
            <h2 className="font-semibold text-white text-xl tracking-widest lg:text-2xl xl:text-3xl">
              2024.8.15
            </h2>
            <h2 className="font-semibold text-white text-xl tracking-widest lg:text-2xl xl:text-3xl">
              20:00 - 20:30（雨天時中止）
            </h2>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="font-bold text-3xl text-white tracking-widest lg:text-4xl xl:text-5xl">
            水中花火が海上で扇状に花開く
          </h2>
        </div>
      </div>
    </section>
  );
};
