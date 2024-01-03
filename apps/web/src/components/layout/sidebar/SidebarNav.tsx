"use client";

import useRoutes from "@repo/web/routes";
import { FC } from "react";
import SidebarnavItem from "./SidebarNavItem";

interface SidebarNavProps {
  // Add your page props here
}

const SidebarNav: FC<SidebarNavProps> = ({}) => {
  const { dashboardRoutes } = useRoutes();
  return (
    <nav className="p-4">
      <ul>
        {dashboardRoutes.map((route) => (
          <SidebarnavItem key={route.label} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
