import { motion } from 'motion/react';
import { Camera, Mail, MapPin, Globe, Calendar, Edit3 } from 'lucide-react';

export default function Profile() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
      >
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        
        {/* Profile Content */}
        <div className="relative px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:space-x-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bella" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full border-2 border-white hover:bg-blue-700">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="mt-6 md:mt-0 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Bella Marshanda</h1>
                  <p className="text-gray-500 font-medium">Frontend Developer & Content Creator</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold text-gray-700 transition-colors">
                  <Edit3 size={18} /> Edit Profil
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                    <p className="font-medium">bellamarshanda@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Lokasi</p>
                    <p className="font-medium">Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Website</p>
                    <p className="font-medium">www.belladev.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Bergabung sejak</p>
                    <p className="font-medium">Mei 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Bio Singkat</h2>
              <p className="text-gray-600 leading-relaxed italic">
                "Saya seorang pengembang web yang sangat menyukai desain antarmuka yang bersih dan fungsional. 
                Selalu bersemangat untuk mempelajari teknologi baru dan berbagi ilmu kepada komunitas kreatif."
              </p>
              
              <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'UI Design'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
