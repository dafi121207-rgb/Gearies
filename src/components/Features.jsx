export default function Features() {
  const features = [
    { title: "Desain Unik", icon: "stars", desc: "Bentuk gear membedakan Gearies dari cookies biasa dan memiliki daya tarik visual yang memikat." },
    { title: "Kualitas Premium", icon: "diamond", desc: "Menggunakan bahan baku berkualitas untuk memastikan konsistensi rasa yang lezat." },
    { title: "Sensasi Tekstur", icon: "cookie", desc: "Menawarkan tekstur yang renyah di luar namun lembut di dalam." },
    { title: "Multifungsi", icon: "celebration", desc: "Sangat cocok disajikan untuk berbagai macam acara." },
    { title: "Harga Bersahabat", icon: "payments", desc: "Harga yang ditawarkan pas di kantong, lengkap dengan pilihan paket hemat." }
  ];

  return (
    <section className="py-32 bg-background" id="features">
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface mb-4 uppercase">Keunggulan Kami</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative bg-surface-container-high rounded-xl p-10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-primary border border-transparent">
              <div className="mb-6">
                <span className="material-symbols-outlined text-6xl text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">{feature.title}</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
