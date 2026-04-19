export default function About() {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-8 uppercase">Tentang Kami</h2>
            <div className="space-y-6 text-on-surface-variant font-light text-lg leading-relaxed">
              <p><strong>Siapa Kami:</strong> Gearies adalah makanan ringan inovatif yang terbuat dari tepung terigu berkualitas tinggi dengan tambahan topping cokelat vanila terbaik.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-surface-container p-10 rounded-xl shadow-2xl shadow-black/20 border-l-4 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">visibility</span>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Menjadi pionir dalam menciptakan camilan tematik yang menggabungkan desain dan rasa berkualitas tinggi, serta memperkenalkan inovasi baru dalam dunia kuliner.</p>
            </div>
            <div className="bg-surface-container p-10 rounded-xl shadow-2xl shadow-black/20 border-l-4 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">rocket_launch</span>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Menyediakan cookies dengan desain dan rasa yang berbeda, memperkenalkan konsep baru yang merangsang imajinasi, dan berfokus pada sustainability dengan menggunakan bahan baku ramah lingkungan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
