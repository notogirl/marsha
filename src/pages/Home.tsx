import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Selamat Datang di
              <span className="block text-blue-600">Portal Modern Kami</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Bangun pengalaman digital Anda dengan antarmuka yang bersih, cepat, dan responsif.
              Kelola profil dan koneksi Anda di satu tempat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                Mulai Sekarang <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
               <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl"></div>
               
               <div className="grid grid-cols-2 gap-4 relative z-10 w-full max-w-xs">
                 {[
                   { icon: Star, color: 'text-yellow-500', label: 'Premium' },
                   { icon: Shield, color: 'text-green-500', label: 'Secure' },
                   { icon: Zap, color: 'text-blue-500', label: 'Fast' },
                   { icon: User, color: 'text-purple-500', label: 'Social' }
                 ].map((item, i) => (
                   <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-2"
                   >
                     <item.icon className={item.color} size={32} />
                     <span className="text-sm font-medium text-gray-600">{item.label}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Fitur Unggulan</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-default">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 mx-auto md:mx-0">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Layanan Terbaik {i}</h3>
                <p className="text-gray-500 text-sm">
                  Nikmati kemudahan akses dan performa tinggi dalam setiap sesi penggunaan aplikasi kami.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Re-using User icon from lucide-react if needed but for inline mapping
import { User } from 'lucide-react';
