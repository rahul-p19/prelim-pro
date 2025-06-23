import { Link } from 'react-router'
import { MoveUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className='w-full flex flex-col items-center'>
      <div className='border-t border-secondary w-5/6 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center py-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary text-center md:text-left'>PrelimPro</h1>
        <h2 className='text-lg'>Hassle free online prelims!</h2>
      </div>
      <nav className='flex flex-col items-center gap-3'>
        <Link to="#features" className='hover:text-primary duration-200'>Features</Link>
        <Link to="/explore" className='hover:text-primary duration-200'>Explore</Link>
        <Link to="#contact" className='hover:text-primary duration-200'>Contact Us</Link>
      </nav>
      <Link to="/register" className='border border-primary/50 flex gap-2 p-4 hover:bg-secondary/20 duration-150 group'>
        Get Started <MoveUpRight className='group-hover:scale-125 duration-200' />
      </Link>
      </div>
      <div className='w-3/4 py-2 text-xs text-white/60 border-t border-secondary grid place-items-center'>
        <p>&copy; 2025 - Rahul Pandey</p>
      </div>
    </footer>
  )
}

export default Footer