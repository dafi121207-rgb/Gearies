import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl shadow-2xl shadow-black/60">
      <nav className="flex justify-between items-center w-full px-8 md:px-12 py-6">
        <div className="text-2xl font-black tracking-tighter text-amber-500 uppercase">Gearies</div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-amber-500 font-bold hover:text-amber-300 transition-colors duration-300" href="#home">Beranda</a>
          <a className="text-stone-400 font-medium hover:text-amber-300 transition-colors duration-300" href="#about">Tentang Kami</a>
          <a className="text-stone-400 font-medium hover:text-amber-300 transition-colors duration-300" href="#features">Keunggulan</a>
          <a className="text-stone-400 font-medium hover:text-amber-300 transition-colors duration-300" href="#contact">Kontak</a>
        </div>
        <Link to="/order" className="bronze-glow text-on-primary px-6 py-2 rounded-md font-bold text-sm tracking-tight scale-95 hover:scale-100 transition-all duration-200">
          Order Now
        </Link>
      </nav>
    </header>
  );
}
