import {useThemeContext} from "@/context/themeContext";
import { Switch } from "@/components/ui/switch";

export default function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useThemeContext();

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={darkMode}
        onCheckedChange={setDarkMode}
        aria-label="Toggle dark mode"
      />
    </div>
  );
}