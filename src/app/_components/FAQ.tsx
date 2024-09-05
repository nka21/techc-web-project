"use client";

import React, { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const QuestionIcon = () => {
  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary sm:h-12 sm:w-12 md:h-16 md:w-16">
      <p className="font-medium text-primary text-xl sm:text-2xl md:text-3xl">
        Q
      </p>
    </div>
  );
};

const AnswerIcon = () => {
  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary sm:h-12 sm:w-12 md:h-16 md:w-16">
      <p className="font-medium text-white text-xl sm:text-2xl md:text-3xl">
        A
      </p>
    </div>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-grow items-center gap-3 py-2 sm:gap-4 md:gap-6 lg:gap-10">
          <QuestionIcon />
          <p className="text-pretty pr-4 text-[#212121] text-sm sm:text-base lg:text-xl">
            {question}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0077c9] sm:h-10 sm:w-10 md:h-[50px] md:w-[50px]"
        >
          {isOpen ? (
            <LuMinus color="white" size={20} />
          ) : (
            <LuPlus color="white" size={20} />
          )}
        </button>
      </div>
      {isOpen && answer && (
        <div className="mt-4 rounded-xl border-2 border-primary p-3 sm:p-4 md:p-6">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            <AnswerIcon />
            <p className="text-pretty text-[#212121] text-sm sm:text-base lg:text-xl">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  const faqItems = [
    {
      id: "1",
      question: "雨天の場合、イベントはどうなりますか？",
      answer:
        "荒天の場合は延期または中止となる可能性があります。最新情報は公式ウェブサイトやSNSで随時お知らせいたします。",
    },
    {
      id: "2",
      question: "駐車場はありますか？",
      answer:
        "イベント会場には駐車場がございますが、数に限りがあります。公共交通機関の利用を推奨いたします。",
    },
    {
      id: "3",
      question: "イベントにはチケットが必要ですか？",
      answer:
        "チケットは必要なく、無料で入場できます。ただし、会場内での特定のアクティビティやサービスには別途料金がかかる場合がありますので、ご注意ください。",
    },
    {
      id: "4",
      question: "マリンスポーツの参加方法を教えてください。",
      answer:
        "マリンスポーツに参加するには、会場内の特設ブースで事前に申し込みが必要です。",
    },
    {
      id: "5",
      question: "会場内に救護所はありますか？",
      answer:
        "はい、会場内には救護所が設置されています。体調が悪くなった場合や怪我をした場合は、救護所スタッフにご相談ください。",
    },
  ];

  return (
    <section className="min-h-full w-full">
      <div className="container mx-auto my-32 px-8 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="mb-8 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-end sm:gap-4">
          <h1 className="font-bold text-2xl text-primary tracking-widest sm:text-3xl md:text-4xl lg:text-5xl">
            FAQ
          </h1>
          <h2 className="font-semibold text-lg text-primary tracking-widest sm:text-xl md:text-2xl">
            よくあるご質問
          </h2>
        </div>
        {/* コンテンツ */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
