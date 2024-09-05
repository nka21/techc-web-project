export const Footer = () => {
  return (
    <section className="min-h-full w-full bg-slate-200">
      <div className="container mx-auto px-8 pt-24 pb-12 md:px-12 lg:px-20">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-between">
          {/* 連絡先 */}
          <div className="flex flex-col justify-between text-[#212121]">
            <p className="font-medium text-base tracking-widest lg:text-lg">
              お問合せ先
            </p>
            <p className="font-medium text-blue-700 text-xs tracking-widest underline lg:text-base">
              info@example.com
              <br />
              03-1234-5678
            </p>
          </div>
          {/* イベント情報 */}
          <div className="flex flex-col gap-1 text-[#212121]">
            <p className="font-medium text-base tracking-widest lg:text-lg">
              イベント開催日時：
              <span className="text-sm lg:text-base">
                2024年8月15日 10:00～21:00
              </span>
            </p>
            <p className="font-medium text-base tracking-widest lg:text-lg">
              イベント開催場所：
              <span className="text-sm lg:text-base">
                お台場海浜公園（東京都港区台場）
              </span>
            </p>
          </div>
          {/* SNS */}
          <div className="flex flex-row gap-4 text-[#212121]">
            <p className="font-medium text-base tracking-widest underline lg:text-lg">
              Facebook
            </p>
            <p className="font-medium text-base tracking-widest underline lg:text-lg">
              Twitter
            </p>
            <p className="font-medium text-base tracking-widest underline lg:text-lg">
              Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
