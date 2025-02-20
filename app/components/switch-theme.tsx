"use client";

import { useTheme } from "next-themes";
import { Row } from "./utils/row";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Row className="space-x-4">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </Row>
  );
};

export default SwitchTheme;
