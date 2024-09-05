import Image, { type StaticImageData } from "next/image";
import type React from "react";

// 画像のインポート
import banana from "@/assets/drink_food/banana.jpg";
import kakigoori from "@/assets/drink_food/kakigoori.jpg";
import gyuukushi from "@/assets/drink_food/gyuukyushi.jpg";
import yakisoba from "@/assets/drink_food/yakisoba.jpg";
import drink_food_bg from "@/assets/drink_food/drink_food_bg.jpg";

interface FoodCardProps {
  title: string;
  price: string;
  description: string;
  image: StaticImageData;
  className?: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  title,
  price,
  description,
  image,
  className,
}) => (
  <div
    className={`h-80 w-80 flex-shrink-0 overflow-hidden rounded-[20px] bg-white shadow-lg ${className}`}
  >
    <div className="relative h-36 w-full">
      <Image
        src={image}
        alt={`${title} artist image`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <div className="mb-4 flex items-baseline space-x-4 font-semibold">
        <h3 className="text-md tracking-widest">{title}</h3>
        <span className="tracking-[2px]">{price}</span>
      </div>
      <p className="text-sm leading-relaxed tracking-widest">{description}</p>
    </div>
  </div>
);

const PaymentIcon: React.FC = () => (
  <svg
    className="w-6 h-auto md:w-8 lg:w-10"
    viewBox="0 0 30 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="paymentIconTitle"
  >
    <title id="paymentIconTitle">支払い方法アイコン</title>
    <path
      d="M26.0138 0.453125H3.98619C1.78529 0.453125 0 2.23842 0 4.43932V17.5607C0 19.7616 1.78529 21.5469 3.98619 21.5469H26.0138C28.2147 21.5469 30 19.7616 30 17.5607V4.43932C30 2.23842 28.2147 0.453125 26.0138 0.453125ZM28.125 17.5607C28.125 18.7252 27.1784 19.6719 26.0138 19.6719H3.98619C2.82164 19.6719 1.875 18.7252 1.875 17.5607V9.125H28.125V17.5607ZM28.125 6.3125H1.875V4.43932C1.875 3.27477 2.82164 2.32812 3.98619 2.32812H26.0138C27.1784 2.32812 28.125 3.27477 28.125 4.43932V6.3125Z"
      fill="currentColor"
    />
  </svg>
);

const DrinkFood = () => {
  return (
    <section className="relative h-full min-h-full w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={drink_food_bg}
          alt="DrinkFood Section Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#0077c9]/10" />
      </div>
      <div className="container relative z-10 mx-auto my-32 px-8 md:px-12 lg:px-20">
        <div className="mb-12 flex flex-col gap-4">
          {/* メインタイトル */}
          <div className="items-end gap-4 sm:flex">
            <h1 className="font-bold text-3xl text-primary tracking-widest md:text-5xl">
              DRINK&FOOD
            </h1>
            <h2 className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
              浜辺の屋台
            </h2>
          </div>
          {/* サブタイトル */}
          <p className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
            営業時間： 10:00-19:00
          </p>
          <div className="flex items-center gap-4">
            <PaymentIcon />
            <p className="font-semibold text-[#212121] text-sm md:text-base lg:text-lg tracking-widest">
              現金 / 交通系IC / PayPay
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex w-max gap-x-10 pb-8 lg:gap-x-24">
            <div>
              <FoodCard
                image={banana}
                title="チョコバナナ"
                price="300yen"
                description="新鮮なバナナにたっぷりのチョコレートをかけた定番のスイーツ。子供から大人まで楽しめる甘いおやつ！"
              />
            </div>
            <div className="mt-32">
              <FoodCard
                image={kakigoori}
                title="かき氷"
                price="400yen"
                description="ふわふわのかき氷にシロップをたっぷりとかけて、さっぱりとした味わいを。マンゴーや抹茶などの特製シロップも！"
              />
            </div>
            <div>
              <FoodCard
                image={gyuukushi}
                title="牛串"
                price="500yen"
                description="厳選された牛肉を使ったジューシーな串焼き。特製タレや塩で味付けして、お好みの味で楽しめます。"
              />
            </div>
            <div className="mt-32">
              <FoodCard
                image={yakisoba}
                title="焼きそば"
                price="500yen"
                description="野菜と豚肉をたっぷり使ったボリューム満点の焼きそば。特製ソースが香ばしく、食欲をそそります。"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkFood;
