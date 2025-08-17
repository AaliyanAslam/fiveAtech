export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with Next.js and TypeScript.",
      image: "/api/placeholder/400/300",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Project Two",
      description: "An innovative mobile-first solution for modern businesses.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Project Three",
      description: "A comprehensive dashboard for data visualization and analytics.",
      image: "/api/placeholder/400/300",
      tags: ["Vue.js", "D3.js", "Python"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}