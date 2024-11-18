export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At EcoCycle, we're committed to creating a sustainable future through innovative waste management solutions. Our team of experts works tirelessly to develop and implement eco-friendly practices that benefit both our clients and the environment.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-gray-600">Head of Operations</p>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
