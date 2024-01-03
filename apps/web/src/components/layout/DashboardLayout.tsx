import { FC } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import MaxWidthContainer from "../common/MaxWidthContainer";

interface DashboardLayoutProps {
  // Add your page props here
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-primary-foreground">
      <Sidebar />
      <div className="fixed top-0 bottom-0 right-0 flex flex-col h-screen left-64">
        <Header />
        <MaxWidthContainer>{children}</MaxWidthContainer>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
