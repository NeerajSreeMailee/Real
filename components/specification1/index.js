import { FaBuilding, FaCogs, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const specification1 = () => {
  const features = [
    { icon: FaBuilding, title: 'Project Name', description: 'MK Tejus Apartments' },
    { icon: FaCogs, title: 'Features', description: 'Spacious, 3 Bedrooms, 2 Bathrooms' },
    { icon: FaMapMarkerAlt, title: 'Location', description: 'Pithapuram Colony, Visakhapatnam' },
    { icon: FaTag, title: 'Price', description: 'INR 25,00,000' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Project Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <feature.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default specification1;