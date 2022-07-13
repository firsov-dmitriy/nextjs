import { ReactElement, FC, ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
