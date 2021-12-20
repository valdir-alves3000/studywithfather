import { useState } from "react";

const useThemeDark = () => {
  const [dark, setDark] = useState(false);

  const handleSetDark = () => {
    setDark(!dark);
  };

  return {
    dark,
    handleSetDark,
  };
};

export { useThemeDark };
