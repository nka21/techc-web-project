export const Footer = () => {
  return (
    <section className="min-h-full w-full bg-slate-200">
      <div className="container mx-auto pt-24 pb-12 px-8 md:px-12 lg:px-20">
        <div className="flex flex-col xl:justify-between xl:flex-row xl:items-center gap-12">
          {/* 連絡先 */}
          <div className="flex flex-col justify-between text-[#212121]">
            <p className="font-medium text-base lg:text-lg tracking-widest">
              お問合せ先
            </p>
            <p className="text-blue-700 font-medium text-xs lg:text-base tracking-widest underline">
              info@example.com
              <br />
              03-1234-5678
            </p>
          </div>
          {/* イベント情報 */}
          <div className="flex flex-col gap-1 text-[#212121]">
            <p className="font-medium text-base lg:text-lg tracking-widest">
              イベント開催日時：
              <span className="text-sm lg:text-base">
                2024年8月15日 10:00～21:00
              </span>
            </p>
            <p className="font-medium text-base lg:text-lg tracking-widest">
              イベント開催場所：
              <span className="text-sm lg:text-base">
                お台場海浜公園（東京都港区台場）
              </span>
            </p>
          </div>
          {/* SNS */}
          <div className="flex flex-row gap-4 text-[#212121]">
            <p className="font-medium text-base lg:text-lg tracking-widest underline">
              Facebook
            </p>
            <p className="font-medium text-base lg:text-lg tracking-widest underline">
              Twitter
            </p>
            <p className="font-medium text-base lg:text-lg tracking-widest underline">
              Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
