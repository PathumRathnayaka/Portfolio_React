import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from "./components/Footer.tsx";

function App() {
  // Always set dark mode
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#092537] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Articles />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;