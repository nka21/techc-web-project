"use client";

import React, { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const QuestionIcon = () => {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-2 border-primary flex justify-center items-center flex-shrink-0">
      <p className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">
        Q
      </p>
    </div>
  );
};

const AnswerIcon = () => {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-primary flex justify-center items-center flex-shrink-0">
      <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white">
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
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 py-2 flex-grow">
          <QuestionIcon />
          <p className="text-sm sm:text-base lg:text-xl text-[#212121] text-pretty pr-4">
            {question}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] bg-[#0077c9] rounded-full flex items-center justify-center"
        >
          {isOpen ? (
            <LuMinus color="white" size={20} />
          ) : (
            <LuPlus color="white" size={20} />
          )}
        </button>
      </div>
      {isOpen && answer && (
        <div className="mt-4 p-3 sm:p-4 md:p-6 border-2 rounded-xl border-primary">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            <AnswerIcon />
            <p className="text-sm sm:text-base lg:text-xl text-[#212121] text-pretty">
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
      question: "雨天の場合、イベントはどうなりますか？",
      answer:
        "荒天の場合は延期または中止となる可能性があります。\n最新情報は公式ウェブサイトやSNSで随時お知らせいたします。",
    },
    {
      question: "駐車場はありますか？",
      answer:
        "はい、会場近くに無料駐車場をご用意しております。ただし、台数に限りがありますので、公共交通機関のご利用もご検討ください。",
    },
    {
      question: "イベントにはチケットが必要ですか？",
      answer:
        "メインイベントは入場無料です。ただし、一部のアトラクションやワークショップには別途チケットが必要な場合があります。",
    },
    {
      question: "マリンスポーツの参加方法を教えてください。",
      answer:
        "マリンスポーツへの参加は、会場内の受付ブースで当日申し込みが可能です。安全のため、参加前の説明会への出席が必須となります。",
    },
    {
      question: "会場内に救護所はありますか？",
      answer:
        "はい、会場内に救護所を設置しています。また、救護スタッフが巡回していますので、体調不良の際はお近くのスタッフにお声がけください。",
    },
  ];

  return (
    <section className="min-h-full w-full">
      <div className="container mx-auto my-16 sm:my-24 md:my-32 px-4 sm:px-8 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-8 sm:mb-12">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary tracking-widest">
            FAQ
          </h1>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-primary tracking-widest">
            よくあるご質問
          </h2>
        </div>
        {/* コンテンツ */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
