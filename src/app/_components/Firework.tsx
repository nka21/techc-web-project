import React from "react";
import Image from "next/image";

// 画像のインポート
import firework from "@/assets/firework/firework.jpg";

const Firework = () => {
  return (
    <section className="relative h-screen">
      <Image
        src={firework}
        alt="Firework background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 p-20 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="bg-white bg-opacity-90 rounded-full px-16 py-4">
            <div className="flex items-baseline space-x-4 text-primary">
              <h1 className="text-6xl font-semibold tracking-[6px]">
                FIREWORK
              </h1>
              <span className="text-3xl font-semibold tracking-[3px]">
                海上花火
              </span>
            </div>
          </div>
          <span className="text-white text-4xl font-semibold tracking-widest">
            2024.8.15
            <br />
            20:00 - 20:30 （雨天時中止）
          </span>
        </div>
        <div className="mx-auto">
          <h2 className="text-white text-6xl font-semibold tracking-widest">
            水中花火が海上で扇状に花開く
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Firework;
