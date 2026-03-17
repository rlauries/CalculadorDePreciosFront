import React from "react";
import "./PromoTicker.css";
import {
  Wrench,
  ShieldCheck,
  Layers,
  CloudSun,
  Building2,
  BadgeDollarSign
} from "lucide-react";


type TickerItem = {
  icon: React.ReactNode;
  text: string;
};

const items: TickerItem[] = [
  { icon: <Wrench size={26} />, text: "Custom Metal Fabrication • Engineered Systems" },
  { icon: <ShieldCheck size={26} />, text: "Code-Compliant Structures • FBC & ADA Ready" },
  { icon: <Layers size={26} />, text: "Aluminum, Steel & Composite Solutions" },
  { icon: <CloudSun size={26} />, text: "Exterior Systems Built for Durability" },
  { icon: <Building2 size={26} />, text: "Commercial & Residential Projects" },
  { icon: <BadgeDollarSign size={26} />, text: "Free Estimates • Professional Installation" },
  
];

export const PromoTicker: React.FC = () => {
  const loopItems = [...items, ...items];

  return (
    <div className="promo-ticker">
      <div className="promo-ticker__track">
        {loopItems.map((item, index) => (
          <div className="promo-ticker__item" key={index}>
            <span className="promo-ticker__icon">{item.icon}</span>
            <span className="promo-ticker__text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};