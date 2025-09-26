import {useThemeContext} from "@/context/themeContext";
import { Switch } from "@/components/ui/switch";

export default function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useThemeContext();

  return (
    <div className="flex items-center mt-1 gap-2">
      <div className="scale-80 md:scale-100 origin-center">
      <Switch
        checked={darkMode}
        onCheckedChange={setDarkMode}
        aria-label="Toggle dark mode"
      />
      </div>
    </div>
  );
}