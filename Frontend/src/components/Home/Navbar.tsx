import { Menu } from "lucide-react"
import { Link } from "react-router"

function Navbar() {
  return (
    <>
    {/* Laptop Navbar */}
    <nav className="hidden md:flex w-4/5 border-secondary/40 border-b border-t px-6 py-1.5 text-lg justify-around items-center bg-background/50">
        <Link to="#features" className="hover:text-primary transition-colors duration-150 group">Features<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary/50"></span></Link>
        <Link to="#contact" className="hover:text-primary transition-colors duration-150 group">Contact Us<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary/50"></span></Link>
        <Link to="/" className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary">PrelimPro</Link>
        <Link to="/explore" className="hover:text-primary transition-colors duration-150 group">Explore<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary/50"></span></Link>
        <Link to="/register" className="hover:text-primary transition-colors duration-150 group">Get Started<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary/50"></span></Link>
    </nav>
    {/* Mobile Navbar */}
    <nav className="flex md:hidden w-full justify-between">
        <Link to="/" className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary">PrelimPro</Link>
        <Menu />
    </nav>
    </>
  )
}

export default Navbar