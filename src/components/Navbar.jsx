import { useEffect, useState } from 'react'
import Brand from './Brand.jsx'
import Button from './Button.jsx'
import { NAV_LINKS } from '../config.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', close)
    document.body.classList.toggle('menu-open', open)
    return () => { document.removeEventListener('keydown', close); document.body.classList.remove('menu-open') }
  }, [open])
  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Main navigation">
        <Brand />
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /></button>
        <div id="mobile-menu" className={`nav__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <Button href="#contact" className="nav__cta" onClick={() => setOpen(false)}>Request an Estimate</Button>
        </div>
      </nav>
    </header>
  )
}
