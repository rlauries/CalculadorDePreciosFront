import React from "react";
import "./WhyChooseUs.css";

export interface WhyChooseItem {
  id: string | number;
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title?: string;
  items: WhyChooseItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title = "WHY CHOOSE LAURIES WELDING GROUP?",
  items,
}) => {
  return (
    <section
      className="why-choose"
      aria-labelledby="why-choose-title"
    >
      <div className="why-choose__heading">
        <h2 id="why-choose-title">{title}</h2>

        <span
          className="why-choose__accent"
          aria-hidden="true"
        />
      </div>

      <div className="why-choose__grid">
        {items.map((item) => (
          <article
            className="why-choose__item"
            key={item.id}
          >
            <div className="why-choose__icon-wrapper">
              <img
                src={item.icon}
                alt=""
                className="why-choose__icon"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};