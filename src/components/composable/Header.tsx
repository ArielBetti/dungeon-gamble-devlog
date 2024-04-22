import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import ThemeToggler from "./ThemeToggler"
import { ROUTE } from "@/core/routes";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex border-b bg-card fixed top-0 left-0'>
      <main className="container flex items-center justify-between px-4 max-w-2xl">
        <Button onClick={() => navigate(ROUTE.HOME)} variant="link" className="p-0 text-xs text-foreground">DGG</Button>
        <ThemeToggler />
      </main>
    </div>
  )
}

export default Header