import { useState } from "react";

const useMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenu = () => {
    setIsActive(!isActive);
  };

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  return {
    isActive,
    handleOpenMenu,
    handleCloseMenu,
  };
};

export { useMenu };
