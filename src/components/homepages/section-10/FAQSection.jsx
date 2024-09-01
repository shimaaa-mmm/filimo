import React, { useState } from "react";
import "./index.scss"; // استایل های سفارشی برای این کامپوننت

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // آرایه شامل سوالات و پاسخ‌های مربوطه
  const faqs = [
    {
      question: "آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟",
      answer: (
        <p className="start">
          بله شما می توانید همه فیلم ها و سریال های فیلیمو را داخل خود اپلیکیشن
          فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
          هواپیما یا قطار هستید آنها را تماشا کنید. برای دانلود هم از طریق
          دانلود از طریق سایت و هم از طریق دانلود از طریق اپلیکیشن فیلیمو
          می‌توانید اقدام کنید. برای جزئیات بیشتر می‌توانید فیلم‌های آموزشی
          مربوط به <span className="highlight">دانلود از طریق سایت </span> و{" "}
          <span className="highlight">دانلود از طریق اپلیکیشن </span> را تماشا
          کنید.
        </p>
      ),
    },
    {
      question: "آیا فیلیمو برای خارج از ایران در دسترس است؟",
      answer:
        "خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست.",
    },
    {
      question: "آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟",
      answer:
        "  تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید.",
    },
    {
      question:
        "از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟ ",
      answer:
        "برای نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار اندروید)  ",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">سوالات متداول</h2>
      <p className="faq-subtitle">
        سوال شایع دیگر کاربران شاید برای شما پیش آمده باشد
      </p>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="plus-icon">
                {activeIndex === index ? "×" : "+"}
              </span>
              {faq.question}
            </div>
            <div
              className={`faq-answer ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
