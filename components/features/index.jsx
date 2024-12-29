import { FaBuilding, FaHome, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

function Features() {
  return (
<<<<<<< HEAD
    <section className="bg-[#F5F5DC] py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Centered and Bold Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Real Estate Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center">
            <FaBuilding size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prime Locations
            </h3>
            <p className="text-gray-600 text-center">
              Discover properties located in the most sought-after neighborhoods with excellent connectivity.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaHome size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Luxurious Living
            </h3>
            <p className="text-gray-600 text-center">
              Experience luxurious living with high-end amenities and spacious, modern designs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaMapMarkerAlt size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Strategic Accessibility
            </h3>
            <p className="text-gray-600 text-center">
              Our properties are strategically located with easy access to shopping centers, schools, and transport hubs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaDollarSign size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-600 text-center">
=======
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Centered and Bold Title */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Real Estate Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <FaBuilding size={60} className="text-indigo-600 mb-6 transition-transform transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Prime Locations
            </h3>
            <p className="text-gray-600 text-center text-lg">
              Discover properties located in the most sought-after neighborhoods with excellent connectivity.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <FaHome size={60} className="text-indigo-600 mb-6 transition-transform transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Luxurious Living
            </h3>
            <p className="text-gray-600 text-center text-lg">
              Experience luxurious living with high-end amenities and spacious, modern designs.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <FaMapMarkerAlt size={60} className="text-indigo-600 mb-6 transition-transform transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Strategic Accessibility
            </h3>
            <p className="text-gray-600 text-center text-lg">
              Our properties are strategically located with easy access to shopping centers, schools, and transport hubs.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <FaDollarSign size={60} className="text-indigo-600 mb-6 transition-transform transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Competitive Pricing
            </h3>
            <p className="text-gray-600 text-center text-lg">
>>>>>>> d981ea4 (Initial commit or your custom message)
              Offering competitive prices with flexible payment plans to help you invest in your dream property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Features };