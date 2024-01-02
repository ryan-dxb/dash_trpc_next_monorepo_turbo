import { FC } from "react";

interface HeaderProps {
  // Add your page props here
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex-shrink-0 w-full border-b-[0.5px]">
      <div className="h-14"></div>
    </div>
  );
};

export default Header;
