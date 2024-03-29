import { cn } from "@repo/ui/src/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

interface SidebarnavItemProps {
  // Add your page props here
  route: {
    label: string;
    href?: string;
    active?: boolean;
    subRoutes: {
      label: string;
      href: string;
      active: boolean;
      icon: IconType;
    }[];
  };
}

const SidebarnavItem: FC<SidebarnavItemProps> = ({ route }) => {
  return (
    <>
      <li className="my-1 text-xs font-normal tracking-tight uppercase text-muted-foreground cursor-text">
        {route.label}
      </li>
      {route.subRoutes && (
        <ul className="mb-4">
          {route.subRoutes.map((subRoute) => (
            <li key={subRoute.label}>
              <Link
                href={subRoute.href}
                key={subRoute.label}
                passHref
                shallow
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-semibold ",
                  subRoute.active
                    ? "bg-primary-foreground text-primary border-l-4 border-primary"
                    : "hover:bg-primary-foreground hover:text-primary hover:translate-x-1 duration-200 transition-all"
                )}
              >
                <subRoute.icon className="w-5 h-5 mr-2" />
                {subRoute.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SidebarnavItem;
