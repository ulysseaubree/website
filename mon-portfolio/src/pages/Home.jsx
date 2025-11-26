// --- Home.jsx ---
export function Home() {
  return (
    <section className="pt-32 pb-20 px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-4">Développeur Freelance</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Je crée des sites modernes, rapides et élégants pour entreprises, startups et projets personnels.
      </p>
      <a href="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Me contacter
      </a>
    </section>
  );
}