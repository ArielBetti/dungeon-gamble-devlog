import { TTheme, useTheme } from '../theme.provider';
import { Button } from '../ui/button'
import { Sun, Moon } from 'lucide-react'

const ThemeToggler = ({
  storageKey = "vite-ui-theme",
}) => {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem(storageKey) as TTheme;

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button className="hover:bg-transparent p-0" variant="ghost" size="icon" onClick={handleToggleTheme}>
      {theme === "light" ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
    </Button>
  )
}

export default ThemeToggler