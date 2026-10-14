import React from "react";
import { Link } from "react-router-dom-v5-compat";
import { Phone, Mail, ArrowRight } from "lucide-react";
import "./ContactFooter.css";

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface ContactFooterProps {
  eyebrow?: string;
  title?: string;
  description?: string;

  buttonText?: string;
  buttonLink?: string;

  backgroundImage?: string;

  logo: string;
  logoAlt?: string;

  navigation: FooterNavItem[];

  phone?: string;
  email?: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  eyebrow = "READY TO BUILD YOUR PROJECT?",
  title = "LET'S BUILD SOMETHING AMAZING TOGETHER.",
  description = "Tell us about your project and get a free estimate from our team.",

  buttonText = "GET A FREE ESTIMATE",
  buttonLink = "/contactus",

  backgroundImage,

  logo,
  logoAlt = "Lauries Welding Group",

  navigation,

  phone,
  email,
}) => {
  const phoneHref = phone?.replace(/[^\d+]/g, "");

  return (
    <footer className="contact-footer">

      {/* =====================================
          CTA SECTION
      ===================================== */}

      <section
        className="contact-footer__cta"
        aria-labelledby="contact-footer-title"
        style={
          backgroundImage
            ? {
                backgroundImage: `
                  linear-gradient(
                    rgba(0,0,0,0.60),
                    rgba(0,0,0,0.60)
                  ),
                  url("${backgroundImage}")
                `,
              }
            : undefined
        }
      >
        <div className="contact-footer__cta-container">

          {/* LEFT */}

          <div className="contact-footer__cta-left">

            <p className="contact-footer__eyebrow">
              {eyebrow}
            </p>

            <h2
              id="contact-footer-title"
              className="contact-footer__title"
            >
              {title}
            </h2>

          </div>

          {/* RIGHT */}

          <div className="contact-footer__cta-right">

            <p className="contact-footer__description">
              {description}
            </p>

            <Link
              to={buttonLink}
              className="contact-footer__button"
            >
              {buttonText}

              <ArrowRight
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================
          FOOTER NAVIGATION
      ===================================== */}

      <div className="contact-footer__bottom">

        <div className="contact-footer__bottom-container">

          {/* LOGO */}

          <Link
            to="/"
            className="contact-footer__logo-link"
            aria-label="Lauries Welding Group Home"
          >
            <img
              src={logo}
              alt={logoAlt}
              className="contact-footer__logo"
              loading="lazy"
              decoding="async"
            />
          </Link>


          {/* NAVIGATION */}

          <nav
            className="contact-footer__navigation"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                to={item.href}
                className="contact-footer__nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>


          {/* CONTACT */}

          <div className="contact-footer__contact">

            {phone && (
              <a
                href={`tel:${phoneHref}`}
                className="contact-footer__contact-item"
              >
                <Phone
                  size={17}
                  aria-hidden="true"
                />

                <span className="contact-footer__contact-text">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="contact-footer__contact-item"
              >
                <Mail
                  size={17}
                  aria-hidden="true"
                />

                <span className="contact-footer__contact-text">{email}</span>
              </a>
            )}

          </div>

        </div>

      </div>

    </footer>
  );
};