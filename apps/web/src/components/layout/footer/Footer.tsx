import { FC } from "react";

interface FooterProps {
  // Add your page props here
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex-shrink-0 border-t-[0.5px] shadow-sm">
      <div className="h-16">
        <h1>Footer</h1>
      </div>
    </footer>
  );
};

export default Footer;
