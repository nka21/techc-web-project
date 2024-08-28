import React from "react";
import Image, { StaticImageData } from "next/image";

// 画像のインポート
import superBeaver from "@/assets/artists/super_beaver.jpg";
import oralCigarettes from "@/assets/artists/the_oral_cigarettes.jpg";
import coldRain from "@/assets/artists/cold_rain.jpg";
import saucyDog from "@/assets/artists/saucy_dog.jpg";
import heySmity from "@/assets/artists/hey_smity.jpg";
import ano from "@/assets/artists/ano.jpg";

interface ScheduleItemProps {
  name: string;
  startTime: string;
  endTime: string;
  image: StaticImageData;
}

interface ScheduleSectionProps {
  title: string;
  timeRange: string;
  items: ScheduleItemProps[];
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  name,
  startTime,
  endTime,
  image,
}) => (
  <div className="flex items-center border-primary border-b-2 py-8">
    <div className="mr-6 h-56 w-80 relative rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={`${name} artist image`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="flex-1 flex flex-col justify-between h-56 py-12">
      <h5 className="font-semibold text-primary text-4xl tracking-[7.20px]">
        {name}
      </h5>
      <p className="text-3xl text-primary tracking-[3px]">
        {startTime} - {endTime}
      </p>
    </div>
  </div>
);

const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  title,
  timeRange,
  items,
}) => (
  <div className="my-12">
    <div className="space-x-4 border-primary border-b-2 py-12">
      <span className="font-semibold text-4xl text-primary tracking-[7.20px]">
        {title}
      </span>
      <span className="font-semibold text-3xl text-primary tracking-[3px]">
        {timeRange}
      </span>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <ScheduleItem
          key={index}
          name={item.name}
          startTime={item.startTime}
          endTime={item.endTime}
          image={item.image}
        />
      ))}
    </div>
  </div>
);

const ArtistSchedule: React.FC = () => {
  const morningSchedule: ScheduleItemProps[] = [
    {
      name: "SUPER BEAVER",
      startTime: "11:00",
      endTime: "11:45",
      image: superBeaver,
    },
    {
      name: "THE ORAL CIGARETTES",
      startTime: "11:45",
      endTime: "12:30",
      image: oralCigarettes,
    },
    {
      name: "COLD RAIN",
      startTime: "12:30",
      endTime: "13:15",
      image: coldRain,
    },
  ];

  const afternoonSchedule: ScheduleItemProps[] = [
    {
      name: "saucy dog",
      startTime: "15:00",
      endTime: "15:45",
      image: saucyDog,
    },
    {
      name: "HEY-SMITY",
      startTime: "15:45",
      endTime: "16:30",
      image: heySmity,
    },
    { name: "ano", startTime: "16:30", endTime: "17:15", image: ano },
  ];
  return (
    <section className="px-16 pt-72">
      <div className="flex flex-row items-end space-x-8 mb-24">
        <h1 className="font-semibold text-6xl text-primary tracking-[6px]">
          ARTIST
        </h1>
        <h2 className="font-semibold text-3xl text-primary tracking-[3px]">
          出演アーティスト
        </h2>
      </div>

      <ScheduleSection
        title="午前の部"
        timeRange="11:00 - 14:00"
        items={morningSchedule}
      />

      <ScheduleSection
        title="午後の部"
        timeRange="15:00 - 18:00"
        items={afternoonSchedule}
      />

      <p className="mt-8 mb-64 text-gray-600 text-2xl">
        ※ 物販は会場限定販売です。
        <br />
        記念品や限定グッズを多数ご用意しておりますので、この機会にぜひお求めください。
      </p>
    </section>
  );
};

export default ArtistSchedule;
