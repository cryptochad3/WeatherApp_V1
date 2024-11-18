import { FaRecycle, FaLeaf, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    icon: FaRecycle,
    title: "Waste Collection",
    description: "Regular, reliable waste collection services for homes and businesses."
  },
  {
    icon: FaLeaf,
    title: "Recycling Programs",
    description: "Comprehensive recycling solutions tailored to your needs."
  },
  {
    icon: FaHandsHelping,
    title: "Consulting",
    description: "Expert advice on sustainable waste management practices."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
