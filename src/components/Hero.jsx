export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Empowering a <span className="text-primary">Greener</span> Tomorrow
            </h1>
            <p className="text-lg text-gray-600">
              Join us in our mission to create a sustainable future through innovative waste management solutions and eco-friendly practices.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
