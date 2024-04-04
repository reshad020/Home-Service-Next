import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-indigo-900 text-white py-4 px-8 flex justify-center items-center mt-20">
      <p>Copyright &copy; {new Date().getFullYear()} | Helpii</p>
    </footer>
  );
};

export default Footer;
