const benefits = [
  "Reduce environmental impact",
  "Cost-effective solutions",
  "Expert consultation",
  "24/7 support",
  "Customized programs"
];

export default function Benefits() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-gray-600 italic">
              "EcoCycle has transformed our approach to waste management. Their innovative solutions have not only reduced our costs but also helped us become more environmentally responsible."
            </blockquote>
            <p className="mt-4 font-semibold">- John Smith, CEO of GreenTech</p>
          </div>
        </div>
      </div>
    </section>
  );
}
