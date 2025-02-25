"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Show } from "./utils/show";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="absolute right-5 top-5 border border-gray-300 dark:border-gray-600 rounded-[8px] hover:bg-black duration-300 hover:text-white dark:hover:bg-white dark:hover:text-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Show when={theme === "dark"} fallback={<Sun />}>
        <Moon />
      </Show>
    </Button>
  );
};

export default SwitchTheme;
