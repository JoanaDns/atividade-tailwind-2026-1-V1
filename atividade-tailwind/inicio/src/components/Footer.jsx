
export default function Footer() {
  return (
    <footer className="bg-pink-200 text-pink-900 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">

        <h2 className="text-xl font-bold">
          ☕ Grão Rosado
        </h2>

        <p className="text-sm">
          O café que abraça a sua manhã.
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-pink-600">
            Início
          </a>
          <a href="#cardapio" className="hover:text-pink-600">
            Cardápio
          </a>
          <a href="#sobre" className="hover:text-pink-600">
            Sobre
          </a>
          <a href="#contato" className="hover:text-pink-600">
            Contato
          </a>
        </div>

        <div className="border-t border-pink-300 w-full pt-4 mt-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Grão Rosado.
            Feito com ❤️ usando React + Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  )
}
