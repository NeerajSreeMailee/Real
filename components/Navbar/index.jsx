import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.avif"; // Replace with your actual logo path

const Navbar = () => {
<<<<<<< HEAD
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
=======
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

>>>>>>> d981ea4 (Initial commit or your custom message)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<<<<<<< HEAD
    <nav className="h-16 flex items-center justify-between px-4 sm:px-8 md:px-16 mx-auto mt-4 relative">
      {/* Left: Logo */}
      <div className="flex items-center flex-shrink-0">
        <Image src={Logo} alt="Logo" width={80} height={80} className="object-contain" />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex-grow hidden md:flex items-center justify-center">
        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <Link href="/">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg z-50 h-16 flex items-center justify-between px-4 sm:px-8 md:px-16">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src={Logo}
          alt="Logo"
          width={40}
          height={40}
          className="object-contain hover:scale-110 transition-transform duration-300"
        />
        <span className="text-xl font-bold text-white">
          Brand<span className="text-cyan-400">Name</span>
        </span>
      </div>

      {/* Centered Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 text-base font-medium text-gray-200">
          <li>
            <Link href="/">
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                Home
              </a>
            </Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link href="/project">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
            <Link href="/project1">
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/features">
<<<<<<< HEAD
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
<<<<<<< HEAD
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>

<<<<<<< HEAD
      {/* Right: "Book a Call" Button */}
      <div className="hidden md:flex items-center flex-shrink-0">
        <Link href="/BookCall">
          <a className="bg-green-500 text-white font-bold text-xl py-5 px-12 rounded-lg transition duration-300 ease-in-out hover:bg-green-600">
            Book a Call
          </a>
        </Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger Menu) */}
      <div className="flex md:hidden items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
=======
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-200 hover:text-gray-100 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
>>>>>>> d981ea4 (Initial commit or your custom message)
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
<<<<<<< HEAD
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all ease-in-out duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          <li>
            <Link href="/">
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
        className={`absolute top-16 left-0 w-full bg-gray-800 shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-base font-medium text-gray-200">
          <li>
            <Link href="/">
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/project">
<<<<<<< HEAD
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/features">
<<<<<<< HEAD
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
<<<<<<< HEAD
              <a className="text-gray-700 transition duration-300 ease-in-out hover:text-gray-900">
=======
              <a className="hover:text-white transition duration-300 ease-in-out">
>>>>>>> d981ea4 (Initial commit or your custom message)
                Contact
              </a>
            </Link>
          </li>
<<<<<<< HEAD
          <li>
            <Link href="/BookCall">
              <a className="bg-green-500 text-white font-bold text-xl py-5 px-12 rounded-lg transition duration-300 ease-in-out hover:bg-green-600">
                Book a Call
              </a>
            </Link>
          </li>
=======
>>>>>>> d981ea4 (Initial commit or your custom message)
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;