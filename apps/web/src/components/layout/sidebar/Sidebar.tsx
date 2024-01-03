import { FC } from "react";

interface SidebarProps {
  // Add your page props here
}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="flex flex-shrink-0 w-64 border-r-[0.5px]">
      <h1>Sidebar</h1>
    </aside>
  );
};

export default Sidebar;
