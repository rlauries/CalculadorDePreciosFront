import React from 'react'
import './ContactUsButton.css'

interface ContactUsButtonProps {
  onClick?: () => void;
}

export const ContactUsButton: React.FC<ContactUsButtonProps> = ({ onClick }) => {
  return (
    <a className="nav-btn contactus" href="/contactus" onClick={onClick}>
      Contact Us
    </a>
  );
};
