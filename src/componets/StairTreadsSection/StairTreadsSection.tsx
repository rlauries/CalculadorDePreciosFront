import React, { useState } from "react";
import "./StairTreadsSection.css";
import { SectionIntro } from "../SectionIntro/SectionIntro.tsx";

type ThicknessOption = {
  label: string;
  value: string;
};

type TreadItem = {
  name: string;
  image: string;
  thicknesses: string[];
};

const thicknessOptions: ThicknessOption[] = [
  { label: `2" Thick`, value: "2" },
  { label: `2.5" Thick`, value: "2.5" },
  { label: `3" Thick`, value: "3" },
  { label: `3.5" Thick`, value: "3.5" },
  { label: `4" Thick`, value: "4" },
  { label: "Landing", value: "landing" }
];

const treadItems: TreadItem[] = [
  {
    name: "American Cherry",
    image: "/images/originals/stairs/Wood-Types/American-Cherry.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]
  },
  {
    name: "Mahogany",
    image: "/images/originals/stairs/Wood-Types/Mahogany.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]  },
  {
    name: "Red Cedar",
    image: "/images/originals/stairs/Wood-Types/Red-Cedar.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]
  },
  {
    name: "Thick Ash",
    image: "/images/originals/stairs/Wood-Types/Thick-Ash.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]  },
  {
    name: "Walnut",
    image: "/images/originals/stairs/Wood-Types/Walnut.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]
  },
  {
    name: "White Cedar",
    image: "/images/originals/stairs/Wood-Types/White-Cedar.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]
  },
  {
    name: "White-Oak.png",
    image: "/images/originals/stairs/Wood-Types/White-Oak.png",
    thicknesses: ["2", "2.5", "3", "3.5", "4", "landing"]
  },
  
];

export const StairTreadsSection: React.FC = () => {
  const [selectedThickness, setSelectedThickness] = useState<string>("2");

  const filteredItems = treadItems.filter((item) =>
    item.thicknesses.includes(selectedThickness)
  );
    
  return (
    <section className="stair-treads-section">
      <div className="stair-treads-container">
        <SectionIntro
          title="Stairs Treads"
          description="  We create and manufacture custom stair treads with top-quality craftsmanship"
        />
        
        <div className="stair-treads-tabs">
          {thicknessOptions.map((option) => (
            <button
              key={option.value}
              className={`stair-treads-tab ${
                selectedThickness === option.value ? "active" : ""
              }`}
              onClick={() => setSelectedThickness(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="stair-treads-grid">
          {filteredItems.map((item) => (
            <article className="stair-treads-card" key={item.name}>
              <div className="stair-treads-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="stair-treads-image"
                />
              </div>
              <h3 className="stair-treads-name">{item.name}</h3>
            </article>
          ))}
        </div>

        <div className="stair-treads-cta-wrap">
          <button className="stair-treads-cta" type="button">
            ☰ Get free estimate
          </button>
        </div>
      </div>
    </section>
  );
};