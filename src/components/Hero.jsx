export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <img alt="Artisanal gear-shaped cookies" className="w-full h-full object-cover opacity-40" data-alt="Close-up of golden brown gear-shaped cookies on a dark stone surface with warm dramatic lighting and crumbs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKSzoCbmDMue02m-g8PkBTo_FMRr4avUlM4f-Dv1Ph7ylP51D3zFzXZiRD-YdDW2UQXWmC6MeJqy9BhUuuBaRnvCXewle7xMcFEjys9Le3cIHCUePocu3oHPwGWnMnUkN0K-ec0xTdEwuDlcLEyOnklXTfC7XXOjiSD9O-fV3BvtgwDKaoWGVv5N0H5dRPFwf6pjQTqCRUEI5Jv83tSHG7hONaxh1wXuTzGDdr6qY3W8x8tbhERb4QBZTwHSYXnbMQt6YFm173ifjn"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-on-surface mb-2">Selamat datang di Gearies!</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface mb-8">
            GEAR UP FOR <span className="text-primary italic">FLAVOR!</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-on-surface-variant mb-12 max-w-xl leading-relaxed">
            Kami menghadirkan inovasi cookies berbentuk gear yang unik, memadukan elemen industri dengan estetika modern. Camilan lezat ini diciptakan untuk semua kalangan, mulai dari anak-anak, penggemar teknologi, hingga profesional industri.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a className="bronze-glow text-on-primary px-10 py-5 rounded-md font-bold text-lg text-center transition-all" href="#catalog">Keunggulan Kami</a>
            <a className="border border-outline-variant text-primary px-10 py-5 rounded-md font-bold text-lg text-center hover:bg-surface-container-high transition-all" href="#about">Tentang Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
}
