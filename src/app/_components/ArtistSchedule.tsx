import React from "react";

const ArtistSchedule = () => {
  return (
    <section className="px-16 pt-72">
      <div className="flex flex-row items-end space-x-8">
        <h1 className="font-semibold text-6xl text-primary tracking-[6px]">
          ARTIST
        </h1>
        <h2 className="font-semibold text-3xl text-primary tracking-[3px]">
          出演アーティスト
        </h2>
      </div>
      <div className="my-12">
        <div className="space-x-4 border-primary border-b-2 pb-8">
          <span className="font-semibold text-4xl text-primary tracking-[7.20px]">
            午前の部
          </span>
          <span className="font-semibold text-3xl text-primary tracking-[3px]">
            11:00 - 14:00
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-primary border-b-2 py-8">
            <div className="mr-6 h-56 w-80 rounded-lg bg-slate-300" />
            <div>
              <h5 className="font-semibold text-primary text-xl">
                SUPER BEAVER
              </h5>
              <p className="text-lg text-primary">11:00 - 11:45</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-primary border-b-2 py-8">
            <div className="mr-6 h-56 w-80 rounded-lg bg-slate-300" />
            <div>
              <h5 className="font-semibold text-primary text-xl">
                SUPER BEAVER
              </h5>
              <p className="text-lg text-primary">11:00 - 11:45</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-primary border-b-2 py-8">
            <div className="mr-6 h-56 w-80 rounded-lg bg-slate-300" />
            <div>
              <h5 className="font-semibold text-primary text-xl">
                SUPER BEAVER
              </h5>
              <p className="text-lg text-primary">11:00 - 11:45</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-600 text-sm">
        ※ 物販は会場限定販売です。
        <br />
        記念品や限定グッズを多数ご用意しておりますので、この機会にぜひお求めください。
      </p>
    </section>
  );
};

export default ArtistSchedule;
