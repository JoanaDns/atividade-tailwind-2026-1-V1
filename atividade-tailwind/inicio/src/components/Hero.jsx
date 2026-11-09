// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section id="início" className="bg-linear-to-br from-pink-200 to-pink-200 py-20 py-32 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">O café que abraça a sua manhã</h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-stone-700">
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>
      <div className="mt-8  flex flex-col sm:flex-row justify-center gap-4">
        <a href="#cardapio" className="bg-pink-600 texto branco px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 active:scale-95 transition"
        >Ver cardápio</a>
        <a href="#sobre" className="bg-pink-600 text-pink-700 hover:bg-pink-600
        hover:text-white">Nossa história</a>
      </div>
    </section>
  )
}
