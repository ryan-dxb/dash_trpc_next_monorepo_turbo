import { FC } from "react";
import Image from "next/image";
import { VscDashboard } from "react-icons/vsc";

interface LogoProps {
  // Add your page props here
}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-16">
      <div>
        <VscDashboard className="mt-1 mr-1 text-3xl" />
      </div>
      <div>
        <span className="text-3xl font-bold">TRPC Dash</span>
      </div>
    </div>
  );
};

export default Logo;
