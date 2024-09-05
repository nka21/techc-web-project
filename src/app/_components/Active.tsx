import Image from "next/image";

import active1 from "@/assets/actives/active1.jpg";
import active2 from "@/assets/actives/active2.jpg";
import active3 from "@/assets/actives/active3.jpg";

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

export const Active = () => {
  return (
    <section className="min-h-full w-full">
      <div className="container mx-auto my-32 px-8 md:px-12 lg:px-20">
        {/* 見出しの部分 */}
        <div className="flex flex-col gap-4 mb-12">
          {/* メインタイトル */}
          <div className="items-end sm:flex gap-4">
            <h1 className="font-bold text-3xl text-primary tracking-widest md:text-5xl">
              ACTIVE
            </h1>
            <h2 className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
              マリンスポーツ
            </h2>
          </div>
          {/* サブタイトル */}
          <p className="text-primary text-xl md:text-2xl font-semibold tracking-widest">
            営業時間： 10:00-17:00（最終受付 16:00）
          </p>
          <div className="flex items-center gap-4">
            <PaymentIcon />
            <p className="text-[#212121] text-lg font-semibold tracking-widest">
              クレジットカード / 現金 / 交通系IC / PayPay
            </p>
          </div>
        </div>
        {/* コンテンツ */}
        <div className="flex flex-col xl:flex-row gap-10 lg:gap-10 xl:justify-between">
          <div className="lg:flex xl:flex-col gap-8 xl:gap-2 xl:max-w-xs">
            <div className="">
              <Image src={active1} alt="バナナボート" />
            </div>
            <div className="flex grow flex-col gap-2 min-w-80 lg:justify-end">
              <h3 className="mt-4 xl:mt-8 text-primary text-xl md:text-2xl font-semibold tracking-widest">
                バナナボート
              </h3>
              <div className="flex xl:flex-col xl:items-start flex-row items-end gap-2 xl:gap-[2px]">
                <h4 className="text-[#212121] font-semibold text-lg md:text-xl tracking-widest">
                  1,500<span className="text-sm md:text-base">円</span> / 15
                  <span className="text-sm md:text-base">min</span>
                </h4>
                <h5 className="text-[#212121] font-semibold text-base md:text-lg tracking-widest">
                  参加条件：６<span className="text-xs md:text-sm">歳以上</span>
                </h5>
              </div>
              <p className="xl:max-w-80 text-[#212121] text-sm md:text-base tracking-widest leading-loose text-pretty">
                みんなで楽しめるバナナボート！インストラクターがボートを引っ張り、スピード感溢れる体験が楽しめます。
              </p>
            </div>
          </div>
          <div className="lg:flex xl:flex-col gap-8 xl:gap-2 xl:max-w-xs">
            <div className="">
              <Image src={active2} alt="海上ゴーカート" />
            </div>
            <div className="flex grow flex-col gap-2 min-w-80 lg:justify-end">
              <h3 className="mt-4 xl:mt-8 text-primary text-xl md:text-2xl font-semibold tracking-widest">
                海上ゴーカート
              </h3>
              <div className="flex xl:flex-col xl:items-start flex-row items-end gap-2 xl:gap-[2px]">
                <h4 className="text-[#212121] font-semibold text-lg md:text-xl tracking-widest">
                  2,000<span className="text-sm md:text-base">円</span> / 30
                  <span className="text-sm md:text-base">min</span>
                </h4>
                <h5 className="text-[#212121] font-semibold text-base md:text-lg tracking-widest">
                  参加条件：なし
                </h5>
              </div>
              <p className="xl:max-w-80 text-[#212121] text-sm md:text-base tracking-widest leading-loose text-pretty">
                ゆっくり走行で優雅にクルージングできる、お子様でも運転できる安心安全マリンスポーツです。
              </p>
            </div>
          </div>
          <div className="lg:flex xl:flex-col gap-8 xl:gap-2 xl:max-w-xs">
            <div className="">
              <Image src={active3} alt="水上滑り台" />
            </div>
            <div className="flex grow flex-col gap-2 min-w-80 lg:justify-end">
              <h3 className="mt-4 xl:mt-8 text-primary text-xl md:text-2xl font-semibold tracking-widest">
                水上滑り台
              </h3>
              <div className="flex xl:flex-col xl:items-start flex-row items-end gap-2 xl:gap-[2px]">
                <h4 className="text-[#212121] font-semibold text-lg md:text-xl tracking-widest">
                  500<span className="text-sm md:text-base">円</span> / 1
                  <span className="text-sm md:text-base">hr</span>
                </h4>
                <h5 className="text-[#212121] font-semibold text-base md:text-lg tracking-widest">
                  参加条件：なし
                </h5>
              </div>
              <p className="xl:max-w-80 text-[#212121] text-sm md:text-base tracking-widest leading-loose text-pretty">
                海の上の大型のアトラクションです。子供から大人まで楽しめるアクティビティが満載です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
