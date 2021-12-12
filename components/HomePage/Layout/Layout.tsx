import { FC } from "react";
import MainNav from "./MainNav";

const Layout: FC = ({ children }) => (
  <>
    <MainNav />
    <main>{children}</main>
  </>
);

export default Layout;
