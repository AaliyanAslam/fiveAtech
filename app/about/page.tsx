export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              We are a dedicated team committed to delivering exceptional solutions
              and services to our clients.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to provide innovative and reliable solutions that help
              businesses grow and succeed in today's competitive market.
            </p>
            <p className="text-gray-600">
              With years of experience and a passion for excellence, we strive to
              exceed expectations and build lasting relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}