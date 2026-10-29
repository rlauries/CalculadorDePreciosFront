import { useState } from "react";
import "./PergolaAssembly.css";

interface AssemblyStep {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

const assemblySteps: AssemblyStep[] = [
  {
    id: 0,
    number: "01",
    title: "Structural Framework",
    subtitle: "THE FOUNDATION",
    description:
      "Every custom pergola begins with a precision-fabricated aluminum framework. Heavy-duty 6×6 structural posts and perimeter beams create a strong, durable foundation designed to support the complete roofing system.",
    image: "/images/originals/Pergolas/assembly/frame.png",
    features: [
      "6×6 Aluminum Posts",
      "Structural Perimeter Beams",
      "Precision Fabrication",
    ],
  },
  {
    id: 1,
    number: "02",
    title: "Insulated Roof Panels",
    subtitle: "THE PROTECTION",
    description:
      "High-performance 3-inch insulated roof panels are installed over the structural framework. Each panel measures approximately 4 feet wide, creating a continuous roofing surface that provides shade and thermal insulation.",
    image: "/images/originals/Pergolas/assembly/frame+paneles.png",
    features: [
      '3" Insulated Roof Panels',
      "4-Foot Panel Sections",
      "Thermal Protection",
    ],
  },
  {
    id: 2,
    number: "03",
    title: "Architectural Finishing",
    subtitle: "THE FINAL TOUCH",
    description:
      "Custom 6-inch aluminum fascia covers are installed around the roof perimeter, concealing the exposed edges of the insulated panels. This final architectural detail creates a seamless, modern appearance.",
    image: "/images/originals/Pergolas/assembly/frame+paneles+adornors.png",
    features: [
      '6" Aluminum Fascia Covers',
      "Concealed Panel Edges",
      "Seamless Architectural Finish",
    ],
  },
];

export default function PergolaAssembly() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = assemblySteps[activeStep];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % assemblySteps.length);
  };

  const previousStep = () => {
    setActiveStep(
      (prev) =>
        (prev - 1 + assemblySteps.length) % assemblySteps.length
    );
  };

  return (
    <section className="pergola-assembly">

      <div className="assembly-container">

        {/* HEADER */}

        <div className="assembly-header">

          <span className="assembly-eyebrow">
            BUILT WITH PRECISION
          </span>

          <h2>
            FROM STRUCTURE
            <br />
            <span>TO PERFECTION.</span>
          </h2>

          <p>
            Discover how every Lauries Welding Group pergola
            comes together — from structural fabrication
            to the final architectural details.
          </p>

        </div>

        {/* MAIN CONTENT */}

        <div className="assembly-content">

          {/* IMAGE */}

          <div className="assembly-visual">

            <div className="assembly-image-container">

              <img
                key={currentStep.id}
                src={currentStep.image}
                alt={currentStep.title}
                className="assembly-image"
              />

              <div className="assembly-image-label">
                <span>ASSEMBLY STAGE</span>
                <strong>
                  {currentStep.number} / 03
                </strong>
              </div>

            </div>

            {/* IMAGE NAVIGATION */}

            <div className="assembly-navigation">

              <button
                type="button"
                onClick={previousStep}
                aria-label="Previous assembly step"
              >
                ←
              </button>

              <div className="assembly-progress">

                {assemblySteps.map((step, index) => (
                  <button
                    type="button"
                    key={step.id}
                    className={`progress-line ${
                      index <= activeStep ? "active" : ""
                    }`}
                    onClick={() => setActiveStep(index)}
                    aria-label={`Go to step ${step.number}`}
                    aria-current={
                      index === activeStep ? "step" : undefined
                    }
                  />
                ))}

              </div>

              <button
                type="button"
                onClick={nextStep}
                aria-label="Next assembly step"
              >
                →
              </button>

            </div>

          </div>

          {/* STEPS */}

          <div className="assembly-details">

            <div className="assembly-steps">

              {assemblySteps.map((step, index) => (

                <button
                  type="button"
                  key={step.id}
                  className={`assembly-step ${
                    activeStep === index ? "active" : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={activeStep === index}
                >

                  <span className="step-number">
                    {step.number}
                  </span>

                  <div className="step-content">

                    <span className="step-subtitle">
                      {step.subtitle}
                    </span>

                    <h3>{step.title}</h3>

                  </div>

                  <span className="step-arrow">
                    ↗
                  </span>

                </button>

              ))}

            </div>

            {/* ACTIVE STEP DETAILS */}

            <div
              key={currentStep.id}
              className="assembly-description"
            >

              <span className="description-label">
                STEP {currentStep.number}
              </span>

              <h3>{currentStep.title}</h3>

              <p>{currentStep.description}</p>

              <div className="assembly-features">

                {currentStep.features.map((feature) => (
                  <div
                    key={feature}
                    className="assembly-feature"
                  >
                    <span>✓</span>
                    {feature}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="assembly-footer">

          <div className="assembly-footer-text">

            <span>ENGINEERED TO LAST</span>

            <p>
              Custom fabrication. Premium materials.
              Exceptional craftsmanship.
            </p>

          </div>

          <a href="/contactus" className="assembly-cta">
            START YOUR PROJECT
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}