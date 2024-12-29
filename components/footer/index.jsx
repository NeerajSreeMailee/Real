<<<<<<< HEAD
// components/footer.js
=======
>>>>>>> d981ea4 (Initial commit or your custom message)
import Image from 'next/image'; // Import Image component from Next.js
import { AiOutlineGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

export const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-[#c5deff] border-t py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-4">
=======
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Container for all Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-16">
          
          {/* Logo and Company Name Section */}
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-6">
>>>>>>> d981ea4 (Initial commit or your custom message)
              {/* Logo Image */}
              <Image
                src="/logo.avif" // Path to your logo in the public folder
                alt="MyDiyas Logo"
<<<<<<< HEAD
                width={48} // Adjust width as necessary
                height={48} // Adjust height as necessary
                className="object-contain"
              />
              <h3 className="text-2xl font-bold text-gray-900">MyDiyas - Marketing Agency</h3>
            </div>

            {/* Social Media Icons Below Company Name */}
            <div className="flex space-x-4 mt-4">
=======
                width={60} // Adjust width as necessary
                height={60} // Adjust height as necessary
                className="object-contain"
              />
              <h3 className="text-4xl font-extrabold text-white tracking-tight">MyDiyas</h3>
            </div>

            {/* Social Media Icons Below Company Name */}
            <div className="flex space-x-6 mt-6">
>>>>>>> d981ea4 (Initial commit or your custom message)
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-gray-500 hover:text-gray-900"
              >
                <AiOutlineGithub size={24} />
=======
                className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110"
              >
                <AiOutlineGithub size={30} />
>>>>>>> d981ea4 (Initial commit or your custom message)
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-gray-500 hover:text-gray-900"
              >
                <FiInstagram size={24} />
=======
                className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110"
              >
                <FiInstagram size={30} />
>>>>>>> d981ea4 (Initial commit or your custom message)
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-gray-500 hover:text-gray-900"
              >
                <FaTwitter size={24} />
=======
                className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter size={30} />
>>>>>>> d981ea4 (Initial commit or your custom message)
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="text-gray-500 hover:text-gray-900"
              >
                <GrLinkedin size={24} />
=======
                className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110"
              >
                <GrLinkedin size={30} />
>>>>>>> d981ea4 (Initial commit or your custom message)
              </a>
            </div>
          </div>

          {/* Get In Touch Section */}
<<<<<<< HEAD
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Get In Touch</h4>
            <a
              href="mailto:socialmydiyas@gmail.com"
              className="text-gray-500 hover:text-gray-900"
=======
          <div className="flex flex-col items-start md:items-end space-y-6">
            <h4 className="text-2xl font-extrabold text-white tracking-tight">Get In Touch</h4>
            <a
              href="mailto:socialmydiyas@gmail.com"
              className="text-white hover:text-indigo-200 transition duration-300"
>>>>>>> d981ea4 (Initial commit or your custom message)
            >
              socialmydiyas@gmail.com
            </a>
            <a
              href="tel:+918985250220"
<<<<<<< HEAD
              className="text-gray-500 hover:text-gray-900"
=======
              className="text-white hover:text-indigo-200 transition duration-300"
>>>>>>> d981ea4 (Initial commit or your custom message)
            >
              +91 8985250220
            </a>
            <a
              href="tel:+919494259453"
<<<<<<< HEAD
              className="text-gray-500 hover:text-gray-900"
=======
              className="text-white hover:text-indigo-200 transition duration-300"
>>>>>>> d981ea4 (Initial commit or your custom message)
            >
              +91 9494259453
            </a>
          </div>
        </div>

<<<<<<< HEAD
        {/* Horizontal Line with #F5F5DC color */}
        <hr className="my-8 border-[#F5F5DC]" />

        {/* Copyright Section */}
        <div className="text-center text-gray-500">
=======
        {/* Horizontal Line with subtle color for separation */}
        <hr className="my-8 border-t-2 border-white opacity-20" />

        {/* Copyright Section */}
        <div className="text-center text-white text-lg opacity-70">
>>>>>>> d981ea4 (Initial commit or your custom message)
          <p>
            Copyright © 2024 MyDiyas - Marketing Agency | Powered by MyDiyas - Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  );
};