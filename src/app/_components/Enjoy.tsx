import Image from "next/image";
import enjoy01 from "@/assets/enjoy/enjoy01.png";

const Enjoy01 = () => {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-[#212121] border-[3px] bg-white p-4 sm:h-72 sm:w-72 sm:p-6 md:h-80 md:w-80 md:p-8 lg:h-96 lg:w-96">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <h1 className="text-center font-bold text-primary text-xl leading-relaxed tracking-widest sm:text-2xl md:text-3xl lg:text-4xl">
          充実した
          <br />
          マリンスポーツ
        </h1>
        <p className="text-center text-[#212121] text-xs leading-relaxed tracking-widest sm:text-sm md:text-base lg:text-lg">
          豊富なマリンスポーツで遊べる！
          <br />
          お友達は勿論、お子様連れでも楽しめます。
        </p>
      </div>
      <div className="absolute top-0 left-4 flex h-12 w-12 items-center justify-center rounded-full sm:top-0 sm:left-6 sm:h-16 sm:w-16">
        <span className="font-bold text-5xl text-primary tracking-wide sm:text-6xl md:text-7xl">
          01
        </span>
      </div>
      <div className="-top-64 -right-72 absolute hidden lg:block">
        <Image src={enjoy01} alt="enjoy01" />
      </div>
    </div>
  );
};
const Enjoy02 = () => {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-[#212121] border-[3px] bg-white p-4 sm:h-72 sm:w-72 sm:p-6 md:h-80 md:w-80 md:p-8 lg:h-96 lg:w-96">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <h1 className="text-center font-bold text-primary text-xl leading-relaxed tracking-widest sm:text-2xl md:text-3xl lg:text-4xl">
          海で楽しめる
          <br />
          ライブ
        </h1>
        <p className="text-center text-[#212121] text-xs leading-relaxed tracking-widest sm:text-sm md:text-base lg:text-lg">
          浜辺で食事をしながら、
          <br />
          有名アーティストの曲を楽しむことができます。
        </p>
      </div>
      <div className="absolute bottom-0 left-4 flex h-12 w-12 items-center justify-center rounded-full sm:bottom-0 sm:left-6 sm:h-16 sm:w-16">
        <span className="font-bold text-5xl text-primary tracking-wide sm:text-6xl md:text-7xl">
          02
        </span>
      </div>
    </div>
  );
};
const Enjoy03 = () => {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-[#212121] border-[3px] bg-white p-4 sm:h-72 sm:w-72 sm:p-6 md:h-80 md:w-80 md:p-8 lg:h-96 lg:w-96">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <h1 className="text-center font-bold text-primary text-xl leading-relaxed tracking-widest sm:text-2xl md:text-3xl lg:text-4xl">
          フィナーレの
          <br />
          海上花火
        </h1>
        <p className="text-center text-[#212121] text-xs leading-relaxed tracking-widest sm:text-sm md:text-base lg:text-lg">
          水面に反射する綺麗な花火をで、
          <br /> 今日１日を締めくくりましょう。
        </p>
      </div>
      <div className="-bottom-2 absolute right-4 flex h-12 w-12 items-center justify-center rounded-full sm:right-6 sm:bottom-0 sm:h-16 sm:w-16">
        <span className="font-bold text-5xl text-primary tracking-wide sm:text-6xl md:text-7xl">
          03
        </span>
      </div>
    </div>
  );
};

