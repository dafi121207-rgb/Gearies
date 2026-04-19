export default function Footer() {
  return (
    <footer className="bg-stone-950 w-full py-12 px-12 tonal-shift from-stone-900 to-stone-950">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-bold text-stone-500 uppercase tracking-widest">Gearies</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-stone-500 font-body text-xs tracking-widest uppercase hover:text-stone-200 transition-all opacity-80 hover:opacity-100" href="#">Privacy</a>
          <a className="text-stone-500 font-body text-xs tracking-widest uppercase hover:text-stone-200 transition-all opacity-80 hover:opacity-100" href="#">Terms</a>
          <a className="text-stone-500 font-body text-xs tracking-widest uppercase hover:text-stone-200 transition-all opacity-80 hover:opacity-100" href="#">Wholesale</a>
          <a className="text-stone-500 font-body text-xs tracking-widest uppercase hover:text-stone-200 transition-all opacity-80 hover:opacity-100" href="#">Contact</a>
        </div>
        <div className="text-stone-500 font-body text-[10px] tracking-widest uppercase opacity-60">
          © 2024 Gearies Cookies. Precision Baked in the Nocturnal Atelier.
        </div>
      </div>
    </footer>
  );
}
