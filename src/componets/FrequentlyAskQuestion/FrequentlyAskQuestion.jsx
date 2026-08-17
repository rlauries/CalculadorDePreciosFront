import React from "react";
import "./FrequentlyAskQuestion.css";
import { faqItems } from "./faqData.ts";

export const FrequentlyAskQuestion = () => {
  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>

      {faqItems.map((item, index) => (
        <details className="items" key={index}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
};