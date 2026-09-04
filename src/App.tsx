import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Training } from './components/Training';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400 selection:text-slate-950 font-sans antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
