export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "🌐"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Consulting",
      description: "Strategic technology consulting to help your business grow and succeed.",
      icon: "💡"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to meet all your digital needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}