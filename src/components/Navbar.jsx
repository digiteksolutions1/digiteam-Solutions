import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiX, FiMenu } from 'react-icons/fi'

const Logo = () => (
  <div className="flex items-center">
    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white bg-opacity-10 mr-3">
      <img src="/DigiTeam-Solutions-Logo.png" alt="Logo" className="h-10 w-10 rounded" />
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold text-white tracking-tight">DigiTeam Solutions</span>
      <span className="text-xs font-medium text-white text-opacity-80 tracking-wider">BUILD A DIGITAL TEAM</span>
    </div>
  </div>
)

// Dropdown Services Component
const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200 group"
      >
        <span>Services</span>
        <FiChevronDown className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <Link
            to="/services/accounting"
            className="block px-4 py-3 text-gray-800 hover:bg-secondary-light transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Accounting</p>
                <p className="text-xs text-gray-500">Financial services & tax</p>
              </div>
            </div>
          </Link>
          <Link
            to="/services/web"
            className="block px-4 py-3 text-gray-800 hover:bg-secondary-light transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Web Development</p>
                <p className="text-xs text-gray-500">Coming Soon</p>
              </div>
            </div>
          </Link>
          <Link
            to="/services/ai"
            className="block px-4 py-3 text-gray-800 hover:bg-secondary-light transition-colors duration-200 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">AI Solutions</p>
                <p className="text-xs text-gray-500">Coming Soon</p>
              </div>
            </div>
          </Link>
          <Link
            to="/services/recruitment"
            className="block px-4 py-3 text-gray-800 hover:bg-secondary-light transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">HR & Recruitment</p>
                <p className="text-xs text-gray-500">Coming Soon</p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

// NavItem Component
const NavItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
)

// MobileMenu Component
const MobileMenu = ({ isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const location = useLocation()

  // Close all submenus when route changes
  useEffect(() => {
    setOpenSubmenu(null)
  }, [location.pathname])

  // Close menu when clicking outside (on larger mobile devices)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div 
      ref={menuRef}
      className={`fixed inset-0 bg-primary-dark z-50 flex flex-col transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="container mx-auto px-6 py-4 flex-1 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-primary-light pb-4">
          <Link to='/' onClick={onClose}>
            <Logo />
          </Link>
          <button onClick={onClose} className="text-white text-2xl p-2">
            <FiX />
          </button>
        </div>

        <div className="py-6 space-y-2">
          <NavItem to="/" onClick={onClose}>Home</NavItem>

          <div className="relative">
            <button
              onClick={() => setOpenSubmenu(openSubmenu === 'services' ? null : 'services')}
              className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200"
            >
              <span>Services</span>
              <FiChevronDown className={`transition-transform duration-200 ${openSubmenu === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {openSubmenu === 'services' && (
              <div className="ml-6 mt-2 space-y-2">
                <Link
                  to="/services/accounting"
                  className="block px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  Accounting
                </Link>
                <Link
                  to="/services/web"
                  className="block px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200 opacity-70"
                  onClick={onClose}
                >
                  Web Development (Coming Soon)
                </Link>
                <Link
                  to="/services/ai"
                  className="block px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200 opacity-70"
                  onClick={onClose}
                >
                  AI Solutions (Coming Soon)
                </Link>
                <Link
                  to="/services/recruitment"
                  className="block px-4 py-2 text-white hover:bg-primary-light rounded-lg transition-colors duration-200 opacity-70"
                  onClick={onClose}
                >
                  HR & Recruitment (Coming Soon)
                </Link>
              </div>
            )}
          </div>

          <NavItem to="/careers" onClick={onClose}>Careers</NavItem>
          <NavItem to="/about" onClick={onClose}>About</NavItem>
          <NavItem to="/contact" onClick={onClose}>Contact</NavItem>
        </div>

        <Link to="/careers" onClick={onClose}>
          <button className="w-full mt-4 px-6 py-3 bg-white text-primary-DEFAULT rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

// Main Navbar Component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav className="bg-primary shadow-lg fixed w-full z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to='/'>
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <NavItem to="/">Home</NavItem>
              <ServicesDropdown />
              <NavItem to="/careers">Careers</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <Link to='/careers'>
                <button className="ml-2 px-4 py-2 lg:px-6 lg:py-2 bg-white text-primary-DEFAULT rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200">
                  Join Now
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-white p-2 focus:outline-none"
                aria-label="Open menu"
              >
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}