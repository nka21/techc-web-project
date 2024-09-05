export const Notes = () => {
  return (
    <section className="min-h-full w-full">
      <div className="container mx-auto my-32 px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-8">
          {/* タイトル */}
          <div className="items-end gap-x-4 sm:flex">
            <h1 className="font-bold text-3xl text-primary tracking-widest md:text-5xl">
              NOTES
            </h1>
            <h2 className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
              注意事項
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-pretty pl-2 text-[#212121] text-base lg:gap-4 lg:text-xl">
            <li>油などのごみを設置のゴミ箱に入れるのはご遠慮ください。</li>
            <li>油屋キッチンペーパー、ゴミ袋などの消耗品はご持参ください。</li>
            <li>飲食可能エリア以外での飲食、飲酒はご遠慮ください。</li>
            <li>飲酒後に海に入るのは禁止です。</li>
            <li>アーティストの出待ちは禁止です。</li>
          </div>
        </div>
      </div>
    </section>
  );
};
