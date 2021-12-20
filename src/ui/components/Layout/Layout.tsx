import React from "react";
import { useMenu } from "@hooks/menu/useMenu";
import { useThemeDark } from "@hooks/themes/useThemeDark";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.FC = ({ children }) => {
  const { dark, handleSetDark } = useThemeDark();
  const { isActive, handleCloseMenu, handleOpenMenu } = useMenu();

  return (
    <div className={dark ? "container active" : "container"}>
      <Header
        dark={dark}
        handleSetDark={handleSetDark}
        isActive={isActive}
        handleCloseMenu={handleCloseMenu}
        handleOpenMenu={handleOpenMenu}
      />
      <div
        onClick={handleCloseMenu}
        style={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
