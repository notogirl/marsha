import { motion } from 'motion/react';
import { User, Mail, Lock, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
            <UserCheck size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Buat Akun Baru</h2>
          <p className="text-gray-500 mt-2">Daftar sekarang dan nikmati semua fitur kami.</p>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Nama Lengkap"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="Alamat Email"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="Kata Sandi"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
             <ShieldCheck className="text-blue-600 mt-0.5" size={18} />
             <p className="text-xs text-gray-600 leading-relaxed">
               Dengan mendaftar, Anda menyetujui <span className="font-bold text-blue-600 cursor-pointer">Syarat & Ketentuan</span> serta <span className="font-bold text-blue-600 cursor-pointer">Kebijakan Privasi</span> kami.
             </p>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
            Verifikasi & Daftar <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Sudah punya akun? {' '}
          <Link to="/" className="text-blue-600 font-bold hover:underline">
            Masuk di sini
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
