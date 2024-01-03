import { FC } from "react";
import Logo from "../../common/logo/Logo";
import { ScrollArea } from "@repo/ui";
import SidebarNav from "./SidebarNav";

interface SidebarProps {
  // Add your page props here
}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="flex  flex-col flex-shrink-0 w-64 border-r-[0.5px] shadow-sm">
      <div className="flex flex-shrink-0 w-full border-b-[0.5px] shadow-sm items-center justify-center">
        <Logo />
      </div>
      <ScrollArea className="flex-1">
        <SidebarNav />
      </ScrollArea>
      <div className="flex flex-shrink-0 w-full border-t-[0.5px] shadow-sm">
        <div className="h-16"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
