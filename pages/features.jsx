<<<<<<< HEAD
import Head from "next/head";
import Navbar from "../components/Navbar"; // Make sure Navbar is imported here
import { FaBuilding, FaHome, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"; // Importing icons for the Features section

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Centered and Bold Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Real Estate Features
        </h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaBuilding size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prime Locations
            </h3>
            <p className="text-gray-600">
              Discover properties located in the most sought-after neighborhoods with excellent connectivity.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaHome size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Luxurious Living
            </h3>
            <p className="text-gray-600">
              Experience luxurious living with high-end amenities and spacious, modern designs.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaMapMarkerAlt size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Strategic Accessibility
            </h3>
            <p className="text-gray-600">
              Our properties are strategically located with easy access to shopping centers, schools, and transport hubs.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center justify-center text-center">
            <FaDollarSign size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-600">
              Offering competitive prices with flexible payment plans to help you invest in your dream property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <meta name="description" content="Real estate platform showcasing premium properties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        body {
          background-color: #c5deff; /* Apply the color to the entire background */
          margin: 0; /* Remove any default margin */
          font-family: 'Inter', sans-serif; /* Example font family */
        }
      `}</style>
      <Navbar /> {/* Navbar is included here */}
      <Features /> {/* Features section is included below the Navbar */}
    </>
  );
}
=======
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from 'next/image'; // Import Next.js Image component

const AboutPage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation once on component mount
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000); // Duration should match the animation time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center h-full text-center text-white z-10">
          <motion.h1 
            className="text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            Welcome to Our Real Estate Company&apos;s Website
          </motion.h1>
          <motion.p 
            className="text-lg max-w-xl mx-auto mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Transforming your dreams into reality with premium properties that match your lifestyle.
          </motion.p>
          <motion.a
            href="#services"
            className="bg-green-500 text-white py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transform transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            Discover Our Services
          </motion.a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            We are a leading real estate company with a commitment to providing luxurious, comfortable, and high-quality properties. Our experienced team is dedicated to finding your perfect home or investment property. Whether you are looking for a cozy apartment, a lavish villa, or a commercial space, we have something for everyone.
          </motion.p>
        </div>
      </section>

      {/* Mission and Vision with Animations */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To offer the best real estate solutions with integrity, transparency, and commitment to excellence. We strive to build lasting relationships with our clients and provide value through every transaction.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the top real estate company in the region, recognized for exceptional service and customer satisfaction. We envision a future where our properties become the preferred choice for individuals and businesses alike.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-semibold text-gray-800 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Featured Properties
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src="https://via.placeholder.com/400x300" 
                alt="Property 1" 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Villa in the City</h3>
                <p className="text-lg text-gray-600">5 Bedrooms, 4 Bathrooms, Pool, Garden</p>
                <a href="#" className="text-green-500 hover:underline mt-4 inline-block">View Property</a>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image 
                src="https://via.placeholder.com/400x300" 
                alt="Property 2" 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Apartment in Downtown</h3>
                <p className="text-lg text-gray-600">3 Bedrooms, 2 Bathrooms, Balcony</p>
                <a href="#" className="text-green-500 hover:underline mt-4 inline-block">View Property</a>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              <Image 
                src="https://via.placeholder.com/400x300" 
                alt="Property 3" 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Beachfront Condo</h3>
                <p className="text-lg text-gray-600">2 Bedrooms, 1 Bathroom, Ocean View</p>
                <a href="#" className="text-green-500 hover:underline mt-4 inline-block">View Property</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Ready to find your dream property? Reach out to us and let’s get started on your journey.
          </motion.p>
          <motion.a
            href="mailto:info@realestate.com"
            className="bg-green-500 text-white py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transform transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
>>>>>>> d981ea4 (Initial commit or your custom message)
