import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // 1. Save to Firebase via Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date()
      });

      // 2. Send via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative text-slate-900 font-sans selection:bg-gold-vibrant selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-emerald-100 via-sky-100 to-blue-50 bg-[length:200%_200%] animate-[pulse_10s_ease-in-out_infinite]" />
      
      {/* Header / Hero */}
      <header className="bg-emerald-justice text-white py-20 px-4 text-center shadow-[0_10px_30px_rgba(16,185,129,0.3)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Digital Affidavit: <br/><span className="text-gold-vibrant drop-shadow-lg">Life Reconstruction Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 font-medium">
            The Sunrise of Justice: Documenting the Biological Tax, Stolen Decades, and the Acuity Gap.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4 space-y-20 relative z-10">
        
        {/* The Narrative Section */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 transform hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-4xl font-extrabold text-emerald-justice mb-8 tracking-tight">The Unabridged Story</h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700">
            <p className="text-left border-l-4 border-gold-vibrant pl-6 hover:bg-slate-50 p-4 transition-colors rounded-r-xl">
              <strong className="text-emerald-justice block mb-1">The Biological Tax:</strong> 
              The compounded physical and mental toll of systemic neglect and medical gaslighting.
            </p>
            <p className="text-left border-l-4 border-gold-vibrant pl-6 hover:bg-slate-50 p-4 transition-colors rounded-r-xl">
              <strong className="text-emerald-justice block mb-1">Stolen Decades:</strong> 
              Years lost to an unacknowledged struggle, demanding a comprehensive reconstruction of life and health.
            </p>
            <p className="text-left border-l-4 border-gold-vibrant pl-6 hover:bg-slate-50 p-4 transition-colors rounded-r-xl">
              <strong className="text-emerald-justice block mb-1">The Acuity Gap:</strong> 
              The profound disconnect between the severity of the lived experience and the systems designed to provide care.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="italic text-slate-500 text-center font-medium font-serif">
                This digital affidavit stands as forensic evidence drawn from 41 sources, documenting the truth and demanding justice.
              </p>
            </div>
          </div>
        </section>

        {/* Media Embeds */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-slate-700">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gold-vibrant tracking-tight">Voice Audio Evidence</h2>
          <div className="aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden shadow-inner ring-4 ring-slate-700">
            <iframe 
              src="https://www.youtube.com/embed/GcnPlCD62h4" 
              title="Voice Audio Evidence" 
              className="w-full h-64 md:h-96"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-300 text-sm font-medium">Please listen to the full context to understand the depth of the affidavit.</p>
          </div>
        </section>

        {/* PRIMARY JUSTICE ACTION */}
        <section className="text-center bg-white rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_rgba(245,158,11,0.15)] border-2 border-gold-vibrant relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold-vibrant/5 group-hover:bg-gold-vibrant/10 transition-colors duration-500"></div>
          <h2 className="text-4xl font-extrabold text-emerald-justice mb-10 relative z-10">Primary Justice Action</h2>
          <a 
            href="https://clinquant-macaron-aad92f.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 inline-block bg-gold-vibrant text-white font-black text-xl md:text-2xl py-5 px-10 md:px-14 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.7)] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)] hover:scale-105 transition-all duration-300 mb-8 tracking-wider"
          >
            OPEN MY PAYMENT PORTAL (WEB APP)
          </a>
          <p className="text-xl md:text-2xl text-slate-800 font-bold relative z-10">
            My Payment Portal (Web App): <a href="https://clinquant-macaron-aad92f.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline text-emerald-600 hover:text-emerald-500 transition-colors uppercase decoration-4 underline-offset-4">Contribute</a>
          </p>
        </section>

        {/* Direct Contact Form */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-emerald-justice mb-4">Direct Contact Form</h2>
            <p className="text-slate-500 text-lg font-medium italic">Subtitle: "Send me a message."</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-justice transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-justice/20 focus:border-emerald-justice focus:bg-white transition-all outline-none"
                placeholder="Your legal or preferred name"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-justice transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-justice/20 focus:border-emerald-justice focus:bg-white transition-all outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-justice transition-colors">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-4 focus:ring-emerald-justice/20 focus:border-emerald-justice focus:bg-white transition-all outline-none resize-y"
                placeholder="Write your message here. Speak your truth..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-emerald-justice hover:bg-emerald-500 text-white font-bold text-lg py-5 rounded-xl transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:translate-y-0"
            >
              Send Secure Message
            </button>
            {status && (
              <div className={`p-4 rounded-xl text-center font-bold ${status.includes('successfully') ? 'bg-emerald-50 text-emerald-600' : status.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                {status}
              </div>
            )}
          </form>
        </section>

      </main>

      {/* Contribution Section / Footer */}
      <footer className="bg-slate-900 border-t-8 border-gold-vibrant text-white py-16 mt-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-extrabold text-white mb-10 tracking-wide uppercase">Support the Reconstruction</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-600 group">
              <p className="font-bold text-lg text-slate-300 mb-4 group-hover:text-white transition-colors">Stripe (Justice Funding)</p>
              <a href="https://buy.stripe.com/7sY4gz6Rg2JAceZgpE7ok00" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 bg-slate-700 group-hover:bg-gold-vibrant text-white rounded-lg font-bold transition-colors underline decoration-2 underline-offset-4">Contribute</a>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-600 group">
              <p className="font-bold text-lg text-slate-300 mb-4 group-hover:text-white transition-colors">PayPal (International)</p>
              <a href="https://www.paypal.com/paypalme/CHINCHEONGGHEE" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 bg-slate-700 group-hover:bg-gold-vibrant text-white rounded-lg font-bold transition-colors underline decoration-2 underline-offset-4">Contribute</a>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-600 group">
              <p className="font-bold text-lg text-slate-300 mb-4 group-hover:text-white transition-colors">Universal Contact Portal</p>
              <a href="https://exquisite-gnome-13f3d9.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 bg-slate-700 group-hover:bg-gold-vibrant text-white rounded-lg font-bold transition-colors underline decoration-2 underline-offset-4">Direct Message</a>
            </div>

          </div>
          
          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-500 font-medium tracking-wide">
              © {new Date().getFullYear()} Digital Affidavit: Life Reconstruction Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
