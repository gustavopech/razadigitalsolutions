export default function CompanyInfo() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Top Image */}
      <div className="flex justify-center">
        <img
          src="/about.png" // replace with your actual image path
          alt="Company Image"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Mission & Vision */}
      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-red-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to empower small and local businesses with smart, scalable, and affordable digital solutions.
            We aim to bridge the gap between technology and entrepreneurship by making high-quality design, automation, and strategy accessible to all.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-red-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To be the go-to digital partner for small businesses across the U.S. and Latin America — helping brands grow stronger,
            operate more efficiently, and connect meaningfully with their communities in both English and Spanish.
          </p>
        </div>
      </section>
    </main>
  );
}