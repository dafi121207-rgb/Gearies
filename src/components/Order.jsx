import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Gearies original",
      desc: "Salted caramel core with burnt butter infusion and a dusting of edible bronze metallic flakes.",
      price: 20000,
      quantity: 2,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXbdns0atRWD10V-5R5G3Dm6RfojLTbSb2qreQA-Cshzu8_hrHi1e7ujExOwv1doK5KyBwkLjdgS-ZZBceU84LweDZrKj6FlMhQHeRytDEGqlpJeW_h8_rVXm_sV5e9GkdR9acrROUHuMGLnmxlk41DhHVx0d5J8HvhU3TYM3bK92pHyROL0T2ZgsI578ifLMqSq2lLnGgsZEdUEL4RjIE9zlh5TWd4AhLDMxsWAsnV6fa0MVf3WwMVhB-3JRfB5_PInC9CgWocLDd"
    },
    {
      id: 2,
      name: "Gearies full flavour",
      desc: "70% Valrhona dark chocolate with activated charcoal and maldon sea salt crystals.",
      price: 30000,
      quantity: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD70yoSh1p2ALKZIAtj4w_h5oKjp7AIhMZb-U7K_P7dl943lcpHEWW2X76h1TQ1xBy-UAreKbFjZBtcqjlzdagx7yoS1mqIxzIroL0OXz7X-yHAqAOFj_fpsZ8aShjxbMC7rP815JEbQvxK1ge5Y4b4RqS_zHpuYa2c2H6yuLeyuhzoNvdyJbSNkIbBS5-cJN-J7hR4q0nJlCA7NzVhe36Kmi_cnUM5PY8f2v4UcCmmQyTi3t5nBwSdr6u2K1Jov8RElAvNrWzei92D"
    }
  ]);

  const [shippingMethod, setShippingMethod] = useState("KIRIM REGULER");
  const [customerName, setCustomerName] = useState("");
  
  const handleWhatsApp = () => {
    let message = `Halo Gearies Cookies, saya ingin memesan:\n\n`;
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${formatRupiah(item.price * item.quantity)})\n`;
    });
    message += `\nSubtotal: ${formatRupiah(subtotal)}`;
    message += `\nPengiriman: ${shippingMethod} (${formatRupiah(forgingFee)})`;
    message += `\n*TOTAL: ${formatRupiah(total)}*\n\n`;
    message += `Nama Pemesan: ${customerName || "-"}`;

    const waUrl = `https://wa.me/6281223652700?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };
  
  const getForgingFee = (method) => {
    switch(method) {
      case "AMBIL DI TOKO": return 0;
      case "KIRIM KILAT": return 150000;
      case "KIRIM REGULER":
      default: return 75000;
    }
  };

  const forgingFee = getForgingFee(shippingMethod);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = items.length > 0 ? subtotal + forgingFee : 0;

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary min-h-screen flex flex-col pt-24">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#161311]/90 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto text-on-surface">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-stone-400 hover:text-stone-100 transition-colors flex items-center">
             <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </button>
          <div className="text-2xl font-black tracking-tighter text-stone-100 uppercase font-headline">Gearies</div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-stone-400 font-medium hover:text-stone-100 transition-colors font-label" href="/#catalog">Belanja</a>
          <a className="text-stone-400 font-medium hover:text-stone-100 transition-colors font-label" href="/#about">Tentang Kami</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-stone-100 p-2 hover:bg-stone-800/50 transition-all duration-300 rounded-lg scale-95 active:scale-90 flex items-center relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            {items.length > 0 && <span className="absolute top-1 right-1 bg-primary text-on-primary rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">{items.length}</span>}
          </button>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto px-6 pb-32 w-full">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tight uppercase mb-4 leading-none text-on-surface">
            Menyiapkan <br/>
            <span className="text-primary-fixed-dim">Pesananmu</span>
          </h1>
          <p className="text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed">
            Tinjau kembali pilihan artisanal Anda. Setiap kukis berbentuk gear selalu dibuat dari bahan premium, menunggu konfirmasi pesanan akhir dari Anda.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Basket Contents */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <h2 className="font-headline font-bold text-2xl uppercase tracking-wider">Isi Keranjang</h2>
              <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                {items.reduce((sum, i) => sum + i.quantity, 0)} Barang Dipilih
              </span>
            </div>

            {items.length === 0 ? (
              <div className="py-12 px-6 bg-surface-container rounded-xl text-center border border-outline-variant/20 border-dashed">
                 <p className="text-on-surface-variant italic mb-6">Keranjang Anda masih kosong...</p>
                 <button onClick={() => navigate('/')} className="bronze-glow text-on-primary font-headline font-bold py-3 px-8 rounded">
                    Pilih Menu Utama
                 </button>
              </div>
            ) : (
                items.map(item => (
                <div key={item.id} className="group relative flex flex-col md:flex-row gap-6 p-6 bg-surface-container rounded-xl transition-all duration-300 border border-transparent hover:border-outline-variant/30 hover:shadow-xl">
                  <div className="w-full md:w-40 h-40 overflow-hidden rounded-lg bg-surface-container-lowest">
                    <img alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.img}/>
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="font-headline font-bold text-2xl text-on-surface">{item.name}</h3>
                        <span className="font-headline font-bold text-xl text-primary whitespace-nowrap">{formatRupiah(item.price)}</span>
                      </div>
                      <p className="text-on-surface-variant text-sm max-w-md">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center bg-surface-container-lowest rounded-md p-1 border border-outline-variant/20">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded transition-colors disabled:opacity-50" disabled={item.quantity <= 1}>
                          <span className="material-symbols-outlined">remove</span>
                        </button>
                        <span className="w-12 text-center font-headline font-bold text-lg">{String(item.quantity).padStart(2, '0')}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded transition-colors">
                          <span className="material-symbols-outlined">add</span>
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-2 text-xs uppercase tracking-widest p-2">
                        <span className="material-symbols-outlined text-sm">delete</span>
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Customer Metadata & Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-high p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">settings_suggest</span>
              </div>
              <h2 className="font-headline font-bold text-xl uppercase tracking-widest mb-8 text-primary">Rincian Pesanan</h2>
              
              <div className="space-y-6 mb-10 relative z-10">
                <div className="space-y-2">
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Nama Pemesan</label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none text-on-surface font-headline font-bold focus:ring-2 focus:ring-primary/50 rounded py-3 px-4 outline-none transition-all" 
                    type="text" 
                    placeholder="Masukkan nama Anda..." 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Metode Pengiriman</label>
                  <select 
                    value={shippingMethod}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-full bg-surface-container-lowest border-none text-on-surface font-headline font-bold focus:ring-2 focus:ring-primary/50 outline-none rounded py-3 px-4 appearance-none"
                  >
                    <option value="KIRIM REGULER">KIRIM REGULER</option>
                    <option value="AMBIL DI TOKO">AMBIL DI TOKO</option>
                    <option value="KIRIM KILAT">KIRIM KILAT</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-outline-variant relative z-10">
                <div className="flex justify-between font-label text-sm">
                  <span className="text-on-surface-variant">SUBTOTAL</span>
                  <span className="font-bold">{formatRupiah(subtotal)}</span>
                </div>
                <div className="flex justify-between font-label text-sm">
                  <span className="text-on-surface-variant">ONGKOS KIRIM</span>
                  <span className="font-bold">{formatRupiah(forgingFee)}</span>
                </div>
                <div className="flex justify-between font-headline font-black text-2xl pt-4 border-t border-outline-variant/50">
                  <span>TOTAL</span>
                  <span className="text-primary">{formatRupiah(total)}</span>
                </div>
              </div>

              <div className="mt-10 relative z-10">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-br from-[#ffb77d] to-[#d97707] text-on-primary font-headline font-black py-5 rounded uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(217,119,7,0.2)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                  disabled={items.length === 0}
                >
                    Proses Pesanan
                </button>
              </div>
            </div>

            {/* Secure Check */}
            <div className="p-6 bg-surface-container-low rounded-xl flex items-center gap-4 border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <div>
                <p className="font-headline font-bold text-sm uppercase">Kualitas Terjamin</p>
                <p className="text-on-surface-variant text-xs font-body">Data dan privasi Anda selalu aman dan terjaga.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0c0a09] w-full py-16 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 max-w-7xl mx-auto">
          <div className="font-body text-xs tracking-widest uppercase text-stone-500">
            © 2024 GEARIES COOKIES. DIBUAT DENGAN TANGAN.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-body text-xs tracking-widest uppercase text-stone-500 hover:text-primary transition-colors" href="#">Kebijakan Privasi</a>
            <a className="font-body text-xs tracking-widest uppercase text-stone-500 hover:text-primary transition-colors" href="#">Syarat & Ketentuan</a>
            <a className="font-body text-xs tracking-widest uppercase text-stone-500 hover:text-primary transition-colors" href="#">Info Pengiriman</a>
            <a className="font-body text-xs tracking-widest uppercase text-stone-500 hover:text-primary transition-colors" href="#">Hubungi Kami</a>
          </div>
        </div>
      </footer>
      
      {/* Sticky Bottom Bar (Mobile/Tablets) */}
      <div className="fixed bottom-0 left-0 w-full backdrop-blur-md bg-stone-900/80 border-t border-outline-variant/10 p-4 md:hidden z-50">
        <button 
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] text-white font-headline font-black py-4 rounded-lg flex items-center justify-center gap-3 uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
            disabled={items.length === 0}
        >
          <span className="material-symbols-outlined">chat</span>
          Lanjutkan ke WhatsApp
        </button>
      </div>

      {/* Web Sticky Action */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50">
        <button 
            onClick={handleWhatsApp}
            className="group flex items-center gap-4 bg-surface-container-highest p-2 pr-6 rounded-full border border-outline-variant/20 shadow-2xl hover:bg-surface-bright transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
            disabled={items.length === 0}
        >
          <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined">chat</span>
          </div>
          <span className="font-headline font-bold uppercase tracking-widest text-sm text-stone-200">Lanjutkan ke WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
