import React from "react";
import Image, { StaticImageData } from "next/image";

// 画像のインポート
import active1 from "@/assets/actives/active1.jpg";
import active2 from "@/assets/actives/active2.jpg";
import active3 from "@/assets/actives/active3.jpg";

// 型の定義
interface ActivityCardProps {
  image: StaticImageData;
  title: string;
  price: string;
  duration: string;
  minAge: string;
  description: string;
}

const PaymentIcon: React.FC = () => (
  <svg
    width="30"
    height="22"
    viewBox="0 0 30 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="paymentIconTitle"
  >
    <title id="paymentIconTitle">支払い方法アイコン</title>
    <path
      d="M26.0138 0.453125H3.98619C1.78529 0.453125 0 2.23842 0 4.43932V17.5607C0 19.7616 1.78529 21.5469 3.98619 21.5469H26.0138C28.2147 21.5469 30 19.7616 30 17.5607V4.43932C30 2.23842 28.2147 0.453125 26.0138 0.453125ZM28.125 17.5607C28.125 18.7252 27.1784 19.6719 26.0138 19.6719H3.98619C2.82164 19.6719 1.875 18.7252 1.875 17.5607V9.125H28.125V17.5607ZM28.125 6.3125H1.875V4.43932C1.875 3.27477 2.82164 2.32812 3.98619 2.32812H26.0138C27.1784 2.32812 28.125 3.27477 28.125 4.43932V6.3125Z"
      fill="#212121"
    />
  </svg>
);

const ActivityCard: React.FC<ActivityCardProps> = ({
  image,
  title,
  price,
  duration,
  minAge,
  description,
}) => (
  <div className="flex flex-col items-start w-96">
    <div className="mb-8 rounded-lg">
      <Image src={image} alt={title} />
    </div>
    <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>
    <p className="text-[#212121] text-xl font-semibold tracking-widest mb-1">
      {price} / {duration}
    </p>
    <p className="text-sm font-semibold tracking-wider mb-2">
      参加条件：{minAge}
    </p>
    <p className="text-sm">{description}</p>
  </div>
);

const Active = () => {
  return (
    <section className="px-20 py-48">
      <div className="mb-12">
        <div className="flex items-baseline space-x-4 mb-6 text-primary">
          <h1 className="text-6xl font-semibold tracking-[6px]">ACTIVE</h1>
          <span className="text-3xl font-semibold tracking-[3px]">
            マリンスポーツ
          </span>
        </div>
        <p className="text-primary text-3xl font-semibold tracking-[3px] mb-6">
          営業時間: 10:00-17:00 （最終受付 16:00）
        </p>
        <div className="flex items-center space-x-[10px]">
          <PaymentIcon />
          <p className="text-[#212121] text-xl font-semibold tracking-widest">
            クレジットカード / 現金 / 交通系IC / PayPay
          </p>
        </div>
      </div>
      <div className="flex space-x-12 justify-between">
        <ActivityCard
          image={active1}
          title="バナナボート"
          price="1,500円"
          duration="15min"
          minAge="6歳以上"
          description="みんなで楽しめるバナナボート！インストラクターがボートを引っ張り、スピード感溢れる体験が楽しめます。"
        />
        <ActivityCard
          image={active2}
          title="海上ゴーカート"
          price="2,000円"
          duration="30min"
          minAge="なし"
          description="ゆっくり走行で優雅にクルージングできる、お子様でも運転できる安心安全マリンスポーツです。"
        />
        <ActivityCard
          image={active3}
          title="水上滑り台"
          price="500円"
          duration="1hr"
          minAge="なし"
          description="海の上の大型のアトラクションです。
子供から大人まで楽しめるアクティビティが満載です。"
        />
      </div>
    </section>
  );
};

export default Active;
