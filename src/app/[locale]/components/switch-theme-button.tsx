"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Show } from "./utils/show";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      aria-label="switch-theme"
      className="shadow-none absolute right-6 top-6 border border-gray-300 dark:border-gray-600 rounded-[8px] hover:bg-black duration-300 hover:text-white dark:hover:bg-white dark:hover:text-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Show when={theme === "light"} fallback={<Sun />}>
        <Moon />
      </Show>
    </Button>
  );
};

export default SwitchThemeButton;
