export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-6">
        Spybox 🚀
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mb-8">
        Il primo ad spy tool italiano, gratuito e visivo. Scopri gli annunci dei tuoi competitor, analizza le strategie e trova ispirazione per le tue campagne.
      </p>
      <a
        href="#"
        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Inizia subito
      </a>
    </div>
  );
}
