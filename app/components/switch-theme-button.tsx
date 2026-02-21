"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Show } from "./utils/show";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="switch-theme"
      className="shadow-none p-0 h-fit"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.div
        key={theme}
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Show when={theme === "light"} fallback={<Sun />}>
          <Moon />
        </Show>
      </motion.div>
    </Button>
  );
};

export default SwitchThemeButton;
