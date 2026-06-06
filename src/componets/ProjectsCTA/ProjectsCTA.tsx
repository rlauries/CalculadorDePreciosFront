import { ArrowRight } from "lucide-react";
import "./ProjectsCTA.css";

export function ProjectsCTA() {
  return (
    <section className="projects-cta">
      <div className="projects-cta-overlay" />

      <div className="projects-cta-content">
        <h2>
          Transforming Architectural Spaces Across South Florida
        </h2>

        <div className="projects-cta-services">
          <span>Pergolas</span>
          <span>Floating Stairs</span>
          <span>Cladding</span>
          <span>Gates</span>
        </div>

        <a href="/contactus" className="projects-cta-button">
          REQUEST A CONSULTATION
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}