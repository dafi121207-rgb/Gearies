export default function Contact() {
  return (
    <section className="py-32 bg-surface-container-low relative" id="contact">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black tracking-tighter text-on-surface mb-8 uppercase">Pemesanan & Kontak</h2>
            <div className="space-y-6 text-on-surface-variant font-light text-lg mb-12">
              <p><strong>Cara Pesan:</strong> Kami menyediakan kemudahan layanan pemesanan secara online.</p>
              <p><strong>Promo Menarik:</strong> Ikuti kami di media sosial dan dapatkan promo serta diskon khusus pada saat pembukaan usaha.</p>
              <p><strong>Kontak Kami:</strong> Hubungi layanan pelanggan kami yang ramah dan responsif melalui nomor telepon +62 812-2365-2700.</p>
            </div>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Lokasi Kami</h4>
                  <p className="text-on-surface-variant">Pesona Intan, Garut, Jawa Barat, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Workshop Hours</h4>
                  <p className="text-on-surface-variant">Monday - Saturday: 09:00 - 21:00 (Nocturnal Shift)</p>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <a className="inline-flex items-center gap-4 bronze-glow text-on-primary px-12 py-6 rounded-md font-bold text-xl transition-all hover:shadow-xl hover:shadow-primary/20" href="https://wa.me/6281223652700" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Pesan via WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-surface-container-lowest p-2 rounded-xl h-[450px] overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.344500007586!2d107.8636729749991!3d-7.201479192803997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b08423dbf7ef%3A0x54295322f591ac3d!2sPesona%20Intan%20Real%20Estate!5e0!3m2!1sid!2sid!4v1776594686808!5m2!1sid!2sid" 
                className="w-full h-full rounded-lg filter grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
