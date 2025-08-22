"use client";

import { motion } from "framer-motion";
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

  if (!mounted) {
    return <div className="absolute right-6 top-6 w-10 h-10 opacity-0" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="absolute right-6 top-6"
    >
      <Button
        aria-label="switch-theme"
        className="shadow-none border border-gray-300 dark:border-gray-600 rounded-[8px] hover:bg-black duration-300 hover:text-white dark:hover:bg-white dark:hover:text-black active:bg-none focus:bg-none"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <motion.div
          key={theme}
          initial={{ rotate: 180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Show
            when={theme === "light"}
            fallback={<Sun className="text-yellow-500" />}
          >
            <Moon />
          </Show>
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default SwitchThemeButton;
