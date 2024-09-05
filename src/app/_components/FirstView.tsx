import React from "react";
import { Header } from "@/components/Header";
import { Access } from "@/components/Access";

export const FirstView = () => {
  return (
    <section className="min-h-screen w-full bg-primary">
      <Header />
      <main className="container mx-auto px-16 sm:px-20 md:px-28 lg:px-32 pt-32 lg:pt-48 xl:pt-56">
        <div className="flex flex-col justify-center gap-24">
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed tracking-widest">
              2024.08.15
            </h2>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-widest">
              SEA FIREWORKS FESTIVAL
            </h1>
          </div>
          <Access />
        </div>
      </main>
    </section>
  );
};
