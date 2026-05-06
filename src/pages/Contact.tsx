import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
            <p className="text-xl text-gray-500">
              Ada pertanyaan atau kerjasama? Tim kami siap membantu Anda kapan saja.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase">Telepon</p>
                <p className="text-lg font-semibold text-gray-800">+62 812 3456 7890</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase">Email</p>
                <p className="text-lg font-semibold text-gray-800">halo@portaldev.com</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase">Alamat Kantor</p>
                <p className="text-lg font-semibold text-gray-800">Senayan City, Jakarta Selatan</p>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center lg:text-left">
            <p className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Ikuti Kami</p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <button 
                  key={i}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-3 h-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -mr-16 -mt-16 rounded-full blur-3xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="budi@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subjek</label>
                <input 
                  type="text" 
                  required
                  placeholder="Kebutuhan Projek / Pertanyaan Lain"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pesan Anda</label>
                <textarea 
                  required
                  placeholder="Tuliskan pesan Anda di sini..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all transform flex items-center justify-center gap-2 ${
                  isSubmitted ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-200'
                }`}
              >
                {isSubmitted ? 'Pesan Terkirim!' : (
                  <> Kirim Pesan Sekarang <Send size={18} /> </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
