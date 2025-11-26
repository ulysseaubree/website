// --- ProjectPage.jsx ---
export function ProjectPage({ id }) {
  return (
    <section className="px-6 py-20">
    <h2 className="text-4xl font-bold mb-4">Projet {id}</h2>
    <p className="text-gray-600 max-w-2xl">Description détaillée du projet {id}.</p>
    </section>
  );
}