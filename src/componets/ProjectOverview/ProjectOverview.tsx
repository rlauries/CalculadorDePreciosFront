import React from "react";
import "./ProjectOverview.css";
import {
  User,
  MapPin,
  Layers,
  Box,
  Home,
  CheckCircle,
  LucideIcon,
} from "lucide-react";


export type ProjectDataItem = {
  label: string;
  value: string | string[];
  icon?: LucideIcon;
};

type ProjectOverviewProps = {
  title?: string;
  overviewTitle?: string;
  paragraphs: string[];
  projectData: ProjectDataItem[];
};

const defaultIcons: LucideIcon[] = [
  User,
  MapPin,
  Layers,
  Box,
  Home,
  CheckCircle,
];

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  title = "PROJECT DATA",
  overviewTitle = "OVERVIEW",
  paragraphs,
  projectData,
}) => {
  return (
    <section className="project-overview">
      <div className="overview-content">
        <h3>{overviewTitle}</h3>

        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <aside className="project-data-card">
        <h3>{title}</h3>

        <div className="project-data-list">
          {projectData.map((item, index) => {
            const Icon = item.icon ?? defaultIcons[index] ?? CheckCircle;

            return (
              <div className="project-data-item" key={item.label}>
                <Icon className="project-data-icon" />

                <div>
                  <span>{item.label}</span>

                  {Array.isArray(item.value) ? (
                    item.value.map((line) => <p key={line}>{line}</p>)
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </section>
  );
};