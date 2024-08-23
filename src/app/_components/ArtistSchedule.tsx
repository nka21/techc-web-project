import React from "react";

const ArtistSchedule = () => {
  return (
    <section className="mt-72 px-16">
      <div className="flex flex-row items-end space-x-8">
        <h1 className="font-semibold text-6xl text-primary tracking-[6px]">
          ARTIST
        </h1>
        <h2 className="font-semibold text-3xl text-primary tracking-[3px]">
          出演アーティスト
        </h2>
      </div>
      <div className="my-12">
        <div className="border-b-2 border-primary pb-8 space-x-4">
          <span className="text-primary text-4xl font-semibold tracking-[7.20px]">
            午前の部
          </span>
          <span className="text-primary text-3xl font-semibold tracking-[3px]">
            11:00 - 14:00
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-b-2 border-primary py-8">
            <div className="w-80 h-56  rounded-lg mr-6 bg-slate-300"></div>
            <div>
              <h5 className="text-xl font-semibold text-primary">
                SUPER BEAVER
              </h5>
              <p className="text-lg text-primary">11:00 - 11:45</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-b-2 border-primary py-8">
            <div className="w-80 h-56  rounded-lg mr-6 bg-slate-300"></div>
            <div>
              <h5 className="text-xl font-semibold text-primary">
                SUPER BEAVER
              </h5>
              <p className="text-lg text-primary">11:00 - 11:45</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-b-2 border-primary py-8">
            <div className="w-80 h-56  rounded-lg mr-6 bg-slate-300"></div>
            <div>
              <h5 className="text-xl font-semibold text-primary">
                SUPER BEAVER
              </h5>
              <p className="text-lg text-primary">11:00 - 11:45</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-8">
        ※ 物販は会場限定販売です。
        <br />
        記念品や限定グッズを多数ご用意しておりますので、この機会にぜひお求めください。
      </p>
    </section>
  );
};

export default ArtistSchedule;
