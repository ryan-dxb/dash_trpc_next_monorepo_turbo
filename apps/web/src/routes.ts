import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";

export const useRoutes = () => {
  const pathname = usePathname();

  const dashboardRoutes = useMemo(
    () => [
      {
        label: "Home",
        subRoutes: [
          {
            label: "Dashboard",
            href: "/dashboard",
            active: pathname === "/dashboard",
            icon: IoHomeOutline,
          },
        ],
      },
      {
        label: "CRM",
        subRoutes: [
          {
            label: "Customers",
            href: "/dashboard/customers",
            active: pathname === "/dashboard/customers",
            icon: BsPostcard,
          },
          {
            label: "Add New",
            href: "/dashboard/customers/add",
            active: pathname === "/dashboard/customers/add",
            icon: IoCreateOutline,
          },
        ],
      },
      {
        label: "Invoice",
        subRoutes: [
          {
            label: "All Invoices",
            href: "/dashboard/invoices",
            active: pathname === "/dashboard/invoices",
            icon: BsPostcard,
          },
          {
            label: "Add New",
            href: "/dashboard/invoices/add",
            active: pathname === "/dashboard/invoices/add",
            icon: IoCreateOutline,
          },
        ],
      },
      {
        label: "Blog Posts",
        subRoutes: [
          {
            label: "All Posts",
            href: "/dashboard/posts",
            active: pathname === "/dashboard/posts",
            icon: BiCategoryAlt,
          },
          {
            label: "Add New",
            href: "/dashboard/posts/add",
            active: pathname === "/dashboard/posts/add",
            icon: IoCreateOutline,
          },
          {
            label: "Categories",
            href: "/dashboard/posts/categories",
            active: pathname === "/dashboard/posts/categories",
            icon: AiOutlineTags,
          },
          {
            label: "Tags",
            href: "/dashboard/posts/tags",
            active: pathname === "/dashboard/posts/tags",
            icon: AiOutlineTags,
          },
        ],
      },
      {
        label: "Apps",
        subRoutes: [
          {
            label: "Chat",
            href: "/dashboard/chat",
            active: pathname === "/dashboard/chat",
            icon: IoHomeOutline,
          },
          {
            label: "Mailbox",
            href: "/dashboard/mailbox",
            active: pathname === "/dashboard/mailbox",
            icon: IoHomeOutline,
          },
          {
            label: "Calendar",
            href: "/dashboard/calendar",
            active: pathname === "/dashboard/calendar",
            icon: IoHomeOutline,
          },
          {
            label: "File Manager",
            href: "/dashboard/file-manager",
            active: pathname === "/dashboard/file-manager",
            icon: IoHomeOutline,
          },
          {
            label: "Ecommerce",
            href: "/dashboard/ecommerce",
            active: pathname === "/dashboard/ecommerce",
            icon: IoHomeOutline,
          },
          {
            label: "Projects",
            href: "/dashboard/projects",
            active: pathname === "/dashboard/projects",
            icon: IoHomeOutline,
          },
          {
            label: "Tasks",
            href: "/dashboard/tasks",
            active: pathname === "/dashboard/tasks",
            icon: IoHomeOutline,
          },
          {
            label: "Contacts",
            href: "/dashboard/contacts",
            active: pathname === "/dashboard/contacts",
            icon: IoHomeOutline,
          },
          {
            label: "Notes",
            href: "/dashboard/notes",
            active: pathname === "/dashboard/notes",
            icon: IoHomeOutline,
          },
          {
            label: "Search",
            href: "/dashboard/search",
            active: pathname === "/dashboard/search",
            icon: IoHomeOutline,
          },
        ],
      },
    ],
    [pathname]
  );

  return { dashboardRoutes };
};

export default useRoutes;
