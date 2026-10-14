import React, {
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom-v5-compat";

import {
  Phone,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { AuthContext } from "../../context/AuthContext.jsx";

import "./Header.css";

/* =====================================================
   TYPES
===================================================== */

interface HeaderNavItem {
  label: string;
  path: string;
}

interface HeaderProps {
  logo?: string;
  phone?: string;
  buttonText?: string;
  buttonLink?: string;
  transparent?: boolean;
}

/* =====================================================
   NAVIGATION DATA
===================================================== */

const navigation: HeaderNavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Projects",
    path: "/gallery",
  },
  {
    label: "Contact",
    path: "/contactus",
  },
];

const services = [
  {
    label: "Fences & Gates",
    path: "/fences",
  },
  {
    label: "Pergolas & Trellis",
    path: "/pergolas",
  },
  {
    label: "Stairs & Railings",
    path: "/stairs",
  },
  {
    label: "Exterior Cladding",
    path: "/claddings",
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export const Header: React.FC<HeaderProps> = ({
  logo = "/images/Logo/logo-creativo - Copy.png",
  phone = "(954) 464-7457",
  buttonText = "GET A FREE ESTIMATE",
  buttonLink = "/contactus",
  transparent = true,
}) => {
  const { user, logout } = useContext(AuthContext);

  const location = useLocation();

  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const phoneHref = phone.replace(/[^\d+]/g, "");

  /* =====================================================
     CLOSE MENUS
  ===================================================== */

  const closeMenus = () => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  /* =====================================================
     CLICK OUTSIDE
  ===================================================== */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideMegaMenu =
        megaMenuRef.current?.contains(target);

      const clickedServicesButton =
        servicesButtonRef.current?.contains(target);

      if (
        !clickedInsideMegaMenu &&
        !clickedServicesButton
      ) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =====================================================
     CLOSE ON ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =====================================================
     ACTIVE ROUTE
  ===================================================== */

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const servicesActive = services.some((service) =>
    isActive(service.path)
  );

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <header
      className={`lwg-header ${
        transparent ? "lwg-header--transparent" : ""
      }`}
    >
      <div className="lwg-header__container">

        {/* LOGO */}

        <Link
          to="/"
          className="lwg-header__logo-link"
          onClick={closeMenus}
        >
          <img
            src={logo}
            alt="Lauries Welding Group"
            className="lwg-header__logo"
          />
        </Link>


        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <nav
          className="lwg-header__navigation"
          aria-label="Main navigation"
        >

          {/* HOME */}

          <Link
            to="/"
            className={`lwg-header__nav-link ${
              isActive("/")
                ? "lwg-header__nav-link--active"
                : ""
            }`}
            onClick={closeMenus}
          >
            HOME
          </Link>


          {/* SERVICES */}

          <button
            ref={servicesButtonRef}
            type="button"
            className={`lwg-header__nav-link lwg-header__services-trigger ${
              servicesActive || megaMenuOpen
                ? "lwg-header__nav-link--active"
                : ""
            }`}
            onClick={() =>
              setMegaMenuOpen((prev) => !prev)
            }
            aria-expanded={megaMenuOpen}
            aria-controls="lwg-mega-menu"
          >
            SERVICES

            <ChevronDown
              size={14}
              className={
                megaMenuOpen
                  ? "lwg-header__chevron--open"
                  : ""
              }
            />
          </button>


          {/* GALLERY */}

          <Link
            to="/gallery"
            className={`lwg-header__nav-link ${
              isActive("/gallery")
                ? "lwg-header__nav-link--active"
                : ""
            }`}
            onClick={closeMenus}
          >
            GALLERY
          </Link>


          {/* CONTACT */}

          <Link
            to="/contactus"
            className={`lwg-header__nav-link ${
              isActive("/contactus")
                ? "lwg-header__nav-link--active"
                : ""
            }`}
            onClick={closeMenus}
          >
            CONTACT
          </Link>

        </nav>


        {/* =====================================
            ACTIONS
        ===================================== */}

        <div className="lwg-header__actions">

          {/* PHONE */}

          <a
            href={`tel:${phoneHref}`}
            className="lwg-header__phone"
          >
            <Phone size={17} aria-hidden="true" />

            <span>{phone}</span>
          </a>


          {/* ESTIMATE BUTTON */}

          <Link
            to={buttonLink}
            className="lwg-header__estimate"
            onClick={closeMenus}
          >
            <span>{buttonText}</span>

            <ArrowRight
              size={16}
              aria-hidden="true"
            />
          </Link>


          {/* AUTH */}

          {user && (
            <button
              type="button"
              className="lwg-header__logout"
              onClick={() => {
                logout();
                closeMenus();
              }}
            >
              Logout
            </button>
          )}

        </div>


        {/* =====================================
            MOBILE TOGGLE
        ===================================== */}

        <button
          type="button"
          className="lwg-header__menu-toggle"
          onClick={() =>
            setMobileMenuOpen((prev) => !prev)
          }
          aria-label={
            mobileMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="lwg-mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>


      {/* =====================================
          MEGA MENU DESKTOP
      ===================================== */}

      <div
        id="lwg-mega-menu"
        ref={megaMenuRef}
        className={`lwg-mega-menu ${
          megaMenuOpen ? "lwg-mega-menu--open" : ""
        }`}
        aria-hidden={!megaMenuOpen}
        inert={!megaMenuOpen}
      >
        <div className="lwg-mega-menu__container">

          {/* IMAGE */}

          <div className="lwg-mega-menu__image">

            <img
              src="/images/originals/Pergolas/IMG_7746.webp"
              alt="Custom pergola by Lauries Welding Group"
              loading="lazy"
              decoding="async"
            />

            <div className="lwg-mega-menu__image-overlay">

              <p>EXPLORE OUR WORK</p>

              <h3>OUR SERVICES</h3>

              <span>
                Inspired by your needs.
                Built for your space.
              </span>

              <Link
                to="/gallery"
                onClick={closeMenus}
              >
                VIEW OUR GALLERY
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>


          {/* LINKS */}

          <div className="lwg-mega-menu__content">

            <p className="lwg-mega-menu__eyebrow">
              RESIDENTIAL & COMMERCIAL
            </p>

            <h3>
              CUSTOM FABRICATION
              <br />
              & INSTALLATION
            </h3>

            <div className="lwg-mega-menu__links">

              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={closeMenus}
                  className="lwg-mega-menu__link"
                >
                  <span>{service.label}</span>

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>
              ))}

            </div>

            <Link
              to="/contactus"
              onClick={closeMenus}
              className="lwg-mega-menu__contact"
            >
              DISCUSS YOUR PROJECT
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </div>


      {/* =====================================
          MOBILE NAVIGATION
      ===================================== */}

      <nav
        id="lwg-mobile-navigation"
        className={`lwg-header__mobile-nav ${
          mobileMenuOpen
            ? "lwg-header__mobile-nav--open"
            : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >

        <Link
          to="/"
          onClick={closeMenus}
          className="lwg-header__mobile-link"
        >
          HOME
        </Link>


        {/* MOBILE SERVICES */}

        <div className="lwg-header__mobile-services">

          <button
            type="button"
            className="lwg-header__mobile-services-button"
            onClick={() =>
              setMobileServicesOpen((prev) => !prev)
            }
            aria-expanded={mobileServicesOpen}
          >
            SERVICES

            <ChevronDown
              size={18}
              className={
                mobileServicesOpen
                  ? "lwg-header__chevron--open"
                  : ""
              }
            />
          </button>

          {mobileServicesOpen && (
            <div className="lwg-header__mobile-services-links">

              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={closeMenus}
                >
                  {service.label}
                </Link>
              ))}

            </div>
          )}

        </div>


        <Link
          to="/gallery"
          onClick={closeMenus}
          className="lwg-header__mobile-link"
        >
          GALLERY
        </Link>

        <Link
          to="/contactus"
          onClick={closeMenus}
          className="lwg-header__mobile-link"
        >
          CONTACT
        </Link>


        {/* MOBILE AUTH */}

        {user ? (
          <button
            type="button"
            className="lwg-header__mobile-link"
            onClick={() => {
              logout();
              closeMenus();
            }}
          >
            LOGOUT
          </button>
        ) : (
          <Link
            to="/login"
            onClick={closeMenus}
            className="lwg-header__mobile-link"
          >
            LOGIN
          </Link>
        )}


        {/* MOBILE PHONE */}

        <a
          href={`tel:${phoneHref}`}
          className="lwg-header__mobile-phone"
        >
          <Phone size={17} />
          {phone}
        </a>


        {/* MOBILE CTA */}

        <Link
          to={buttonLink}
          className="lwg-header__mobile-estimate"
          onClick={closeMenus}
        >
          {buttonText}
          <ArrowRight size={16} />
        </Link>

      </nav>

    </header>
  );
};