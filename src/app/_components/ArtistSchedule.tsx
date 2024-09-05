import Image from "next/image";

// 画像のインポート
import super_beaver from "@/assets/artists/super_beaver.jpg";
import the_oral_cigarettes from "@/assets/artists/the_oral_cigarettes.jpg";
import cold_rain from "@/assets/artists/cold_rain.jpg";
import saucy_dog from "@/assets/artists/saucy_dog.jpg";
import hey_smity from "@/assets/artists/hey_smity.jpg";
import ano from "@/assets/artists/ano.jpg";

export const ArtistSchedule = () => {
  return (
    <section className="min-h-full w-full">
      <div className="container mx-auto my-32 px-8 md:px-12 lg:px-20">
        <div className="">
          <div className="flex flex-col gap-12">
            {/* セクションのタイトル */}
            <div className="items-end gap-x-4 sm:flex">
              <h1 className="font-bold text-3xl text-primary tracking-widest md:text-5xl">
                ARTIST
              </h1>
              <h2 className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
                出演アーティスト
              </h2>
            </div>
            <div className="flex flex-col gap-32 xl:flex-row xl:justify-between">
              {/* 午前の部 */}
              <div className="flex min-w-[480px] flex-col">
                <div className="items-end gap-x-4 sm:flex ">
                  <h1 className="font-bold text-3xl text-primary tracking-widest md:text-3xl">
                    午前の部
                  </h1>
                  <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                    11:00 - 14:00
                  </h2>
                </div>
                <div className="mb-6 border-primary border-b pb-6" />
                <div className="flex gap-12">
                  <div className="w-36">
                    <Image src={super_beaver} alt="super_beaverの画像" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                      SUPER BEAVER
                    </h2>
                    <p className="font-medium text-lg text-primary tracking-widest md:text-xl">
                      11:00 - 11:45
                    </p>
                  </div>
                </div>
                <div className="mb-6 border-primary border-b pb-6" />
                <div className="flex gap-12">
                  <div className="w-36">
                    <Image
                      src={the_oral_cigarettes}
                      alt="the_oral_cigarettesの画像"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                      THE ORAL CIGARETTES
                    </h2>
                    <p className="font-medium text-lg text-primary tracking-widest md:text-xl">
                      11:45 - 12:30
                    </p>
                  </div>
                </div>
                <div className="mb-6 border-primary border-b pb-6" />
                <div className="flex gap-12">
                  <div className="w-36">
                    <Image src={cold_rain} alt="cold_rainの画像" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                      COLD RAIN
                    </h2>
                    <p className="font-medium text-lg text-primary tracking-widest md:text-xl">
                      12:30 - 13:15
                    </p>
                  </div>
                </div>
              </div>
              {/* 午後の部 */}
              <div className="flex min-w-[480px] flex-col">
                <div className="items-end gap-x-4 sm:flex ">
                  <h1 className="font-bold text-3xl text-primary tracking-widest md:text-3xl">
                    午後の部
                  </h1>
                  <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                    15:00 - 18:00
                  </h2>
                </div>
                <div className="mb-6 border-primary border-b pb-6" />
                <div className="flex gap-12">
                  <div className="w-36">
                    <Image src={saucy_dog} alt="saucy_dogの画像" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                      saucy dog
                    </h2>
                    <p className="font-medium text-lg text-primary tracking-widest md:text-xl">
                      15:00 - 15:45
                    </p>
                  </div>
                </div>
                <div className="mb-6 border-primary border-b pb-6" />
                <div className="flex gap-12">
                  <div className="w-36">
                    <Image src={hey_smity} alt="hey_smityの画像" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                      HEY-SMITY
                    </h2>
                    <p className="font-medium text-lg text-primary tracking-widest md:text-xl">
                      15:45 - 16:30
                    </p>
                  </div>
                </div>
                <div className="mb-6 border-primary border-b pb-6" />
                <div className="flex gap-12">
                  <div className="w-36">
                    <Image src={ano} alt="anoの画像" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h2 className="font-semibold text-lg text-primary tracking-widest md:text-xl">
                      ano
                    </h2>
                    <p className="font-medium text-lg text-primary tracking-widest md:text-xl">
                      16:30 - 17:15
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-medium text-[#212121] text-base leading-relaxed tracking-widest">
                ※ 物販は会場限定販売です。
                <br />
                記念品や限定グッズを多数ご用意しておりますので、この機会にぜひお求めください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
