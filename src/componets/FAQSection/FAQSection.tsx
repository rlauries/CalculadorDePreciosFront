import React, { useState } from "react";
import "./FAQSection.css";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  items,
  title = "FREQUENTLY ASKED QUESTIONS",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      className="faq-section"
      aria-labelledby="faq-section-title"
    >
      <div className="faq-section__heading">
        <h2 id="faq-section-title">{title}</h2>

        <span
          className="faq-section__accent"
          aria-hidden="true"
        />
      </div>

      <div className="faq-section__grid">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article
              key={item.question}
              className={`faq-section__item ${
                isOpen ? "faq-section__item--open" : ""
              }`}
            >
              <button
                type="button"
                className="faq-section__question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{item.question}</span>

                <span
                  className="faq-section__arrow"
                  aria-hidden="true"
                />
              </button>

              <div
                id={answerId}
                className="faq-section__answer"
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};