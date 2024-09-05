export const About = () => {
  return (
    <section className="min-h-full w-full">
      <div className="container mx-auto my-32 px-8 md:px-12 lg:px-20">
        <div className="flex justify-between sm:gap-x-8 md:gap-x-12">
          {/* 文章 */}
          <div className="flex min-h-[412px] max-w-3xl flex-col gap-y-12">
            {/* タイトル */}
            <div className="items-end gap-4 sm:flex">
              <h1 className="font-bold text-3xl text-primary tracking-widest md:text-5xl">
                ABOUT
              </h1>
              <h2 className="font-semibold text-primary text-xl tracking-widest md:text-2xl">
                海上花火フェスティバルって？
              </h2>
            </div>
            {/* 詳細 */}
            <div className="max-w-2xl">
              <p className="text-pretty font-medium text-[#212121] text-base leading-loose tracking-widest md:text-xl md:leading-loose md:tracking-widest">
                海上花火フェスティバルは、
                <br />
                迫力満点の花火ショーやライブ音楽、マリンスポーツ、美味しい屋台グルメが一堂に。
                <br />
                夏の夜空に咲く壮大な花火を楽しもう！
                <br />
                家族や友人と共に、心に残る特別なひとときをお過ごしください。
              </p>
            </div>
          </div>
          {/* SVG */}
          <div className="relative hidden min-h-[412px] min-w-[481px] xl:block">
            {/* 小 */}
            <div className="absolute top-16 right-12 h-[96px] w-[103px]">
              <svg
                viewBox="0 0 105 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>花火のイラスト</title>
                <path
                  d="M1.09428 33.1051C1.5098 31.9387 2.6686 31.2502 3.84841 31.3825C4.34009 31.4376 4.83134 31.4814 5.32526 31.4523C17.644 30.7281 32.9018 37.7791 49.1443 47.4351C34.2753 35.4078 20.6666 24.7683 4.66082 35.7021C3.51756 36.483 1.89777 36.2072 1.23274 34.9931C0.96557 34.5053 0.869057 33.9207 1.02838 33.3178C1.04718 33.2467 1.06911 33.1757 1.09428 33.1051Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M83.2541 4.25729C84.2694 4.90443 84.6873 6.13516 84.3488 7.2323L84.3106 7.35609C83.9714 8.45748 83.2327 9.38281 82.254 9.99186C68.2468 18.709 84.4642 29.8649 58.5405 47.8719C71.094 34.4436 81.4194 3.34636 82.988 4.10849C83.0784 4.15238 83.1672 4.20195 83.2541 4.25729Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M104.724 72.4225C104.202 73.5072 103.029 74.068 101.899 73.8623L101.772 73.8391C100.638 73.6331 99.6308 73.0097 98.9097 72.1106C88.5885 59.2419 79.4328 76.6634 58.4697 53.0693C73.2978 63.9358 105.411 70.4934 104.841 72.1409C104.808 72.2357 104.769 72.3298 104.724 72.4225Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M85.8594 71.6193C85.3219 71.9175 84.4549 71.8757 83.755 71.5523L83.6761 71.5158C82.9734 71.1913 82.4297 70.7361 82.1223 70.2383C77.7231 63.1132 68.5888 67.7368 59.1924 54.2305C66.8953 61.5743 86.6577 71.0363 85.9864 71.5376C85.9477 71.5665 85.9054 71.5938 85.8594 71.6193Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M90.0983 43.1988C89.9653 43.7988 89.3593 44.42 88.6532 44.7294L88.5735 44.7644C87.8647 45.0752 87.1633 45.1805 86.5867 45.0805C78.334 43.6503 75.7422 53.552 59.3975 51.6321C70.0039 50.7346 90.1908 42.2149 90.1213 43.0497C90.1173 43.0977 90.1096 43.1475 90.0983 43.1988Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M7.50506 80.4173C6.9126 79.3693 7.12182 78.0865 7.93605 77.2768L8.02789 77.1854C8.84476 76.3722 9.93167 75.902 11.0818 75.8237C27.5435 74.7028 18.4657 57.2406 49.8122 53.5117C32.421 59.4745 8.69691 82.0827 7.67 80.6735C7.61086 80.5923 7.55573 80.5069 7.50506 80.4173Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M73.707 80.2285C73.0981 80.6346 72.3165 80.5537 71.7967 80.0806L71.738 80.0272C71.216 79.5526 70.8904 78.8981 70.7985 78.1896C69.484 68.0488 59.3072 74.3241 55.8428 55.0742C60.1127 65.607 74.6649 79.4283 73.8551 80.1168C73.8084 80.1565 73.7591 80.1938 73.707 80.2285Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M55.2699 96.9076C54.3371 96.9153 53.552 96.2884 53.3167 95.4283L53.2901 95.3312C53.0535 94.4679 53.1512 93.5503 53.5373 92.7376C59.0628 81.1054 43.8242 80.6927 53.2708 57.9404C50.6554 72.0339 56.8476 96.7249 55.5056 96.892C55.4283 96.9017 55.3496 96.9069 55.2699 96.9076Z"
                  fill="#0077CA"
                />
                <path
                  d="M21.5096 81.0114C20.9087 80.2983 20.8907 79.294 21.4033 78.5641L21.4611 78.4818C21.9752 77.7489 22.7444 77.2387 23.6167 77.0175C36.1026 73.8506 26.6995 61.8563 50.2531 54.6143C37.7277 61.5915 22.6568 82.1095 21.672 81.183C21.6152 81.1296 21.561 81.0724 21.5096 81.0114Z"
                  fill="#0077CA"
                />
                <path
                  d="M29.0853 70.5978C28.7052 70.2428 28.695 69.7088 29.0207 69.2989L29.0574 69.2527C29.3841 68.8412 29.8722 68.5378 30.4254 68.384C38.3426 66.1822 32.3966 60.1832 47.3333 55.3545C39.3866 59.587 29.8111 71.1352 29.188 70.6824C29.1521 70.6563 29.1178 70.6281 29.0853 70.5978Z"
                  fill="#0077CA"
                />
                <path
                  d="M40.1576 78.1865C39.677 77.9877 39.4797 77.4913 39.6405 76.9932L39.6586 76.937C39.8198 76.437 40.1701 75.9815 40.6339 75.6431C47.2722 70.8004 39.5965 67.273 51.883 57.5049C45.931 64.2591 41.026 78.4346 40.2835 78.2297C40.2407 78.2179 40.1987 78.2035 40.1576 78.1865Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M7.7651 44.542L8.97251 48.2568H12.8798L9.71875 50.5526L10.9262 54.2674L7.7651 51.9716L4.60403 54.2674L5.81144 50.5526L2.65039 48.2568H6.55768L7.7651 44.542Z"
                  fill="#0077CA"
                />
                <path
                  d="M61.6098 0.0195312L62.8172 3.73431H66.7246L63.5635 6.03016L64.7709 9.74495L61.6098 7.44908L58.4488 9.74495L59.6562 6.03016L56.4951 3.73431H60.4024L61.6098 0.0195312Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M90.1943 39.8906L91.4017 43.6054H95.309L92.1479 45.9013L93.3554 49.616L90.1943 47.3202L87.0332 49.616L88.2406 45.9013L85.0796 43.6054H88.9869L90.1943 39.8906Z"
                  fill="#0077CA"
                />
                <path
                  d="M32.3608 80.4268L33.5682 84.1415H37.4755L34.3144 86.4374L35.5219 90.1522L32.3608 87.8563L29.1997 90.1522L30.4071 86.4374L27.2461 84.1415H31.1534L32.3608 80.4268Z"
                  fill="#0077CA"
                />
                <path
                  d="M54.2978 39.8906L55.5052 43.6054H59.4125L56.2515 45.9013L57.4589 49.616L54.2978 47.3202L51.1367 49.616L52.3442 45.9013L49.1831 43.6054H53.0904L54.2978 39.8906Z"
                  fill="#0077CA"
                />
                <path
                  d="M84.4643 0.0195312L85.6717 3.73431H89.579L86.418 6.03016L87.6254 9.74495L84.4643 7.44909L81.3032 9.74495L82.5107 6.03016L79.3496 3.73431H83.2569L84.4643 0.0195312Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M5.71735 73.4375L7.24854 77.031L11.1405 76.6858L8.19487 79.252L9.72606 82.8455L6.37434 80.838L3.42867 83.4042L4.30287 79.5973L0.951172 77.5897L4.84315 77.2444L5.71735 73.4375Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M39.1431 4.80524C39.8479 4.45837 40.6399 4.69236 41.0884 5.32083L41.1391 5.39172C41.5895 6.02228 41.8035 6.82002 41.766 7.63589C41.2285 19.3133 52.9122 14.0934 52.893 36.4372C50.4512 23.7781 38.0041 5.53288 38.9692 4.90419C39.0248 4.86798 39.0828 4.83491 39.1431 4.80524Z"
                  fill="#0077CA"
                />
                <path
                  d="M28.9535 22.1141C29.2659 21.7241 29.7786 21.6704 30.1973 21.9456L30.2445 21.9766C30.6649 22.2527 30.9936 22.6908 31.1834 23.203C33.9005 30.534 39.2168 24.397 44.9916 38.1721C40.3201 30.9806 28.4919 22.8472 28.8799 22.2185C28.9023 22.1823 28.9268 22.1474 28.9535 22.1141Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M19.9603 43.4226C20.0031 42.9249 20.3994 42.5953 20.9004 42.5913L20.957 42.5909C21.4599 42.5867 21.9768 42.7682 22.4195 43.0884C28.7552 47.6718 29.7609 39.616 42.2221 47.8562C34.3395 44.4751 19.9844 44.2885 19.9573 43.5503C19.9557 43.5078 19.9567 43.4652 19.9603 43.4226Z"
                  fill="#E6E6E6"
                />
              </svg>
            </div>
            {/* 中 */}
            <div className="absolute top-0 left-[25px] h-[148px] w-[159px]">
              <svg
                viewBox="0 0 161 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>花火のイラスト</title>
                <g id="Group">
                  <path
                    id="Vector"
                    d="M1.16333 50.8516C1.80197 49.0589 3.58296 48.0008 5.39628 48.2041C6.15197 48.2888 6.907 48.356 7.66612 48.3114C26.5995 47.1983 50.05 58.0353 75.014 72.8761C52.1609 54.3907 31.245 38.0384 6.6449 54.843C4.88776 56.0433 2.39823 55.6194 1.3761 53.7533C0.965472 53.0037 0.817159 52.1052 1.06204 51.1785C1.09093 51.0692 1.12465 50.9601 1.16333 50.8516Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_2"
                    d="M127.439 6.51267C128.999 7.50729 129.641 9.39886 129.121 11.0851L129.062 11.2754C128.541 12.9682 127.406 14.3904 125.902 15.3264C104.373 28.7243 129.299 45.8703 89.4551 73.5462C108.749 52.9075 124.619 5.11262 127.03 6.28396C127.169 6.35143 127.305 6.42761 127.439 6.51267Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_3"
                    d="M160.437 111.281C159.634 112.948 157.832 113.81 156.095 113.493L155.899 113.458C154.156 113.141 152.608 112.183 151.5 110.801C135.637 91.0226 121.565 117.799 89.3457 81.5356C112.136 98.2369 161.493 108.316 160.616 110.848C160.565 110.993 160.506 111.138 160.437 111.281Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_4"
                    d="M131.443 110.045C130.617 110.503 129.284 110.439 128.209 109.942L128.087 109.886C127.007 109.387 126.172 108.687 125.699 107.922C118.938 96.9713 104.899 104.078 90.457 83.319C102.296 94.6061 132.67 109.149 131.638 109.919C131.579 109.964 131.514 110.006 131.443 110.045Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_5"
                    d="M137.959 66.365C137.755 67.2873 136.823 68.242 135.738 68.7176L135.616 68.7713C134.526 69.249 133.448 69.4108 132.562 69.2572C119.878 67.059 115.895 82.2774 90.7734 79.3267C107.075 77.9473 138.101 64.8529 137.994 66.1358C137.988 66.2097 137.977 66.2862 137.959 66.365Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_6"
                    d="M11.0172 123.567C10.1066 121.956 10.4282 119.985 11.6796 118.74L11.8208 118.6C13.0763 117.35 14.7468 116.627 16.5145 116.507C41.8153 114.784 27.8632 87.9457 76.0412 82.2146C49.3117 91.379 12.849 126.127 11.2707 123.961C11.1798 123.836 11.0951 123.705 11.0172 123.567Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_7"
                    d="M112.765 123.278C111.829 123.902 110.628 123.778 109.829 123.05L109.739 122.968C108.937 122.239 108.436 121.233 108.295 120.144C106.275 104.558 90.6333 114.203 85.3086 84.6168C91.8713 100.805 114.237 122.048 112.993 123.106C112.921 123.167 112.845 123.224 112.765 123.278Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_8"
                    d="M84.428 148.913C82.9944 148.925 81.7877 147.961 81.4261 146.639L81.3852 146.49C81.0215 145.163 81.1717 143.753 81.765 142.504C90.2575 124.626 66.8365 123.991 81.3555 89.0223C77.3358 110.683 86.853 148.632 84.7903 148.889C84.6714 148.904 84.5506 148.912 84.428 148.913Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_9"
                    d="M32.5399 124.481C31.6163 123.385 31.5887 121.841 32.3765 120.719L32.4653 120.593C33.2554 119.466 34.4377 118.682 35.7785 118.342C54.9687 113.475 40.5164 95.0401 76.7174 83.9094C57.4663 94.6331 34.3032 126.168 32.7895 124.744C32.7023 124.662 32.6189 124.574 32.5399 124.481Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_10"
                    d="M44.1841 108.476C43.6 107.93 43.5843 107.109 44.0848 106.479L44.1413 106.408C44.6434 105.776 45.3936 105.31 46.2438 105.073C58.4122 101.689 49.2734 92.469 72.2305 85.0475C60.0168 91.5526 45.2997 109.302 44.342 108.606C44.2868 108.566 44.2341 108.522 44.1841 108.476Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_11"
                    d="M61.2016 120.139C60.463 119.834 60.1597 119.071 60.4069 118.305L60.4347 118.219C60.6825 117.451 61.2209 116.75 61.9337 116.23C72.1364 108.787 60.3392 103.366 79.223 88.3528C70.0751 98.7337 62.5364 120.521 61.3951 120.206C61.3294 120.188 61.2648 120.166 61.2016 120.139Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_12"
                    d="M11.4158 68.4294L13.2715 74.1389H19.2768L14.4184 77.6675L16.2742 83.377L11.4158 79.8483L6.55735 83.377L8.41309 77.6675L3.55469 74.1389H9.56001L11.4158 68.4294Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_13"
                    d="M94.1736 0L96.0293 5.70944H102.035L97.1762 9.23807L99.032 14.9475L94.1736 11.4189L89.3151 14.9475L91.1709 9.23807L86.3125 5.70944H92.3178L94.1736 0Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_14"
                    d="M138.105 61.2802L139.961 66.9896H145.966L141.108 70.5182L142.964 76.2277L138.105 72.699L133.247 76.2277L135.103 70.5182L130.244 66.9896H136.249L138.105 61.2802Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_15"
                    d="M49.2185 123.582L51.0742 129.291H57.0796L52.2212 132.82L54.0769 138.529L49.2185 135L44.3601 138.529L46.2158 132.82L41.3574 129.291H47.3627L49.2185 123.582Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_16"
                    d="M82.9353 61.2802L84.791 66.9896H90.7964L85.938 70.5182L87.7937 76.2277L82.9353 72.699L78.0769 76.2277L79.9326 70.5182L75.0742 66.9896H81.0795L82.9353 61.2802Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_17"
                    d="M129.299 0L131.154 5.70944H137.16L132.301 9.23807L134.157 14.9475L129.299 11.4189L124.44 14.9475L126.296 9.23807L121.438 5.70944H127.443L129.299 0Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_18"
                    d="M8.26878 112.84L10.6221 118.363L16.604 117.832L12.0766 121.776L14.43 127.3L9.27854 124.214L4.75118 128.158L6.09478 122.307L0.943359 119.222L6.92517 118.691L8.26878 112.84Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_19"
                    d="M59.642 7.35527C60.7252 6.82217 61.9426 7.18179 62.6319 8.14771L62.7097 8.25668C63.402 9.22583 63.731 10.4519 63.6732 11.7059C62.8472 29.6535 80.8044 21.6308 80.7749 55.9722C77.022 36.5156 57.8915 8.47362 59.3748 7.50737C59.4602 7.45171 59.5493 7.40087 59.642 7.35527Z"
                    fill="#0077CA"
                  />
                  <path
                    id="Vector_20"
                    d="M43.9829 33.958C44.4631 33.3587 45.251 33.276 45.8945 33.6991L45.9671 33.7468C46.6132 34.171 47.1184 34.8444 47.4101 35.6317C51.5861 46.8991 59.7571 37.4667 68.6327 58.6384C61.4527 47.5855 43.2735 35.0847 43.8698 34.1185C43.9041 34.0628 43.9418 34.0092 43.9829 33.958Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_21"
                    d="M30.1601 66.7086C30.2259 65.9436 30.8349 65.437 31.605 65.431L31.6919 65.4303C32.4649 65.4238 33.2594 65.7028 33.9397 66.195C43.6774 73.2394 45.223 60.858 64.3754 73.5228C52.2602 68.3262 30.1971 68.0395 30.1554 66.9049C30.153 66.8396 30.1545 66.774 30.1601 66.7086Z"
                    fill="#E6E6E6"
                  />
                </g>
              </svg>
            </div>
            {/* 大 */}
            <div className="absolute bottom-0 left-[135px] h-[186px] w-[200px]">
              <svg
                viewBox="0 0 200 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>花火のイラスト</title>
                <path
                  d="M0.275501 63.69C1.07538 61.4448 3.30602 60.1195 5.57715 60.3741C6.52363 60.4802 7.46929 60.5645 8.42006 60.5086C32.1335 59.1144 61.5046 72.6875 92.7712 91.2751C64.1485 68.1227 37.9519 47.6419 7.14101 68.6892C4.94025 70.1926 1.82218 69.6616 0.541996 67.3244C0.0276954 66.3855 -0.158062 65.2602 0.148639 64.0996C0.184825 63.9626 0.227059 63.826 0.275501 63.69Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M158.433 8.15699C160.387 9.40272 161.192 11.7719 160.54 13.8838L160.466 14.1221C159.813 16.2423 158.391 18.0236 156.508 19.196C129.544 35.9764 160.762 57.4513 110.859 92.1145C135.025 66.2652 154.901 6.40346 157.921 7.87054C158.095 7.95504 158.265 8.05045 158.433 8.15699Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M199.762 139.376C198.757 141.464 196.499 142.543 194.324 142.147L194.079 142.103C191.895 141.706 189.957 140.506 188.569 138.775C168.701 114.003 151.076 147.539 110.723 102.121C139.267 123.039 201.085 135.662 199.986 138.833C199.923 139.016 199.848 139.197 199.762 139.376Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M163.447 137.828C162.412 138.402 160.743 138.321 159.396 137.699L159.244 137.628C157.891 137.004 156.845 136.128 156.253 135.169C147.785 121.454 130.201 130.354 112.113 104.354C126.941 118.491 164.984 136.706 163.691 137.671C163.617 137.726 163.535 137.779 163.447 137.828Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M171.607 83.1203C171.351 84.2753 170.184 85.4711 168.825 86.0667L168.671 86.134C167.307 86.7324 165.957 86.935 164.847 86.7426C148.96 83.9894 143.971 103.05 112.508 99.3544C132.925 97.6267 171.785 81.2263 171.651 82.8332C171.643 82.9257 171.628 83.0215 171.607 83.1203Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M12.6155 154.764C11.4751 152.747 11.8778 150.278 13.4452 148.719L13.622 148.543C15.1945 146.978 17.2867 146.073 19.5007 145.922C51.1892 143.764 33.7147 110.149 94.0562 102.971C60.5784 114.45 14.9098 157.97 12.933 155.258C12.8192 155.101 12.7131 154.937 12.6155 154.764Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M140.054 154.402C138.882 155.184 137.378 155.028 136.377 154.117L136.264 154.014C135.259 153.101 134.632 151.841 134.456 150.477C131.925 130.956 112.335 143.036 105.666 105.98C113.886 126.256 141.898 152.861 140.34 154.187C140.25 154.263 140.155 154.335 140.054 154.402Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M104.563 186.509C102.768 186.524 101.257 185.317 100.804 183.661L100.752 183.475C100.297 181.813 100.485 180.046 101.228 178.482C111.865 156.09 82.5306 155.296 100.715 111.498C95.6806 138.628 107.601 186.157 105.017 186.479C104.868 186.498 104.717 186.508 104.563 186.509Z"
                  fill="#0077CA"
                />
                <path
                  d="M39.5747 155.908C38.4179 154.536 38.3833 152.602 39.3699 151.197L39.4812 151.039C40.4708 149.628 41.9516 148.646 43.6308 148.22C67.666 142.124 49.565 119.035 94.9056 105.094C70.7942 118.525 41.7831 158.022 39.8872 156.239C39.778 156.136 39.6736 156.026 39.5747 155.908Z"
                  fill="#0077CA"
                />
                <path
                  d="M54.1571 135.862C53.4254 135.179 53.4058 134.151 54.0327 133.362L54.1034 133.273C54.7322 132.481 55.6719 131.897 56.7367 131.601C71.9773 127.363 60.5313 115.815 89.2843 106.519C73.987 114.667 55.5543 136.897 54.3547 136.025C54.2857 135.975 54.2196 135.921 54.1571 135.862Z"
                  fill="#0077CA"
                />
                <path
                  d="M75.4724 150.471C74.5473 150.088 74.1675 149.133 74.4771 148.174L74.512 148.066C74.8222 147.103 75.4966 146.226 76.3894 145.575C89.1679 136.253 74.3923 129.463 98.0437 110.659C86.5863 123.661 77.1443 150.949 75.7148 150.554C75.6325 150.531 75.5516 150.504 75.4724 150.471Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M13.1173 85.706L15.4415 92.8569H22.963L16.878 97.2764L19.2023 104.427L13.1173 100.008L7.03223 104.427L9.3565 97.2764L3.27148 92.8569H10.793L13.1173 85.706Z"
                  fill="#0077CA"
                />
                <path
                  d="M116.768 0L119.092 7.15091H126.613L120.528 11.5704L122.853 18.7213L116.768 14.3018L110.683 18.7213L113.007 11.5704L106.922 7.15091H114.443L116.768 0Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M171.791 76.7516L174.115 83.9025H181.637L175.552 88.322L177.876 95.4729L171.791 91.0534L165.706 95.4729L168.03 88.322L161.945 83.9025H169.467L171.791 76.7516Z"
                  fill="#0077CA"
                />
                <path
                  d="M60.463 154.782L62.7872 161.933H70.3087L64.2237 166.353L66.548 173.503L60.463 169.084L54.3779 173.503L56.7022 166.353L50.6172 161.933H58.1387L60.463 154.782Z"
                  fill="#0077CA"
                />
                <path
                  d="M102.691 76.7516L105.016 83.9025H112.537L106.452 88.322L108.776 95.4729L102.691 91.0534L96.6064 95.4729L98.9307 88.322L92.8457 83.9025H100.367L102.691 76.7516Z"
                  fill="#0077CA"
                />
                <path
                  d="M160.762 0L163.086 7.15091H170.608L164.523 11.5704L166.847 18.7213L160.762 14.3018L154.677 18.7213L157.001 11.5704L150.916 7.15091H158.438L160.762 0Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M9.17487 141.328L12.1224 148.246L19.6144 147.581L13.9441 152.521L16.8916 159.439L10.4396 155.574L4.76919 160.514L6.45201 153.186L0 149.321L7.49205 148.657L9.17487 141.328Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M73.5191 9.21213C74.8759 8.54443 76.4006 8.99484 77.264 10.2046L77.3614 10.3411C78.2285 11.5549 78.6405 13.0906 78.5682 14.6611C77.5336 37.14 100.024 27.0918 99.9875 70.1033C95.2871 45.7346 71.3267 10.6128 73.1845 9.40262C73.2915 9.33291 73.4031 9.26924 73.5191 9.21213Z"
                  fill="#0077CA"
                />
                <path
                  d="M53.9057 42.5314C54.5071 41.7808 55.4939 41.6773 56.2999 42.2071L56.3908 42.2669C57.2 42.7982 57.8328 43.6416 58.1982 44.6276C63.4285 58.7397 73.6624 46.926 84.7788 73.4428C75.7861 59.5994 53.0171 43.9426 53.764 42.7324C53.8071 42.6627 53.8543 42.5956 53.9057 42.5314Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M36.5932 83.5507C36.6757 82.5925 37.4384 81.9581 38.403 81.9505L38.5118 81.9496C39.4799 81.9415 40.4749 82.2909 41.3271 82.9073C53.5232 91.7303 55.4591 76.2229 79.4469 92.0853C64.2729 85.5767 36.6395 85.2175 36.5873 83.7965C36.5843 83.7147 36.5862 83.6326 36.5932 83.5507Z"
                  fill="#E6E6E6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
