// --- CV.jsx ---
export function CV() {
  return (
    <section className="px-6 py-20 text-center">
    <h2 className="text-4xl font-bold mb-6">Mon CV</h2>
    <p className="text-gray-600 mb-4">Téléchargez mon CV ou consultez-le ci-dessous :</p>
      <a href="/cv.pdf" className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
        Télécharger le CV
      </a>
      <div className="mt-10 bg-gray-200 h-96 max-w-4xl mx-auto rounded-xl flex items-center justify-center">
      <p>Aperçu du CV (PDF intégré ou stylé plus tard)</p>
      </div>
    </section>
  );
}