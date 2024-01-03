import { FC } from "react";

interface MaxWidthContainerProps {
  // Add your page props here
  children: React.ReactNode;
}

const MaxWidthContainer: FC<MaxWidthContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-1 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-0">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default MaxWidthContainer;
