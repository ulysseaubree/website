// --- ProjectCard.jsx ---
export function ProjectCard({ title, desc, img, link }) {
  return (
    <a href={link} className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition block">
    <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
    </a>
  );
}