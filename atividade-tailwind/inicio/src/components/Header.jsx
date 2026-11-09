const links = [
  { href: "#inicio", texto: "Início" },
  { href: "#cardapio", texto: "Cardápio" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#contato", texto: "Contato" },
];

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="bg-pink-200 shadow-sm sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-pink-900">
          ☕ Grão Rosado
        </a>
        <ul className="hidden md:flex gap-6 ">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium hover:text-pink-700 transition-colors"
              >
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
