import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;