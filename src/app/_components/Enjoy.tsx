import React from "react";

export const Enjoy = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="px-20 py-48">
        <div className="flex flex-col">
          <div className="flex flex-row items-end space-x-8">
            <h1 className="font-semibold text-6xl text-primary tracking-[6px]">
              ENJOY
            </h1>
            <h2 className="font-semibold text-3xl text-primary tracking-[3px]">
              楽しめること
            </h2>
          </div>
          <p className="mt-12 w-[664px] font-medium text-3xl text-[#212121] leading-[50px] tracking-[3px]">
            海上花火フェスティバルは、
            <br />
            主に3つの観点で楽しむことができま
            <br />
            す。まさに、唯一無二の夏フェスです！
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
          >
            <title>波</title>
            <path
              d="M0 335.929L-2.45617e-05 54.9751C74.7647 12.834 158.746 -6.95982 244.762 2.83149C340.685 13.7747 432.557 46.7389 523.219 80.0102C613.862 113.281 705.197 147.321 800.832 160.587C904.877 175.024 1012.36 164.062 1111.35 128.948C1158.01 112.398 1202.78 90.5694 1250.19 76.228C1311.57 57.6244 1375.91 51.9608 1440 47.6027L1440 335.928L0 335.929Z"
              fill="#0077CA"
              fillOpacity="0.09"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