export const Enjoy = () => {
  return (
    <section className="relative min-h-full md:min-h-screen w-full">
      <div className="container mx-auto my-32 px-8 md:px-12 lg:px-20">
        <div className="flex justify-between sm:gap-x-8 md:gap-x-12">
          {/* 文章 */}
          <div className="relative z-10 flex min-h-[412px] max-w-3xl flex-col items-start gap-y-12">
            {/* タイトル */}
            <div className="items-end gap-x-4 sm:flex">
              <h1 className="font-bold text-3xl text-primary tracking-widest md:text-5xl">
                ENJOY
              </h1>
              <h2 className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
                楽しめること
              </h2>
            </div>
            {/* 詳細 */}
            <div className="max-w-2xl">
              <p className="text-wrap font-medium text-[#212121] text-base leading-loose tracking-widest md:text-xl md:leading-loose md:tracking-widest">
                海上花火フェスティバルは、
                <br />
                主に３つの観点で楽しむことができます。
                <br />
                まさに、唯一無二の夏フェスです。
              </p>
            </div>
          </div>
          {/* 装飾SVG */}
          <div className="absolute right-0 bottom-0 left-0 z-0">
            <div>
              <svg
                className="h-full w-full"
                viewBox="0 0 1440 388"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>波</title>
                <g clip-path="url(#clip0_180_37)">
                  <path
                    d="M800.832 212.587C705.197 199.321 613.862 165.282 523.219 132.011C432.557 98.7392 340.685 65.7751 244.762 54.8319C158.746 45.0406 74.7648 64.8344 2.2413e-05 106.976L1.76497e-05 52.4897C11.52 52.5089 22.5408 43.0823 34.3872 40.1257C44.7744 37.5339 55.6416 40.0489 66.336 40.6633C77.0112 41.2968 89.1456 39.2618 95.3088 30.5072C97.248 27.781 98.4192 24.594 100.051 21.6758C107.52 8.40947 125.491 2.20829 139.546 8.08309C144.173 10.0222 148.339 13.0555 153.12 14.5338C164.928 18.2392 177.197 11.9612 188.794 7.67993C234.874 -9.34931 286.406 4.60812 331.814 23.3652C346.195 29.3168 360.518 35.7676 375.763 38.8394C403.162 44.3302 431.693 38.5322 459.36 42.4295C497.088 47.7091 528.538 78.907 552.845 108.223C564.576 122.354 582.01 131.531 600.25 133.489C604.454 133.93 607.814 130.052 606.682 125.963C606.547 125.445 606.47 124.907 606.47 124.389C606.47 121.24 608.986 118.475 612.326 118.418C636.634 117.976 661.498 118.687 683.117 129.419C697.517 136.58 709.632 147.849 724.186 154.703C757.651 170.446 797.011 160.463 833.818 164.053C853.594 165.992 873.062 171.944 892.896 171.118C924.73 169.832 954.144 151.305 985.997 151.132C1001.43 151.056 1016.64 155.337 1032.08 155.567C1048.63 155.817 1064.85 151.401 1080.83 147.024C1142.15 130.225 1205.05 112.677 1256.24 74.952C1263.57 69.5572 1270.79 63.6632 1279.41 60.7066C1288.01 57.75 1298.55 58.3835 1304.95 64.8535C1307.77 67.7141 1309.19 71.8226 1309.19 75.8351C1309.19 82.5931 1315.1 87.8535 1321.84 87.3543C1351.43 85.1273 1385.01 76.7759 1410.91 64.1623C1420.26 59.6122 1429.96 55.7341 1440 53.0847L1440 99.6031C1375.91 103.961 1311.57 109.625 1250.19 128.228C1202.78 142.57 1158.01 164.399 1111.35 180.948C1012.36 216.062 904.877 227.025 800.832 212.587Z"
                    fill="white"
                  />
                  <path
                    d="M3.21865e-05 387.929L7.62478e-06 106.975C74.7648 64.8343 158.746 45.0404 244.762 54.8317C340.685 65.775 432.557 98.7391 523.219 132.01C613.862 165.282 705.197 199.321 800.832 212.587C904.877 227.025 1012.36 216.062 1111.35 180.948C1158.01 164.399 1202.78 142.57 1250.19 128.228C1311.57 109.625 1375.91 103.961 1440 99.603L1440 387.929L3.21865e-05 387.929Z"
                    fill="#0077CA"
                    fill-opacity="0.09"
                  />
                  <path
                    d="M1280.6 237.353C1241.03 248.085 1200.73 256.11 1160.04 261.352C1146.12 263.137 1132.01 264.635 1118.75 269.242C1105.92 273.696 1094.28 280.896 1082.32 287.27C1040.85 309.368 994.31 321.885 947.347 323.517C940.8 323.747 933.984 323.824 928.09 326.666C922.176 329.507 917.453 336.035 919.008 342.408C920.813 349.742 929.299 352.929 936.672 354.523C1011.34 370.727 1087.74 342.639 1163.9 336.649C1185.48 334.94 1207.16 335.036 1228.8 335.151C1267.8 335.343 1306.79 335.631 1345.79 335.977C1359.21 336.092 1372.67 336.226 1385.95 338.012C1404.02 340.431 1422.05 345.864 1440 348.629L1440 240.118C1408.74 237.123 1377.47 224.298 1345.67 224.663C1323.49 224.913 1301.99 231.574 1280.58 237.372"
                    fill="#7ECEF4"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M117.197 353.889C171.379 353.16 226.809 359.207 278.822 344.079C301.901 337.359 323.731 326.608 347.078 320.925C387.917 310.98 430.886 317.105 471.898 326.262C512.909 335.42 553.594 347.611 595.565 349.858C637.536 352.085 682.138 343.061 713.222 314.801C717.85 310.596 722.342 305.605 723.264 299.423C724.186 293.241 718.771 284.352 712.531 284.409C694.848 308.849 666.662 325.399 636.71 328.912C609.734 332.08 582.662 325.168 556.685 317.258C521.683 306.603 487.238 294.066 453.6 279.706C438.029 273.063 422.592 266.017 406.406 261.121C380.179 253.173 352.608 250.984 325.306 248.853C310.944 247.74 294.873 247.145 284.006 256.571C274.656 264.692 271.949 277.901 265.613 288.537C257.05 302.936 241.805 312.363 225.811 317.316C209.818 322.269 192.883 323.229 176.16 324.151C116.794 327.434 57.8112 336.092 0.0191807 349.954L0.0191822 366.445C38.592 358.689 77.8751 354.465 117.216 353.928"
                    fill="#7ECEF4"
                    fill-opacity="0.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_180_37">
                    <rect
                      width="1440"
                      height="387.928"
                      fill="white"
                      transform="translate(1440 387.929) rotate(180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-72 right-1/3 xl:top-24 xl:right-80">
        <div className="relative flex justify-center">
          <Enjoy01 />
        </div>
        <div className="-left-1/2 absolute top-48 flex justify-center gap-2 md:top-64 lg:top-72 xl:top-72">
          <Enjoy02 />
          <Enjoy03 />
        </div>
      </div>
    </section>
  );
};
